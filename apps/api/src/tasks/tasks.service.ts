import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskStatus } from '@repo/types';
import { NotificationsGateway } from 'src/notifications/notifications.gateway';

@Injectable()
export class TasksService {
  constructor(
    private prisma: PrismaService,
    private notificationsGateway: NotificationsGateway,
  ) {}

  async create(userId: string, createTaskDto: CreateTaskDto) {
    return await this.prisma.task.create({
      data: {
        ...createTaskDto,
        userId,
      },
    });
  }

  async inviteUser(taskId: string, inviterId: string, invitedId: string) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
      include: { user: true },
    });

    if (!task || task.userId !== inviterId) {
      throw new ForbiddenException(
        'No tienes permisos para invitar usuarios a esta tarea.',
      );
    }

    const existingInvitation = await this.prisma.taskInvitation.findFirst({
      where: { taskId, invitedId },
    });

    const existingCollaborator = await this.prisma.taskCollaborator.findFirst({
      where: { taskId, userId: invitedId },
    });

    if (existingInvitation) {
      throw new ForbiddenException('Este usuario ya fue invitado.');
    }

    if (existingCollaborator) {
      throw new ForbiddenException('Este usuario ya es colaborador.');
    }

    const invitation = await this.prisma.taskInvitation.create({
      data: {
        taskId,
        invitedId,
        status: 'PENDING',
      },
    });

    this.notificationsGateway.sendInvitationNotification(invitedId, {
      id: task.id,
      title: task.title,
      inviterEmail: task.user.email,
      invitationId: invitation.id,
    });

    return {
      message: 'Invitación enviada correctamente.',
      invitationId: invitation.id,
    };
  }

  async respondToInvitation(
    invitationId: string,
    invitedId: string,
    accept: boolean,
  ) {
    const invitation = await this.prisma.taskInvitation.findUnique({
      where: { id: invitationId },
    });

    if (!invitation || invitation.invitedId !== invitedId) {
      throw new NotFoundException(
        'Invitación no encontrada o no tienes permisos.',
      );
    }

    if (accept) {
      await this.prisma.taskCollaborator.create({
        data: {
          userId: invitedId,
          taskId: invitation.taskId,
        },
      });
    }

    await this.prisma.taskInvitation.delete({ where: { id: invitationId } });

    return { message: accept ? 'Invitación aceptada' : 'Invitación rechazada' };
  }

  async findAll(userId: string) {
    return await this.prisma.task.findMany({
      where: {
        OR: [{ userId }, { collaborators: { some: { userId } } }],
      },
      include: { user: true, collaborators: { include: { user: true } } },
    });
  }

  async findOne(userId: string, id: string) {
    const task = await this.prisma.task.findUnique({
      where: {
        id: id,
        OR: [{ userId }, { collaborators: { some: { userId } } }],
      },
      include: { user: true, collaborators: { include: { user: true } } },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  async update(userId: string, id: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.prisma.task.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!task) {
      throw new NotFoundException({
        message: 'La tarea no existe o no tienes acceso',
      });
    }

    if (task.userId !== userId) {
      throw new ForbiddenException({
        message: 'No tienes permiso para modificar esta tarea',
      });
    }

    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async updateStatus(userId: string, taskId: string, status: TaskStatus) {
    const isAuthorized = await this.prisma.task.findFirst({
      where: {
        id: taskId,
        OR: [{ userId }, { collaborators: { some: { userId } } }],
      },
    });

    if (!isAuthorized) {
      throw new UnauthorizedException(
        'No tienes permiso para modificar esta tarea.',
      );
    }

    return await this.prisma.task.update({
      where: { id: taskId },
      data: { status },
    });
  }

  async getPendingInvitations(userId: string) {
    return await this.prisma.taskInvitation.findMany({
      where: { invitedId: userId, status: 'PENDING' },
      include: {
        task: {
          select: { id: true, title: true, user: { select: { email: true } } },
        },
      },
    });
  }

  async getInvitationDetails(invitationId: string, userId: string) {
    const invitation = await this.prisma.taskInvitation.findUnique({
      where: { id: invitationId },
      include: {
        task: {
          select: { id: true, title: true, user: { select: { email: true } } },
        },
      },
    });

    if (!invitation || invitation.invitedId !== userId) {
      throw new NotFoundException(
        'Invitación no encontrada o no tienes permiso.',
      );
    }

    return invitation;
  }

  async remove(userId: string, id: string) {
    await this.findOne(userId, id);

    return await this.prisma.task.delete({
      where: { id, userId },
    });
  }
}
