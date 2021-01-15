import { INotification, INotificationProps } from "./types";

export class NotificationDecorator implements INotification {
  protected wrapee: INotification;

  constructor(wrapee: INotification) {
    this.wrapee = wrapee;
  }

  send(props: INotificationProps) {
    this.wrapee.send(props);
  }
}
