import { IsString, IsOptional, IsEnum } from 'class-validator';
import { TaskStatus } from '@repo/types';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(['PENDING', 'COMPLETED'])
  @IsOptional()
  status?: TaskStatus;
}
