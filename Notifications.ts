import PushNotification, {Importance} from 'react-native-push-notification';
class Notification {
  constructor() {
    PushNotification.configure({
      onRegister: function (token) {
        console.log(token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION', notification);
      },
      popInitialNotification: true,

      requestPermissions: false,
    });

    PushNotification.createChannel(
      {
        channelId: 'reminders', // (required)
        channelName: 'Pill remainder notification', // (required)
        channelDescription: 'Pill remainders', // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );

    PushNotification.getScheduledLocalNotifications(rn => {
      console.log('SN --- ', rn);
    });
  }

  scheduleNotification(date, message) {
    PushNotification.localNotificationSchedule({
      channelId: 'reminders',
      title: 'TAKE YOUR PILLS!',
      message: message,
      date,
      allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
      /* Android Only Properties */
      repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
      repeatType: 'day',
    });
  }
}

export default new Notification();
