import { IsString } from 'class-validator';

export class AddCollaboratorDto {
  @IsString()
  taskId: string;

  @IsString()
  collaboratorId: string;
}
