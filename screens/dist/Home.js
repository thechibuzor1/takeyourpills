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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.d = exports.check = void 0;
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
var react_native_1 = require("react-native");
var react_native_2 = require("@notifee/react-native");
var react_1 = require("react");
var react_native_calendars_1 = require("react-native-calendars");
var react_native_elements_1 = require("react-native-elements");
var react_native_calendar_strip_1 = require("react-native-calendar-strip");
var moment_1 = require("moment");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var react_native_swipe_list_view_1 = require("react-native-swipe-list-view");
var react_native_background_fetch_1 = require("react-native-background-fetch");
var NewPill_1 = require("../Components/NewPill");
var Settings_1 = require("../Components/Settings");
var MedicineContainer_1 = require("../Components/MedicineContainer");
var lottie_react_native_1 = require("lottie-react-native");
var Notifications_1 = require("../Components/Notifications");
var NotificationBar_1 = require("../Components/NotificationBar");
var MyPills_1 = require("../Components/MyPills");
var Me_1 = require("../Components/Me");
var DeleteAllPills_1 = require("../Components/DeleteAllPills");
var HiddenItem_1 = require("../Components/HiddenItem");
var react_native_app_intro_slider_1 = require("react-native-app-intro-slider");
var EnterDisplayName_1 = require("../Components/EnterDisplayName");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var Info_1 = require("../Components/Info");
var Notifications_2 = require("../Notifications");
function check(dF, dT, dC) {
    //convert dates to 'day/month/year' format
    var dateFrom = moment_1["default"](new Date(dF)).format('DD/MM/YYYY');
    var dateTo = moment_1["default"](new Date(dT)).format('DD/MM/YYYY');
    var dateCheck = moment_1["default"](new Date(dC)).format('DD/MM/YYYY');
    /*     var dateFrom = '02/05/2023';
    var dateTo = '09/03/2023';
    var dateCheck = '05/07/2023'; */
    var d1 = dateFrom.split('/');
    var d2 = dateTo.split('/');
    var c = dateCheck.split('/');
    var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
    var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
    var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);
    //cheack if date is in range of two dates
    return check >= from && check <= to;
}
exports.check = check;
var date = new Date();
exports.d = moment_1["default"](date);
var Home = function () {
    var _a = react_1.useState(''), displayName = _a[0], setDisplayName = _a[1];
    var _b = react_1.useState(false), showDisplayName = _b[0], setShowDisplayName = _b[1];
    exports.d.month(); // 1
    var _c = react_1.useState(exports.d.format('ddd MMM D YYYY')), day = _c[0], setDay = _c[1];
    var _d = react_1.useState([]), pillData = _d[0], setPillData = _d[1];
    var _e = react_1.useState(exports.d.format('dddd MMM D')), fullDate = _e[0], setFullDate = _e[1];
    var _f = react_1.useState('today'), header = _f[0], setHeader = _f[1];
    var _g = react_1.useState(moment_1["default"]()), selectedDate = _g[0], setSelectedDate = _g[1];
    var initBackgroundFetch = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, react_native_background_fetch_1["default"].configure({
                        minimumFetchInterval: 15,
                        stopOnTerminate: false,
                        enableHeadless: true,
                        startOnBoot: true,
                        // Android options
                        forceAlarmManager: true,
                        requiredNetworkType: react_native_background_fetch_1["default"].NETWORK_TYPE_NONE,
                        requiresCharging: false,
                        requiresDeviceIdle: false,
                        requiresBatteryNotLow: false,
                        requiresStorageNotLow: false
                    }, function (taskId) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log('Received background-fetch event: ', taskId);
                                    return [4 /*yield*/, loadData().then(function () {
                                            mainDrive(exports.d.format('ddd MMM D YYYY'));
                                            setPushNotification();
                                            generateNotifications();
                                        })];
                                case 1:
                                    _a.sent();
                                    react_native_background_fetch_1["default"].finish(taskId);
                                    return [2 /*return*/];
                            }
                        });
                    }); }, function (taskId) {
                        // Oh No!  Our task took too long to complete and the OS has signalled
                        // that this task must be finished immediately.
                        console.log('[Fetch] TIMEOUT taskId:', taskId);
                        react_native_background_fetch_1["default"].finish(taskId);
                    })];
                case 1:
                    _a.sent();
                    react_native_background_fetch_1["default"].start();
                    react_native_background_fetch_1["default"].scheduleTask({
                        taskId: 'com.foo.customtask',
                        delay: 5000,
                        forceAlarmManager: true,
                        periodic: true
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    var _h = react_1.useState([]), filterData = _h[0], setFilterData = _h[1];
    function mainDrive(date) {
        //set data based on date
        var listInDuration = []; //empty list of piils in range of selected date
        var listInDurationTimes = []; //empty list of times in date range
        var pills = [];
        //check if pills are in ramge of current date
        filterData.forEach(function (element) {
            if (check(element.startDate, element.endDate, date)) {
                listInDuration.push(element); //add those in range to the list
                return;
            }
        });
        //get their times in a day
        listInDuration.forEach(function (element) {
            element.times.forEach(function (element) {
                listInDurationTimes.push(element);
            });
        });
        //remove repeated times
        listInDurationTimes = __spreadArrays(new Set(listInDurationTimes));
        listInDurationTimes.sort(function (a, b) {
            return Number(a.replace(':', '')) - Number(b.replace(':', ''));
        });
        var mainReturn = [];
        //create pill with times
        listInDurationTimes.forEach(function (element) {
            var newData = {
                time: element,
                pills: []
            };
            mainReturn.push(newData);
        });
        //recreate pills without nested times list but only a specific time
        listInDuration.forEach(function (ele) {
            ele.times.forEach(function (element) {
                var pill = {
                    id: ele.id,
                    name: ele.name,
                    desc: ele.desc,
                    dosage: ele.dosage,
                    duration: ele.duration,
                    timesPerDay: ele.timesPerDay,
                    time: element,
                    startDate: ele.startDate,
                    endDate: ele.endDate,
                    instructions: ele.instructions,
                    daysTaken: ele.daysTaken
                };
                pills.push(pill); //add new piils to list of piils
            });
        });
        //add pills at specific times list
        mainReturn.forEach(function (ele) {
            pills.forEach(function (element) {
                if (element.time === ele.time) {
                    ele.pills.push(element);
                }
            });
        });
        setPillData(mainReturn);
        //notifications
        //set new data
    }
    function setPushNotification() {
        return __awaiter(this, void 0, void 0, function () {
            var todaysDuration, todaysTimes, currentTime;
            return __generator(this, function (_a) {
                todaysDuration = [];
                todaysTimes = [];
                filterData === null || filterData === void 0 ? void 0 : filterData.forEach(function (element) {
                    if (check(element.startDate, element.endDate, exports.d.format('ddd MMM D YYYY'))) {
                        todaysDuration.push(element); //add those in range to the list
                        return;
                    }
                });
                //get their times in a day
                todaysDuration.forEach(function (element) {
                    element.times.forEach(function (element) {
                        todaysTimes.push(element);
                    });
                });
                //remove repeated times
                todaysTimes = __spreadArrays(new Set(todaysTimes));
                todaysTimes.sort(function (a, b) {
                    return Number(a.replace(':', '')) - Number(b.replace(':', ''));
                });
                currentTime = Number(exports.d.format('HH:mm').replace(':', ''));
                todaysTimes.forEach(function (element) {
                    var dateTime = Number(element.replace(':', ''));
                    if (currentTime < dateTime) {
                        var notifDate = moment_1["default"](element, ['h:m a', 'H:m']).toDate();
                        var text = "It's time to take your " + element + " pills";
                        Notifications_2["default"].scheduleNotification({ reminder: text, date: notifDate });
                    }
                });
                return [2 /*return*/];
            });
        });
    }
    react_1.useEffect(function () { return mainDrive(day); }, [filterData]);
    react_1.useEffect(function () {
        if (fullDate === exports.d.format('dddd MMM D')) {
            setHeader('today');
        }
        else {
            setHeader(fullDate);
        }
    }, [fullDate]);
    var _j = react_1.useState(false), showCalendar = _j[0], setShowCalendar = _j[1];
    var slides = [
        {
            key: 1,
            title: 'Schedule Pills',
            text: 'Never miss\ntaking your pills',
            image: require('../assets/1.jpg'),
            backgroundColor: '#fff'
        },
        {
            key: 2,
            title: 'Manage Pills',
            text: 'Track pills durations, dosage and so on...',
            image: require('../assets/2.jpg'),
            backgroundColor: '#febe29'
        },
        {
            key: 3,
            title: 'Notifications',
            text: 'Get notified on\nmissed pills and pills due for renewal',
            image: require('../assets/3.jpg'),
            backgroundColor: '#22bcb5'
        },
        {
            key: 4,
            title: 'Calendar',
            text: 'View your pills schedule\nmonths ahead or behind.',
            image: require('../assets/4.jpg'),
            backgroundColor: '#22bcb5'
        },
        {
            key: 5,
            title: 'Strict Scheduling',
            text: 'Pills have to be taken\nwithin an hour before or after \nspecified time.',
            image: require('../assets/5.jpg'),
            backgroundColor: '#22bcb5'
        },
    ];
    /*   const color = colors[Math.floor(Math.random() * colors.length)]; */
    var _k = react_1.useState(false), confetti = _k[0], setConfetti = _k[1];
    var renderItem = function (data) { return (react_1["default"].createElement(react_native_1.View, { style: styles.rowFront },
        react_1["default"].createElement(MedicineContainer_1["default"], { props: data.item, confetti: confetti, setConfetti: setConfetti, day: day }))); };
    var renderHiddenItem = function (data) { return (react_1["default"].createElement(HiddenItem_1["default"], { props: data.item, filterData: filterData, setFilterData: setFilterData, mainDrive: mainDrive, setConfetti: setConfetti })); };
    var _l = react_1.useState(false), newPill = _l[0], setPillModal = _l[1];
    var _m = react_1.useState(false), settings = _m[0], setSettings = _m[1];
    var _o = react_1.useState(false), myPills = _o[0], setMyPills = _o[1];
    var _p = react_1.useState(false), loading = _p[0], setLoading = _p[1];
    var _q = react_1.useState(true), splash = _q[0], setSplash = _q[1];
    var _r = react_1.useState(false), notifications = _r[0], setNotifications = _r[1];
    var _s = react_1.useState(false), info = _s[0], setInfo = _s[1];
    var Loading = function () { return (react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png'), style: {
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        } },
        react_1["default"].createElement(lottie_react_native_1["default"], { style: { height: 200 }, source: require('../assets/loading.json'), autoPlay: true, speed: 2 }))); };
    var Empty = function () { return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.Text, { style: styles.noPills }, "Your Pill Schedule Is Empty."))); };
    var Splash = function () { return (react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png'), style: {
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        } },
        react_1["default"].createElement(lottie_react_native_1["default"], { style: { height: 200 }, source: require('../assets/medicine-pills.json'), autoPlay: true, speed: 2 }))); };
    var _t = react_1.useState([]), newNotificationData = _t[0], setNewNotification = _t[1];
    var _u = react_1.useState([]), notificationData = _u[0], setNotificationData = _u[1];
    function generateNotifications() {
        return __awaiter(this, void 0, void 0, function () {
            var today, currentTime, clonedData;
            return __generator(this, function (_a) {
                today = moment_1["default"](new Date());
                currentTime = Number(exports.d.format('HH:mm').replace(':', ''));
                pillData === null || pillData === void 0 ? void 0 : pillData.forEach(function (element) {
                    var dataTime = Number(element.time.replace(':', ''));
                    var windowOpen = Number(element.time.replace(':', '')) - 100;
                    var windowClosed = Number(element.time.replace(':', '')) + 100;
                    var takenCount = 0;
                    var pillCount = element.pills.length;
                    var pillName = [];
                    element.pills.forEach(function (element) {
                        pillName.push(element.name + ' ');
                        element.daysTaken.forEach(function (elem) {
                            if (elem.date === exports.d.format('ddd MMM D YYYY')) {
                                elem.time.forEach(function (ti) {
                                    if (Number(ti.replace(':', '')) > windowOpen &&
                                        Number(ti.replace(':', '')) < windowClosed) {
                                        takenCount += 1;
                                    }
                                });
                            }
                        });
                    });
                    if (pillCount !== takenCount &&
                        dataTime < currentTime &&
                        currentTime >= windowOpen &&
                        currentTime <= windowClosed) {
                        var notif = {
                            date: exports.d.format('ddd MMM D YYYY'),
                            tag: 'missed',
                            message: "It's not too late to take the pills you missed by " + element.time + ":",
                            sub: pillName,
                            setMyPills: { setMyPills: setMyPills },
                            redirect: false
                        };
                        newNotificationData.unshift(notif);
                    }
                    else if (pillCount !== takenCount && dataTime < currentTime) {
                        var notif = {
                            date: exports.d.format('ddd MMM D YYYY'),
                            tag: 'missed',
                            message: "Hey, You missed taking your " + element.time + " pills today:",
                            sub: pillName,
                            setMyPills: { setMyPills: setMyPills },
                            redirect: false
                        };
                        newNotificationData.unshift(notif);
                    }
                });
                filterData === null || filterData === void 0 ? void 0 : filterData.forEach(function (element) {
                    var end = moment_1["default"](new Date(element.endDate));
                    var daysLeft = end.diff(today, 'days') + 1;
                    var pillName = [];
                    if (daysLeft <= 5 && daysLeft >= 3) {
                        pillName.push(element.name + ' ');
                        var notif = {
                            date: exports.d.format('ddd MMM D YYYY'),
                            tag: 'almost done',
                            message: "Hey " + displayName + ", your circle is almost done with some pills. Check if you'd like to renew any:",
                            sub: pillName,
                            setMyPills: { setMyPills: setMyPills },
                            redirect: true
                        };
                        newNotificationData.unshift(notif);
                    }
                    else if (daysLeft === 0) {
                        pillName.push(element.name + ' ');
                        var notif = {
                            date: exports.d.format('ddd MMM D YYYY'),
                            tag: 'last day',
                            message: "Hey " + displayName + ", today is the your last day taking some pills. Check if you'd like to renew any: ",
                            sub: pillName,
                            setMyPills: { setMyPills: setMyPills },
                            redirect: true
                        };
                        newNotificationData.unshift(notif);
                    }
                    else if (daysLeft === 1) {
                        pillName.push(element.name + ' ');
                        var notif = {
                            date: exports.d.format('ddd MMM D YYYY'),
                            tag: 'almost done',
                            message: "Hello " + displayName + ", your circle ends in a day with some pills: ",
                            sub: pillName,
                            setMyPills: { setMyPills: setMyPills },
                            redirect: true
                        };
                        newNotificationData.unshift(notif);
                    }
                    else if (daysLeft === -1) {
                        pillName.push(element.name + ' ');
                        var notif = {
                            date: exports.d.format('ddd MMM D YYYY'),
                            tag: 'done',
                            message: "Hello " + displayName + ", your circle is done with some pills: ",
                            sub: pillName,
                            setMyPills: { setMyPills: setMyPills },
                            redirect: true
                        };
                        newNotificationData.unshift(notif);
                    }
                });
                clonedData = __spreadArrays(notificationData);
                newNotificationData.forEach(function (ele) {
                    if (!clonedData.includes(ele)) {
                        clonedData.unshift(ele);
                    }
                });
                async_storage_1["default"].setItem('notifications', JSON.stringify(clonedData))
                    .then(function () {
                    setNotificationData(clonedData);
                })["catch"](function (err) { return console.log(err); });
                return [2 /*return*/];
            });
        });
    }
    var _v = react_1.useState(false), showRealApp = _v[0], setShowRealApp = _v[1];
    function loadData() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                async_storage_1["default"].getItem('first_time').then(function (data) {
                    if (data !== null) {
                        setShowRealApp(true);
                    }
                });
                async_storage_1["default"].getItem('userName')
                    .then(function (data) {
                    if (data !== null) {
                        setDisplayName(JSON.parse(data));
                    }
                })["catch"](function (err) { return console.log(err); });
                async_storage_1["default"].getItem('pillData')
                    .then(function (data) {
                    if (data !== null) {
                        setFilterData(JSON.parse(data));
                        /*  setPushNotification(); */
                    }
                })["catch"](function (err) { return console.log(err); });
                async_storage_1["default"].getItem('notifications')
                    .then(function (data) {
                    if (data !== null) {
                        setNotificationData(JSON.parse(data));
                    }
                })["catch"](function (err) { return console.log(err); });
                return [2 /*return*/];
            });
        });
    }
    function checkPermission() {
        return __awaiter(this, void 0, void 0, function () {
            var hasPermissions, batteryOptimizationEnabled, powerManagerInfo;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Notifications_2["default"].checkPermissions()];
                    case 1:
                        hasPermissions = _a.sent();
                        if (!hasPermissions) {
                            react_native_1.Alert.alert('Permission Declined', 'To ensure notifications are delivered, please enable notifications for the app.', [
                                // 3. launch intent to navigate the user to the appropriate screen
                                {
                                    text: 'OK, open settings',
                                    onPress: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, react_native_2["default"].openNotificationSettings()];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    }); }); }
                                },
                                {
                                    text: 'Cancel',
                                    onPress: function () { return console.log('Cancel Pressed'); },
                                    style: 'cancel'
                                },
                            ], { cancelable: false });
                        }
                        return [4 /*yield*/, react_native_2["default"].isBatteryOptimizationEnabled()];
                    case 2:
                        batteryOptimizationEnabled = _a.sent();
                        if (batteryOptimizationEnabled) {
                            // 2. ask your users to disable the feature
                            react_native_1.Alert.alert('Restrictions Detected', 'To ensure notifications are delivered, please disable battery optimization for the app.', [
                                // 3. launch intent to navigate the user to the appropriate screen
                                {
                                    text: 'OK, open settings',
                                    onPress: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, react_native_2["default"].openBatteryOptimizationSettings()];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    }); }); }
                                },
                                {
                                    text: 'Cancel',
                                    onPress: function () { return console.log('Cancel Pressed'); },
                                    style: 'cancel'
                                },
                            ], { cancelable: false });
                        }
                        return [4 /*yield*/, react_native_2["default"].getPowerManagerInfo()];
                    case 3:
                        powerManagerInfo = _a.sent();
                        if (powerManagerInfo.activity) {
                            // 2. ask your users to adjust their settings
                            react_native_1.Alert.alert('Restrictions Detected', 'To ensure notifications are delivered, please adjust your settings to prevent the app from being killed', [
                                // 3. launch intent to navigate the user to the appropriate screen
                                {
                                    text: 'OK, open settings',
                                    onPress: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, react_native_2["default"].openPowerManagerSettings()];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    }); }); }
                                },
                                {
                                    text: 'Cancel',
                                    onPress: function () { return console.log('Cancel Pressed'); },
                                    style: 'cancel'
                                },
                            ], { cancelable: false });
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    /*  makeshift splash screen  */
    react_1.useEffect(function () {
        setTimeout(function () {
            loadData().then(function () {
                mainDrive(exports.d.format('ddd MMM D YYYY'));
                setPushNotification();
                generateNotifications();
                initBackgroundFetch();
                checkPermission();
                setSplash(false);
            });
        }, 1000);
    }, []);
    var _w = react_1.useState(false), showNotif = _w[0], setShowNotif = _w[1];
    var _x = react_1.useState(false), me = _x[0], setMe = _x[1];
    var _y = react_1.useState(false), deleteAllPills = _y[0], setDeleteAllPills = _y[1];
    var _z = react_1.useState(''), message = _z[0], setMessage = _z[1];
    react_1.useEffect(function () {
        setTimeout(function () {
            setShowNotif(false);
        }, 3000);
    }, [showNotif]);
    /*   useEffect(() => {
      generateNotifications();
    }, [d.format('mm')]); */
    var renderSlideItem = function (_a) {
        var item = _a.item;
        return (react_1["default"].createElement(react_native_1.View, { key: item.key, style: styles.slide },
            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, item.title),
            react_1["default"].createElement(react_native_1.Image, { style: styles.img, source: item.image }),
            react_1["default"].createElement(react_native_1.Text, { style: styles.text }, item.text)));
    };
    var onDone = function () {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        async_storage_1["default"].setItem('first_time', JSON.stringify(true)).then(function () {
            setShowRealApp(true);
        });
        if (!displayName.trim()) {
            setShowDisplayName(true);
        }
    };
    var renderNextButton = function () {
        return (react_1["default"].createElement(react_native_1.View, { style: styles.buttonCircle },
            react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('chevron-right'), color: "rgba(255, 255, 255, .9)", size: 24 })));
    };
    var renderDoneButton = function () {
        return (react_1["default"].createElement(react_native_1.View, { style: [styles.buttonCircle, { backgroundColor: 'green' }] },
            react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('check'), color: "rgba(255, 255, 255, .9)", size: 24 })));
    };
    return splash ? (react_1["default"].createElement(Splash, null)) : !showRealApp ? (react_1["default"].createElement(react_native_app_intro_slider_1["default"], { renderItem: renderSlideItem, data: slides, onDone: onDone, renderDoneButton: renderDoneButton, renderNextButton: renderNextButton, showSkipButton: true, activeDotStyle: {
            backgroundColor: '#000000'
        } })) : (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.StatusBar, { barStyle: "light-content" }),
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: newPill, transparent: true, onRequestClose: function () { return setPillModal(false); } }, react_1["default"].createElement(NewPill_1["default"], { setPillModal: setPillModal, setShowNotif: setShowNotif, setMessage: setMessage, mainDrive: mainDrive, filterData: filterData, setFilterData: setFilterData })),
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: showDisplayName, transparent: true, onRequestClose: function () { return setShowDisplayName(false); } }, react_1["default"].createElement(EnterDisplayName_1["default"], { displayName: displayName, setDisplayName: setDisplayName, setShowDisplayName: setShowDisplayName, setMessage: setMessage, setShowNotif: setShowNotif })),
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: settings, transparent: true, onRequestClose: function () { return setSettings(false); } }, react_1["default"].createElement(Settings_1["default"], { setSettings: setSettings, setLoading: setLoading, setMyPills: setMyPills, setMe: setMe, setDeleteAllPills: setDeleteAllPills, setInfo: setInfo })),
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: notifications, transparent: true, onRequestClose: function () { return setNotifications(false); } }, react_1["default"].createElement(Notifications_1["default"], { setNotifications: setNotifications, setMyPills: setMyPills, notificationData: notificationData, pillData: pillData, setNewNotification: setNewNotification })),
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: me, transparent: true, onRequestClose: function () { return setMe(false); } }, react_1["default"].createElement(Me_1["default"], { setMe: setMe, displayName: displayName, setDisplayName: setDisplayName })),
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: deleteAllPills, transparent: true, onRequestClose: function () { return setDeleteAllPills(false); } }, react_1["default"].createElement(DeleteAllPills_1["default"], { setDeleteAllPills: setDeleteAllPills, setFilterData: setFilterData, setShowNotif: setShowNotif, setMessage: setMessage, mainDrive: mainDrive })),
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: myPills, transparent: true, onRequestClose: function () { return setMyPills(false); } }, react_1["default"].createElement(MyPills_1["default"], { setMyPills: setMyPills, filterData: filterData, setShowNotif: setShowNotif, setMessage: setMessage, mainDrive: mainDrive, setFilterData: setFilterData, showNotif: showNotif, message: message })),
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: info, transparent: true, onRequestClose: function () { return setInfo(false); } }, react_1["default"].createElement(Info_1["default"], { setInfo: setInfo })),
        loading ? (react_1["default"].createElement(Loading, null)) : (react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png'), style: { display: 'flex', flex: 1 } },
            react_1["default"].createElement(react_native_1.View, { style: styles.DateCon },
                react_1["default"].createElement(react_native_1.View, { style: styles.DateConL },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.7, onPress: function () {
                            setLoading(true);
                            setTimeout(function () {
                                setShowCalendar(!showCalendar);
                                setLoading(false);
                            }, 150);
                        }, style: styles.DateMonth },
                        react_1["default"].createElement(react_native_1.Text, { style: {
                                color: 'black',
                                fontSize: 18,
                                marginRight: 5,
                                fontFamily: 'Satoshi-Bold'
                            } }, exports.d.format('MMM YYYY')),
                        !showCalendar ? (react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('caret-down'), color: "gray" })) : (react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('caret-up'), color: "gray" }))),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { width: 40 }, activeOpacity: 0.5, onPress: function () {
                            setLoading(true);
                            setTimeout(function () {
                                setNotifications(true);
                                setLoading(false);
                            }, 150);
                        } },
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('bell'), style: { marginLeft: 5 }, size: 22, color: 'black' }),
                        react_1["default"].createElement(react_native_elements_1.Badge, { value: newNotificationData.length, badgeStyle: { backgroundColor: 'red' }, containerStyle: {
                                position: 'absolute',
                                top: -4,
                                right: 4,
                                display: newNotificationData.length !== 0 ? 'flex' : 'none'
                            } }))),
                react_1["default"].createElement(react_native_1.View, { style: {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { width: 40 }, activeOpacity: 0.5, onPress: function () {
                            setLoading(true);
                            setTimeout(function () {
                                setSettings(true);
                                setLoading(false);
                            }, 150);
                        } },
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('sliders'), style: { marginRight: 15 }, size: 22, color: 'black' })),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { width: 40 }, activeOpacity: 0.5, onPress: function () {
                            setLoading(true);
                            setTimeout(function () {
                                setPillModal(true);
                                setLoading(false);
                            }, 150);
                        } },
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('plus'), style: { marginRight: 15 }, size: 24, color: 'black' })))),
            react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: { marginTop: 10, width: '95%', alignSelf: 'center' } }),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { style: styles.Header },
                    "Hello ",
                    displayName,
                    ","),
                react_1["default"].createElement(react_native_1.Text, { style: styles.SubHeader },
                    "Your medicine schedule for ",
                    header),
                react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: {
                        width: '100%',
                        alignSelf: 'center',
                        marginTop: 15
                    } })),
            message !== 'Pills Edit Sucessful! 🥶' &&
                message !== 'Pills have been deleted! 🤯' &&
                showNotif && react_1["default"].createElement(NotificationBar_1["default"], { text: message }),
            react_1["default"].createElement(react_native_swipe_list_view_1.SwipeListView, { ListHeaderComponent: function () {
                    var _a;
                    return (react_1["default"].createElement(react_native_1.View, null,
                        showCalendar && (react_1["default"].createElement(react_native_1.View, { style: { marginTop: 0, backgroundColor: 'white' } },
                            react_1["default"].createElement(react_native_calendars_1.Calendar, { displayLoadingIndicator: true, 
                                // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                                disableAllTouchEventsForDisabledDays: true, style: { backgroundColor: 'transparent' }, theme: {
                                    backgroundColor: '#ffffff',
                                    calendarBackground: '#ffffff',
                                    arrowColor: 'black',
                                    monthTextColor: 'black',
                                    indicatorColor: 'black',
                                    textDayFontFamily: 'Satoshi-Light',
                                    textMonthFontFamily: 'Satoshi-Bold',
                                    textDayHeaderFontFamily: 'Satoshi-Light',
                                    textDayFontWeight: '300',
                                    textMonthFontWeight: 'bold',
                                    textDayHeaderFontWeight: '300',
                                    textDayFontSize: 16,
                                    textMonthFontSize: 16,
                                    textDayHeaderFontSize: 16
                                }, enableSwipeMonths: true, onDayPress: function (date) {
                                    setLoading(true);
                                    setTimeout(function () {
                                        setDay(moment_1["default"](date.dateString.toLocaleString()).format('ddd MMM D YYYY'));
                                        mainDrive(moment_1["default"](date.dateString.toLocaleString()).format('ddd MMM D YYYY'));
                                        setFullDate(moment_1["default"](date.dateString.toLocaleString()).format('dddd MMM D'));
                                        setSelectedDate(moment_1["default"](date.dateString.toLocaleString()));
                                        setLoading(false);
                                    }, 250);
                                }, collapsable: true, markingType: 'period', markedDates: (_a = {},
                                    _a[selectedDate.format('YYYY-MM-DD').toString()] = {
                                        color: '#2CA6FF',
                                        selected: true,
                                        startingDay: true,
                                        endingDay: true,
                                        marked: true,
                                        dotColor: '#132342'
                                    },
                                    _a), initialDate: selectedDate.format('YYYY-MM-DD').toString() }))),
                        react_1["default"].createElement(react_native_calendar_strip_1["default"], { scrollable: true, scrollerPaging: true, calendarHeaderStyle: { display: 'none' }, style: {
                                height: 80,
                                paddingTop: 10,
                                paddingBottom: 10,
                                marginBottom: 20
                            }, dateNumberStyle: {
                                color: 'black',
                                marginTop: 5,
                                fontFamily: 'Satoshi-Bold'
                            }, dateNameStyle: { color: 'black', fontFamily: 'Satoshi-Bold' }, highlightDateNumberStyle: {
                                color: 'black',
                                marginTop: 5
                            }, highlightDateNameStyle: { color: 'black' }, highlightDateContainerStyle: {
                                borderRadius: 15,
                                backgroundColor: '#2CA6FF'
                            }, iconStyle: { display: 'none' }, selectedDate: selectedDate, onDateSelected: function (date) {
                                setLoading(true);
                                setTimeout(function () {
                                    setDay(date.format('ddd MMM D YYYY'));
                                    mainDrive(date.format('ddd MMM D YYYY'));
                                    setFullDate(date.format('dddd MMM D'));
                                    setSelectedDate(date);
                                    setLoading(false);
                                }, 250);
                            } }),
                        pillData.length === 0 && react_1["default"].createElement(Empty, null)));
                }, recalculateHiddenLayout: true, alwaysBounceVertical: true, showsVerticalScrollIndicator: false, bounces: true, disableLeftSwipe: fullDate !== exports.d.format('dddd MMM D'), disableRightSwipe: true, focusable: true, closeOnRowBeginSwipe: true, closeOnScroll: true, bouncesZoom: true, scrollEnabled: true, useAnimatedList: true, style: { paddingTop: 5, paddingBottom: 15 }, data: pillData, renderItem: renderItem, renderHiddenItem: renderHiddenItem, rightOpenValue: -70, previewRowKey: '0', previewOpenValue: -40, previewOpenDelay: 3000 })))));
};
exports["default"] = Home;
var styles = react_native_1.StyleSheet.create({
    img: {
        height: '65%',
        width: '100%',
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    slide: {
        backgroundColor: '#fff',
        display: 'flex',
        flex: 1,
        alignItems: 'center'
    },
    title: {
        marginTop: 50,
        color: '#000000',
        fontSize: 32,
        fontFamily: 'Satoshi-Bold'
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        position: 'absolute',
        bottom: 100,
        margin: 16,
        color: '#000000',
        fontSize: 28,
        fontFamily: 'Satoshi-Regular'
    },
    DateConL: { display: 'flex', flexDirection: 'row' },
    noPills: {
        color: 'gray',
        fontFamily: 'Satoshi-Regular',
        fontSize: 20,
        textAlign: 'center'
    },
    DateMonth: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 15,
        alignContent: 'center',
        alignItems: 'center'
    },
    DateCon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        alignItems: 'center'
    },
    Header: {
        color: 'black',
        fontSize: 23,
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'Satoshi-Bold'
    },
    SubHeader: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Satoshi-Bold',
        marginBottom: 0
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderBottomWidth: 1,
        justifyContent: 'center',
        marginBottom: 7
    },
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 150,
        height: 298,
        borderRadius: 15
    },
    backRightBtnLeft: {
        backgroundColor: '#2584ec',
        right: 15
    },
    contentContainerStyle: {},
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalItemsContainer: {
        width: 400,
        padding: 16,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 5
    },
    modalC: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15
    },
    modalA: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15
    }
});
