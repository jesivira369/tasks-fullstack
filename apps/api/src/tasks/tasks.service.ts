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
      where: { userId },
    });
  }

  async findOne(userId: string, id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id, userId },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  async update(userId: string, id: string, updateTaskDto: UpdateTaskDto) {
    await this.findOne(userId, id);

    return this.prisma.task.update({
      where: { id, userId },
      data: updateTaskDto,
    });
  }

  async updateStatus(userId: string, taskId: string, status: TaskStatus) {
    const isAuthorized = await this.prisma.task.findFirst({
      where: {
        id: taskId,
        OR: [{ userId }, { collaborators: { some: { id: userId } } }],
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

  async remove(userId: string, id: string) {
    await this.findOne(userId, id);

    return await this.prisma.task.delete({
      where: { id, userId },
    });
  }
}
