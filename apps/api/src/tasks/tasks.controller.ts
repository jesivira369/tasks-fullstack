import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  Req,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { TaskStatus } from '@repo/types';

@UseGuards(AuthGuard('jwt'))
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Req() req: Request, @Body() createTaskDto: CreateTaskDto) {
    const userId = (req.user as { userId: string }).userId;

    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    return this.tasksService.create(userId, createTaskDto);
  }

  @Post(':taskId/invite/:userId')
  async inviteUser(
    @Req() req: Request,
    @Param('taskId') taskId: string,
    @Param('userId') invitedId: string,
  ) {
    const inviterId = (req.user as { userId: string }).userId;
    return this.tasksService.inviteUser(taskId, inviterId, invitedId);
  }

  @Post('invitation/:invitationId/respond')
  async respondToInvitation(
    @Req() req: Request,
    @Param('invitationId') invitationId: string,
    @Body('accept') accept: boolean,
  ) {
    const invitedId = (req.user as { userId: string }).userId;
    return this.tasksService.respondToInvitation(
      invitationId,
      invitedId,
      accept,
    );
  }

  @Get('invitations/pending')
  async getPendingInvitations(@Req() req: Request) {
    const userId = (req.user as { userId: string }).userId;

    return this.tasksService.getPendingInvitations(userId);
  }

  @Get('invitations/:invitationId')
  async getInvitationDetails(
    @Req() req: Request,
    @Param('invitationId') invitationId: string,
  ) {
    const userId = (req.user as { userId: string }).userId;

    return this.tasksService.getInvitationDetails(invitationId, userId);
  }

  @Get()
  findAll(@Req() req: Request) {
    const userId = (req.user as { userId: string }).userId;

    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    return this.tasksService.findAll(userId);
  }

  @Get(':id')
  findOne(@Req() req: Request, @Param('id') id: string) {
    const userId = (req.user as { userId: string }).userId;

    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    return this.tasksService.findOne(userId, id);
  }

  @Patch(':id')
  update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    const userId = (req.user as { userId: string }).userId;

    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    return this.tasksService.update(userId, id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    const userId = (req.user as { userId: string }).userId;

    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    return this.tasksService.remove(userId, id);
  }

  @Patch(':id/status')
  @UseGuards(AuthGuard('jwt'))
  async updateStatus(
    @Req() req: Request,
    @Param('id') taskId: string,
    @Body('status') status: TaskStatus,
  ) {
    const userId = (req.user as { userId: string }).userId;
    return this.tasksService.updateStatus(userId, taskId, status);
  }
}
