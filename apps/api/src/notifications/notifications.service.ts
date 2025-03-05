import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  private notifications: Record<string, string[]> = {};

  addNotification(userId: string, message: string) {
    if (!this.notifications[userId]) {
      this.notifications[userId] = [];
    }
    this.notifications[userId].push(message);
  }

  getNotifications(userId: string) {
    return this.notifications[userId] || [];
  }
}
