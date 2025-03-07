export interface Invitation {
  id: string;
  task: {
    id: string;
    title: string;
    user: {
      email: string;
    };
  };
  createdAt: Date;
}
