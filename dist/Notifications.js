"use strict";
exports.__esModule = true;
var react_native_push_notification_1 = require("react-native-push-notification");
var Notification = /** @class */ (function () {
    function Notification() {
        react_native_push_notification_1["default"].configure({
            onRegister: function (token) {
                console.log(token);
            },
            onNotification: function (notification) {
                console.log('NOTIFICATION', notification);
            },
            popInitialNotification: true,
            requestPermissions: false
        });
        react_native_push_notification_1["default"].createChannel({
            channelId: 'reminders',
            channelName: 'Pill remainder notification',
            channelDescription: 'Pill remainders',
            playSound: true,
            soundName: 'default',
            importance: react_native_push_notification_1.Importance.HIGH,
            vibrate: true
        }, function (created) { return console.log("createChannel returned '" + created + "'"); });
        react_native_push_notification_1["default"].getScheduledLocalNotifications(function (rn) {
            console.log('SN --- ', rn);
        });
    }
    Notification.prototype.scheduleNotification = function (date) {
        react_native_push_notification_1["default"].localNotificationSchedule({
            channelId: 'reminders',
            title: 'TAKE YOUR PILLS!',
            message: "It's time to take your pills",
            date: date,
            allowWhileIdle: false,
            /* Android Only Properties */
            repeatTime: 1,
            repeatType: 'day'
        });
    };
    return Notification;
}());
exports["default"] = new Notification();
