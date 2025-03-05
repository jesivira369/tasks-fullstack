import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AddCollaboratorDto } from './dto/add-collaborator.dto';
import { TaskStatus } from '@repo/types';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createTaskDto: CreateTaskDto) {
    return await this.prisma.task.create({
      data: {
        ...createTaskDto,
        userId,
      },
    });
  }

  async addCollaborator(
    userId: string,
    AddCollaboratorDto: AddCollaboratorDto,
  ) {
    const { taskId, collaboratorId } = AddCollaboratorDto;

    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task || task.userId !== userId) {
      throw new UnauthorizedException(
        'No tienes permiso para agregar colaboradores.',
      );
    }

    const existingCollab = await this.prisma.taskCollaborator.findFirst({
      where: { taskId, userId: collaboratorId },
    });

    if (existingCollab) {
      throw new ConflictException(
        'El usuario ya es colaborador de esta tarea.',
      );
    }

    await this.prisma.taskCollaborator.create({
      data: { taskId, userId: collaboratorId },
    });

    return { message: 'Colaborador agregado exitosamente.' };
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
