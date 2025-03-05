export type TaskStatus = "PENDING" | "COMPLETED";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  userId: string;
  collaborators: string[];
  createdAt: Date;
  updatedAt: Date;
}
