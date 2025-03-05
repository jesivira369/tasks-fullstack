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
}
