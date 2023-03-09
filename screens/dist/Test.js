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
var react_native_1 = require("react-native");
var react_native_2 = require("@notifee/react-native");
var react_1 = require("react");
var react_native_modal_datetime_picker_1 = require("react-native-modal-datetime-picker");
var Notifications_1 = require("../Notifications");
var Test = function () {
    var _a = react_1.useState(new Date()), date = _a[0], setDate = _a[1];
    var _b = react_1.useState(''), reminder = _b[0], setReminder = _b[1];
    var _c = react_1.useState(false), open = _c[0], setOpen = _c[1];
    var saveReminder = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            Notifications_1["default"].scheduleNotification({ reminder: reminder, date: date });
            return [2 /*return*/];
        });
    }); };
    function onDisplayNotification() {
        return __awaiter(this, void 0, void 0, function () {
            var channelId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Request permissions (required for iOS)
                    return [4 /*yield*/, react_native_2["default"].requestPermission()];
                    case 1:
                        // Request permissions (required for iOS)
                        _a.sent();
                        return [4 /*yield*/, react_native_2["default"].createChannel({
                                id: 'default',
                                name: 'Default Channel'
                            })];
                    case 2:
                        channelId = _a.sent();
                        // Display a notification
                        return [4 /*yield*/, react_native_2["default"].displayNotification({
                                title: 'Notification Title',
                                body: 'Main body content of the notification',
                                android: {
                                    channelId: channelId,
                                    pressAction: {
                                        id: 'default'
                                    }
                                }
                            })];
                    case 3:
                        // Display a notification
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement(react_native_1.SafeAreaView, { style: styles.container },
        react_1["default"].createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Enter a reminder", onChangeText: function (text) { return setReminder(text); }, placeholderTextColor: "black" }),
        react_1["default"].createElement(react_native_1.Pressable, { onPress: function () { return setOpen(true); }, style: [styles.input, { marginTop: 0 }] },
            react_1["default"].createElement(react_native_1.Text, null, date ? date.toString() : 'Enter time')),
        react_1["default"].createElement(react_native_1.Button, { title: "Save", onPress: saveReminder }),
        react_1["default"].createElement(react_native_1.Pressable, { style: { padding: 20 } }),
        react_1["default"].createElement(react_native_modal_datetime_picker_1["default"], { isVisible: open, mode: "datetime", onConfirm: function (d) {
                setDate(d);
                console.log(d);
                setOpen(false);
            }, onCancel: function () { return setOpen(false); } })));
};
exports["default"] = Test;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    header: {
        fontSize: 20,
        paddingBottom: 10
    },
    input: {
        height: 40,
        margin: 25,
        borderWidth: 1,
        padding: 10,
        borderColor: 'gray'
    }
});
