"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_dropdown_picker_1 = require("react-native-dropdown-picker");
var react_native_modal_datetime_picker_1 = require("react-native-modal-datetime-picker");
var moment_1 = require("moment");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var Home_1 = require("../screens/Home");
var react_native_elements_1 = require("react-native-elements");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var Notifications_1 = require("../Notifications");
var NewPill = function (_a) {
    var setPillModal = _a.setPillModal, setShowNotif = _a.setShowNotif, setMessage = _a.setMessage, mainDrive = _a.mainDrive, filterData = _a.filterData, setFilterData = _a.setFilterData;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var _c = react_1.useState(''), pillName = _c[0], setPillName = _c[1];
    var _d = react_1.useState(''), pillDesc = _d[0], setPillDesc = _d[1];
    var _e = react_1.useState(''), dosage = _e[0], setDosage = _e[1];
    var _f = react_1.useState(''), duration = _f[0], setDuration = _f[1];
    var _g = react_1.useState(''), instructions = _g[0], setInstructions = _g[1];
    var _h = react_1.useState(1), value = _h[0], setValue = _h[1];
    var _j = react_1.useState([
        { label: 'Once a day', value: 1 },
        { label: 'Twice a day', value: 2 },
        { label: 'Three Times a day', value: 3 },
    ]), items = _j[0], setItems = _j[1];
    var _k = react_1.useState('9:00'), morningTime = _k[0], setMorningTime = _k[1];
    var _l = react_1.useState(false), isMorning = _l[0], setMorningVisibility = _l[1];
    var _m = react_1.useState('14:00'), afternoonTime = _m[0], setAfternoonTime = _m[1];
    var _o = react_1.useState(false), isAfternoon = _o[0], setAfternoonVisibility = _o[1];
    var _p = react_1.useState('21:00'), eveningTime = _p[0], setEveningTime = _p[1];
    var _q = react_1.useState(false), isEvening = _q[0], setEveningVisibility = _q[1];
    var _r = react_1.useState(Home_1.d.format('ddd MMM D YYYY')), startDate = _r[0], setStartDate = _r[1];
    var _s = react_1.useState(false), startDatePicker = _s[0], setStartDatePicker = _s[1];
    function handleSave() {
        var clonedData = __spreadArrays(filterData);
        if (!pillName.trim() || !dosage.trim() || !duration.trim()) {
            react_native_1.Alert.alert('Umm... 😑 ', 'Please fill all fields with "*" at the end... 😐');
            return;
        }
        var exists = false;
        clonedData.forEach(function (element) {
            if (element.name.toLowerCase().trim() === pillName.toLowerCase().trim()) {
                exists = true;
                return;
            }
        });
        if (!exists) {
            var endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + Number(duration));
            var newPills_1 = {
                id: clonedData.length === 0
                    ? 1
                    : clonedData[clonedData.length - 1].id + 1,
                name: pillName,
                desc: pillDesc,
                dosage: dosage,
                duration: duration,
                timesPerDay: value,
                times: value === 1
                    ? [morningTime]
                    : value === 2
                        ? [morningTime, afternoonTime]
                        : [morningTime, afternoonTime, eveningTime],
                startDate: startDate,
                endDate: moment_1["default"](endDate).format('ddd MMM D YYYY'),
                instructions: instructions,
                daysTaken: []
            };
            clonedData.push(newPills_1);
            async_storage_1["default"].setItem('pillData', JSON.stringify(clonedData)).then(function () {
                setFilterData(clonedData);
                mainDrive(Home_1.d.format('ddd MMM D YYYY'));
                if (Home_1.check(newPills_1.startDate, newPills_1.endDate, Home_1.d.format('ddd MMM D YYYY'))) {
                    var currentTime = Number(Home_1.d.format('HH:mm').replace(':', ''));
                    newPills_1.times.forEach(function (element) {
                        var dateTime = Number(element.replace(':', ''));
                        if (currentTime < dateTime) {
                            var notifDate = moment_1["default"](element, ['h:m a', 'H:m']).toDate();
                            var text = "It's time to take your " + element + " pills";
                            Notifications_1["default"].scheduleNotification({
                                reminder: text,
                                date: notifDate
                            });
                        }
                    });
                }
                setPillName('');
                setPillDesc('');
                setDosage('');
                setInstructions('');
                setPillModal(false);
                setMessage('New Pills Added! 🥵');
                setShowNotif(true);
            });
            mainDrive(Home_1.d.format('ddd MMM D YYYY'));
        }
        else {
            react_native_1.Alert.alert('Pills Already Exist 😑 ', 'Now that could make things confusing... Try another name or updating the existing one😐');
        }
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.StatusBar, { barStyle: "light-content" }),
        react_1["default"].createElement(react_native_1.View, { style: {
                display: 'flex',
                flex: 1,
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(0,0,0,0.7)'
            } },
            react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png'), style: {
                    padding: 16,
                    flex: 0.9,
                    paddingBottom: 0
                } },
                react_1["default"].createElement(react_native_1.View, { style: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 20,
                        alignItems: 'center'
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: 'black',
                            fontSize: 23,
                            fontFamily: 'Satoshi-Bold'
                        } }, "Add Pills"),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setPillModal(false); } },
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('xmark'), style: { marginRight: 15 }, size: 30, color: 'black' }))),
                react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: {
                        width: '100%',
                        alignSelf: 'center',
                        marginTop: 15
                    } }),
                react_1["default"].createElement(react_native_1.ScrollView, { alwaysBounceVertical: true, showsVerticalScrollIndicator: false, bounces: true, bouncesZoom: true, style: { paddingTop: 15 } },
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 14,
                            fontFamily: 'Satoshi-Bold',
                            color: 'black'
                        } }, "Pill Name *"),
                    react_1["default"].createElement(react_native_1.TextInput, { value: pillName, autoFocus: true, placeholder: "example: Nora - BE", placeholderTextColor: 'gray', onChangeText: function (text) { return setPillName(text); }, style: {
                            marginTop: 15,
                            color: 'black',
                            height: 50,
                            fontSize: 20,
                            fontFamily: 'Satoshi-Bold',
                            backgroundColor: '#ffffff',
                            width: '85%',
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: 'gray',
                            paddingStart: 16
                        } }),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 14,
                            fontFamily: 'Satoshi-Bold',
                            color: 'black',
                            marginTop: 15
                        } }, "Pill Description"),
                    react_1["default"].createElement(react_native_1.TextInput, { multiline: true, value: pillDesc, placeholder: "example: Norenthindrone - 0.35mg", placeholderTextColor: 'gray', onChangeText: function (text) { return setPillDesc(text); }, style: {
                            marginTop: 15,
                            color: 'black',
                            height: 70,
                            fontSize: 14,
                            fontFamily: 'Satoshi-Regular',
                            backgroundColor: '#ffffff',
                            width: '85%',
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: 'gray',
                            textAlignVertical: 'top',
                            padding: 16
                        } }),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: 'black',
                            fontSize: 23,
                            marginTop: 20,
                            fontFamily: 'Satoshi-Bold'
                        } }, "Dosage *"),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 14,
                            fontFamily: 'Satoshi-Bold',
                            color: 'black'
                        } }, "How many pills do you need to take at once?"),
                    react_1["default"].createElement(react_native_1.View, { style: { display: 'flex', flexDirection: 'row' } },
                        react_1["default"].createElement(react_native_1.TextInput, { value: dosage, onChangeText: function (text) { return setDosage(text); }, keyboardType: "numeric", maxLength: 2, style: {
                                marginTop: 15,
                                color: 'black',
                                height: 50,
                                fontSize: 23,
                                fontFamily: 'Satoshi-Bold',
                                backgroundColor: '#ffffff',
                                width: '12%',
                                borderRadius: 15,
                                borderWidth: 1,
                                borderColor: 'gray',
                                paddingStart: 8
                            } }),
                        react_1["default"].createElement(react_native_1.Text, { style: {
                                color: 'black',
                                fontSize: 23,
                                marginLeft: 15,
                                marginTop: 20,
                                fontFamily: 'Satoshi-Bold'
                            } }, "Pills")),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 14,
                            fontFamily: 'Satoshi-Bold',
                            color: 'black',
                            marginTop: 15
                        } }, "How many times do you need to take the pills in a day?"),
                    react_1["default"].createElement(react_native_dropdown_picker_1["default"], { open: open, value: value, items: items, setOpen: setOpen, setValue: setValue, setItems: setItems, textStyle: {
                            fontSize: 14,
                            fontFamily: 'Satoshi-Bold',
                            color: 'black'
                        }, placeholder: "Select a configuration", style: {
                            backgroundColor: 'transparent',
                            marginTop: 15,
                            width: '85%',
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: 'gray'
                        }, placeholderStyle: {
                            color: 'gray',
                            fontFamily: 'Satoshi-Regular'
                        }, dropDownContainerStyle: {
                            backgroundColor: '#ffffff',
                            width: '85%',
                            borderRadius: 15
                        } }),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: 'black',
                            fontSize: 23,
                            marginTop: 20,
                            fontFamily: 'Satoshi-Bold'
                        } }, "Duration *"),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 14,
                            fontFamily: 'Satoshi-Bold',
                            color: 'black'
                        } }, "How long will you take the pills?"),
                    react_1["default"].createElement(react_native_1.View, { style: { display: 'flex', flexDirection: 'row' } },
                        react_1["default"].createElement(react_native_1.TextInput, { value: duration, onChangeText: function (text) { return setDuration(text); }, keyboardType: "numeric", maxLength: 2, style: {
                                marginTop: 15,
                                color: 'black',
                                height: 50,
                                fontSize: 23,
                                fontFamily: 'Satoshi-Bold',
                                backgroundColor: '#ffffff',
                                width: '12%',
                                borderRadius: 15,
                                borderWidth: 1,
                                borderColor: 'gray',
                                paddingStart: 8
                            } }),
                        react_1["default"].createElement(react_native_1.Text, { style: {
                                color: 'black',
                                fontSize: 23,
                                marginLeft: 15,
                                marginTop: 20,
                                fontFamily: 'Satoshi-Bold'
                            } }, "Days")),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: 'black',
                            fontSize: 23,
                            marginTop: 20,
                            fontFamily: 'Satoshi-Bold'
                        } }, "Time? *"),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 14,
                            fontFamily: 'Satoshi-Bold',
                            color: 'black'
                        } }, "What time are you taking the pills?"),
                    value === 1 && (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(react_native_1.View, { style: {
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 15,
                                alignItems: 'center'
                            } },
                            react_1["default"].createElement(react_native_1.Text, { style: {
                                    color: 'black',
                                    fontSize: 23,
                                    fontFamily: 'Satoshi-Bold'
                                } }, morningTime),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setMorningVisibility(true); } },
                                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('pen-to-square'), style: { marginLeft: 15 }, size: 24, color: 'black' }))),
                        react_1["default"].createElement(react_native_modal_datetime_picker_1["default"], { isVisible: isMorning, mode: "time", onConfirm: function (data) {
                                var date = moment_1["default"](data);
                                setMorningTime(date.format('H:mm'));
                                setMorningVisibility(false);
                            }, onCancel: function () { return setMorningVisibility(false); } }))),
                    value === 2 && (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(react_native_1.View, { style: {
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 15,
                                alignItems: 'center'
                            } },
                            react_1["default"].createElement(react_native_1.Text, { style: {
                                    color: 'black',
                                    fontSize: 23,
                                    fontFamily: 'Satoshi-Bold'
                                } }, morningTime),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setMorningVisibility(true); } },
                                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('pen-to-square'), style: { marginLeft: 15 }, size: 24, color: 'black' }))),
                        react_1["default"].createElement(react_native_modal_datetime_picker_1["default"], { isVisible: isMorning, mode: "time", onConfirm: function (data) {
                                var date = moment_1["default"](data);
                                setMorningTime(date.format('H:mm'));
                                setMorningVisibility(false);
                            }, onCancel: function () { return setMorningVisibility(false); } }),
                        react_1["default"].createElement(react_native_1.View, { style: {
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 15,
                                alignItems: 'center'
                            } },
                            react_1["default"].createElement(react_native_1.Text, { style: {
                                    color: 'black',
                                    fontSize: 23,
                                    fontFamily: 'Satoshi-Bold'
                                } }, eveningTime),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setEveningVisibility(true); } },
                                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('pen-to-square'), style: { marginLeft: 15 }, size: 24, color: 'black' }))),
                        react_1["default"].createElement(react_native_modal_datetime_picker_1["default"], { isVisible: isEvening, mode: "time", onConfirm: function (data) {
                                var date = moment_1["default"](data);
                                setEveningTime(date.format('H:mm'));
                                setEveningVisibility(false);
                            }, onCancel: function () { return setEveningVisibility(false); } }))),
                    value === 3 && (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(react_native_1.View, { style: {
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 15,
                                alignItems: 'center'
                            } },
                            react_1["default"].createElement(react_native_1.Text, { style: {
                                    color: 'black',
                                    fontSize: 23,
                                    fontFamily: 'Satoshi-Bold'
                                } }, morningTime),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setMorningVisibility(true); } },
                                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('pen-to-square'), style: { marginLeft: 15 }, size: 24, color: 'black' }))),
                        react_1["default"].createElement(react_native_modal_datetime_picker_1["default"], { isVisible: isMorning, mode: "time", onConfirm: function (data) {
                                var date = moment_1["default"](data);
                                setMorningTime(date.format('H:mm'));
                                setMorningVisibility(false);
                            }, onCancel: function () { return setMorningVisibility(false); } }),
                        react_1["default"].createElement(react_native_1.View, { style: {
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 15,
                                alignItems: 'center'
                            } },
                            react_1["default"].createElement(react_native_1.Text, { style: {
                                    color: 'black',
                                    fontSize: 23,
                                    fontFamily: 'Satoshi-Bold'
                                } }, afternoonTime),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setAfternoonVisibility(true); } },
                                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('pen-to-square'), style: { marginLeft: 15 }, size: 24, color: 'black' }))),
                        react_1["default"].createElement(react_native_modal_datetime_picker_1["default"], { isVisible: isAfternoon, mode: "time", onConfirm: function (data) {
                                var date = moment_1["default"](data);
                                setAfternoonTime(date.format('H:mm'));
                                setAfternoonVisibility(false);
                            }, onCancel: function () { return setAfternoonVisibility(false); } }),
                        react_1["default"].createElement(react_native_1.View, { style: {
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 15,
                                alignItems: 'center'
                            } },
                            react_1["default"].createElement(react_native_1.Text, { style: {
                                    color: 'black',
                                    fontSize: 23,
                                    fontFamily: 'Satoshi-Bold'
                                } }, eveningTime),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setEveningVisibility(true); } },
                                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('pen-to-square'), style: { marginLeft: 15 }, size: 24, color: 'black' }))),
                        react_1["default"].createElement(react_native_modal_datetime_picker_1["default"], { isVisible: isEvening, mode: "time", onConfirm: function (data) {
                                var date = moment_1["default"](data);
                                setEveningTime(date.format('H:mm'));
                                setEveningVisibility(false);
                            }, onCancel: function () { return setEveningVisibility(false); } }))),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: 'black',
                            fontSize: 23,
                            marginTop: 20,
                            fontFamily: 'Satoshi-Bold'
                        } }, "Start Date? *"),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 14,
                            fontFamily: 'Satoshi-Bold',
                            color: 'black'
                        } }, "When will you start taking the pills?"),
                    react_1["default"].createElement(react_native_1.View, { style: {
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 15,
                            alignItems: 'center'
                        } },
                        react_1["default"].createElement(react_native_1.Text, { style: {
                                color: 'black',
                                fontSize: 23,
                                fontFamily: 'Satoshi-Bold'
                            } }, startDate),
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setStartDatePicker(true); } },
                            react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('pen-to-square'), style: { marginLeft: 15 }, size: 24, color: 'black' }))),
                    react_1["default"].createElement(react_native_modal_datetime_picker_1["default"], { isVisible: startDatePicker, mode: "date", minimumDate: new Date(), onConfirm: function (data) {
                            var date = moment_1["default"](data);
                            setStartDate(date.format('ddd MMM D YYYY'));
                        }, onCancel: function () { return setStartDatePicker(false); } }),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: 'black',
                            fontSize: 23,
                            marginTop: 20,
                            fontFamily: 'Satoshi-Bold'
                        } }, "Instructions?"),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 14,
                            fontFamily: 'Satoshi-Bold',
                            color: 'black'
                        } }, "You can add intructions here"),
                    react_1["default"].createElement(react_native_1.TextInput, { multiline: true, value: instructions, onChangeText: function (text) { return setInstructions(text); }, placeholder: "Take after a meal", placeholderTextColor: 'gray', style: {
                            marginTop: 15,
                            color: 'black',
                            height: 90,
                            fontSize: 14,
                            fontFamily: 'Satoshi-Regular',
                            backgroundColor: '#ffffff',
                            width: '85%',
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: 'gray',
                            textAlignVertical: 'top',
                            padding: 16
                        } }),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleSave, activeOpacity: 0.5, style: {
                            display: 'flex',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            height: 50,
                            width: 140,
                            backgroundColor: '#2CA6FF',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 30,
                            marginBottom: 30,
                            borderRadius: 15
                        } },
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('check'), style: { marginRight: 5 }, size: 20, color: 'white' }),
                        react_1["default"].createElement(react_native_1.Text, { style: {
                                color: '#ffffff',
                                fontSize: 20,
                                textAlign: 'center',
                                alignSelf: 'center',
                                fontFamily: 'Satoshi-Bold'
                            } }, "Add Pills")))))));
};
exports["default"] = NewPill;
var styles = react_native_1.StyleSheet.create({});
