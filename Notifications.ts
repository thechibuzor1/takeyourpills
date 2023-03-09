import notifee, {
  AuthorizationStatus,
  EventType,
  Notification,
  RepeatFrequency,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import {Alert} from 'react-native';

class Notifications {
  constructor() {
    this.bootstrap();

    notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification);
          this.handleNotificationOpen(detail.notification as Notification);
          break;
      }
    });

    notifee.onBackgroundEvent(async ({type, detail}) => {
      const {notification} = detail;
      console.log('Notification received: background', type, detail);
      if (notification) {
        this.handleNotificationOpen(notification);
      }
    });

    notifee
      .getTriggerNotificationIds()
      .then(ids => console.log('All trigger notifications: ', ids));
    notifee
      .getTriggerNotifications()
      .then(notifications =>
        console.log('All trigger notifications: ', notifications),
      );
    // notifee.cancelAllNotifications()
  }

  public handleNotificationOpen(notification: Notification) {
    const {data} = notification;
    console.log('Notification received: foreground', data);
  }

  public async bootstrap() {
    const initialNotification = await notifee.getInitialNotification();

    if (initialNotification) {
      console.log(
        'Notification caused application to open',
        initialNotification.notification,
      );
      console.log(
        'Press action used to open the app',
        initialNotification.pressAction,
      );
      this.handleNotificationOpen(initialNotification.notification);
    }
  }

  public async checkPermissions() {
    const settings = await notifee.requestPermission();

    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      console.log('Permission settings:', settings);
      return true;
    } else {
      console.log('User declined permissions');
      return false;
    }
  }

  public async scheduleNotification({
    reminder,
    date,
  }: {
    reminder: string;
    date: Date;
  }) {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    const hasPermissions = await this.checkPermissions();
    if (hasPermissions) {
      const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: +date,
        repeatFrequency: RepeatFrequency.DAILY, // repeat once a day
        alarmManager: {
          allowWhileIdle: true,
        },
      };
      const batteryOptimizationEnabled =
        await notifee.isBatteryOptimizationEnabled();
      if (batteryOptimizationEnabled) {
        // 2. ask your users to disable the feature
        Alert.alert(
          'Restrictions Detected',
          'To ensure notifications are delivered, please disable battery optimization for the app.',
          [
            // 3. launch intent to navigate the user to the appropriate screen
            {
              text: 'OK, open settings',
              onPress: async () =>
                await notifee.openBatteryOptimizationSettings(),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
      } else

      await notifee.createTriggerNotification(
        {
          id: '1',
          title: `TAKE YOUR PILLS!`,
          body: `${reminder}`,
          android: {
            channelId: channelId,
            pressAction: {
              id: 'default',
            },
          },
          data: {
            id: '1',
            action: 'reminder',
            details: {
              name: reminder,
              date: date.toString(),
            },
          },
        },
        trigger,
      );
    }
  }

  public async cancelNotification() {
    await notifee.cancelNotification('1');
  }
}

export default new Notifications();
