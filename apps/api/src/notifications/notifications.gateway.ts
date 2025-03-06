import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';

@WebSocketGateway({ namespace: 'notifications' })
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly jwtService: JwtService) {}

  private users = new Map<string, string>();

  handleConnection(client: Socket) {
    try {
      const token =
        client.handshake.auth?.token ||
        client.handshake.headers?.authorization?.split(' ')[1];

      if (!token) {
        console.log(`Cliente sin token rechazado: ${client.id}`);
        return client.disconnect();
      }

      const payload = this.jwtService.verify(token);
      const userId = payload.sub;

      this.users.set(userId, client.id);
      console.log(`Cliente conectado: ${client.id}, Usuario: ${userId}`);
    } catch (error) {
      console.log(`Error en conexión WebSocket: ${error.message}`);
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    const userId = Array.from(this.users.entries()).find(
      ([, socketId]) => socketId === client.id,
    )?.[0];

    if (userId) {
      this.users.delete(userId);
      console.log(`Cliente desconectado: ${client.id}`);
    }
  }

  @SubscribeMessage('registerUser')
  handleRegisterUser(
    @MessageBody() userId: string,
    @ConnectedSocket() client: Socket,
  ) {
    this.users.set(userId, client.id);
    console.log(`Usuario ${userId} registrado con socket ${client.id}`);
  }

  sendInvitationNotification(userId: string, taskData: any) {
    const socketId = this.users.get(userId);
    if (socketId) {
      this.server.to(socketId).emit('taskInvitation', taskData);
      console.log(`Notificación enviada a ${userId} para tarea ${taskData.id}`);
    }
  }
}
