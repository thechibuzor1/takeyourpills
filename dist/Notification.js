"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_native_1 = require("@notifee/react-native");
var Notifications = /** @class */ (function () {
    function Notifications() {
        var _this = this;
        this.bootstrap();
        react_native_1["default"].onForegroundEvent(function (_a) {
            var type = _a.type, detail = _a.detail;
            switch (type) {
                case react_native_1.EventType.DISMISSED:
                    console.log('User dismissed notification', detail.notification);
                    break;
                case react_native_1.EventType.PRESS:
                    console.log('User pressed notification', detail.notification);
                    _this.handleNotificationOpen(detail.notification);
                    break;
            }
        });
        react_native_1["default"].onBackgroundEvent(function (_a) {
            var type = _a.type, detail = _a.detail;
            return __awaiter(_this, void 0, void 0, function () {
                var notification;
                return __generator(this, function (_b) {
                    notification = detail.notification;
                    console.log('Notification received: background', type, detail);
                    if (notification) {
                        this.handleNotificationOpen(notification);
                    }
                    return [2 /*return*/];
                });
            });
        });
        react_native_1["default"]
            .getTriggerNotificationIds()
            .then(function (ids) { return console.log('All trigger notifications: ', ids); });
        react_native_1["default"]
            .getTriggerNotifications()
            .then(function (notifications) {
            return console.log('All trigger notifications: ', notifications);
        });
        // notifee.cancelAllNotifications()
    }
    Notifications.prototype.handleNotificationOpen = function (notification) {
        var data = notification.data;
        console.log('Notification received: foreground', data);
    };
    Notifications.prototype.bootstrap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var initialNotification;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, react_native_1["default"].getInitialNotification()];
                    case 1:
                        initialNotification = _a.sent();
                        if (initialNotification) {
                            console.log('Notification caused application to open', initialNotification.notification);
                            console.log('Press action used to open the app', initialNotification.pressAction);
                            this.handleNotificationOpen(initialNotification.notification);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Notifications.prototype.checkPermissions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var settings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, react_native_1["default"].requestPermission()];
                    case 1:
                        settings = _a.sent();
                        if (settings.authorizationStatus >= react_native_1.AuthorizationStatus.AUTHORIZED) {
                            console.log('Permission settings:', settings);
                            return [2 /*return*/, true];
                        }
                        else {
                            console.log('User declined permissions');
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Notifications.prototype.scheduleNotification = function (_a) {
        var reminder = _a.reminder, date = _a.date;
        return __awaiter(this, void 0, void 0, function () {
            var hasPermissions, trigger;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.checkPermissions()];
                    case 1:
                        hasPermissions = _b.sent();
                        if (!hasPermissions) return [3 /*break*/, 3];
                        trigger = {
                            type: react_native_1.TriggerType.TIMESTAMP,
                            timestamp: +date
                        };
                        return [4 /*yield*/, react_native_1["default"].createTriggerNotification({
                                id: '1',
                                title: "\uD83D\uDD14 You asked for this reminder -  " + reminder,
                                body: 'Tap on it to check',
                                android: {
                                    channelId: 'reminder',
                                    pressAction: {
                                        id: 'default'
                                    }
                                },
                                data: {
                                    id: '1',
                                    action: 'reminder',
                                    details: {
                                        name: reminder,
                                        date: date.toString()
                                    }
                                }
                            }, trigger)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Notifications.prototype.cancelNotification = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, react_native_1["default"].cancelNotification('1')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Notifications;
}());
exports["default"] = new Notifications();
