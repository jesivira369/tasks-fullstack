import { User } from "./users";

export type TaskStatus = "PENDING" | "COMPLETED";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  userId: string;
  collaborators: TaskCollaborators[];
  createdAt: Date;
  updatedAt: Date;
  user: User;
}

export interface TaskCollaborators {
  taskId: string;
  user: User;
  id: string;
  userId: string;
}
