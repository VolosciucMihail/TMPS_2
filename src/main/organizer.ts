import { ITodo } from "./todo/types";
import { NotificationFactory } from "./notification";
import { NotificationType } from "./notification/types";

export class Organizer {
  private notification = new NotificationFactory().createCombinedNotificationService(
    []
  );
  private todo: ITodo[] = [];

  addTodo(task: ITodo): void {
    this.todo.push(task);
    this.notification.send({
      recipient: task.source,
      title: `Todo item: ${task.title}`,
      description: task.description,
    });
  }
}
