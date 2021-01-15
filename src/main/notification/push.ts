import { INotification, INotificationProps } from "./types";

export class PushNotification implements INotification {
  system: any;

  constructor(pushSystemDependency: any) {
    this.system = {
      MakePushNotificationRequest: (props: INotification) => null,
    };
  }

  send(props: INotificationProps): void {
    this.system.MakePushNotificationRequest(props);
    console.log(
      `Notification from ${props.recipient} about "${props.title}" via PushNotification`
    );
  }
}
