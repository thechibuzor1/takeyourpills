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
var EditPills = function (_a) {
    var setEditPill = _a.setEditPill, filterData = _a.filterData, data = _a.data, index = _a.index, setFilterData = _a.setFilterData, mainDrive = _a.mainDrive, setMessage = _a.setMessage, setShowNotif = _a.setShowNotif, setPillActive = _a.setPillActive, setCurrentPill = _a.setCurrentPill, setIndex = _a.setIndex;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var _c = react_1.useState(data === null || data === void 0 ? void 0 : data.name), pillName = _c[0], setPillName = _c[1];
    var _d = react_1.useState(data === null || data === void 0 ? void 0 : data.dosage), dosage = _d[0], setDosage = _d[1];
    var _e = react_1.useState(data === null || data === void 0 ? void 0 : data.duration), duration = _e[0], setDuration = _e[1];
    var _f = react_1.useState(data === null || data === void 0 ? void 0 : data.desc), pillDesc = _f[0], setPillDesc = _f[1];
    var _g = react_1.useState(data === null || data === void 0 ? void 0 : data.instructions), instructions = _g[0], setInstructions = _g[1];
    var _h = react_1.useState(data === null || data === void 0 ? void 0 : data.timesPerDay), value = _h[0], setValue = _h[1];
    var _j = react_1.useState([
        { label: 'Once a day', value: 1 },
        { label: 'Twice a day', value: 2 },
        { label: 'Three Times a day', value: 3 },
    ]), items = _j[0], setItems = _j[1];
    var _k = react_1.useState(data === null || data === void 0 ? void 0 : data.times[0]), morningTime = _k[0], setMorningTime = _k[1];
    var _l = react_1.useState(false), isMorning = _l[0], setMorningVisibility = _l[1];
    var _m = react_1.useState('14:00'), afternoonTime = _m[0], setAfternoonTime = _m[1];
    var _o = react_1.useState(false), isAfternoon = _o[0], setAfternoonVisibility = _o[1];
    var _p = react_1.useState('19:00'), eveningTime = _p[0], setEveningTime = _p[1];
    var _q = react_1.useState(false), isEvening = _q[0], setEveningVisibility = _q[1];
    var _r = react_1.useState(data === null || data === void 0 ? void 0 : data.startDate), startDate = _r[0], setStartDate = _r[1];
    var _s = react_1.useState(false), startDatePicker = _s[0], setStartDatePicker = _s[1];
    function handleSave() {
        if (!pillName.trim() || !dosage.trim() || !duration.trim()) {
            react_native_1.Alert.alert('Umm... 😑 ', 'Please fill all fields with "*" at the end... 😐');
            return;
        }
        var clonedData = __spreadArrays(filterData);
        var endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + Number(duration));
        var edittedPill = {
            id: data.id,
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
            daysTaken: data === null || data === void 0 ? void 0 : data.daysTaken
        };
        clonedData[index] = edittedPill;
        async_storage_1["default"].setItem('pillData', JSON.stringify(clonedData)).then(function () {
            setFilterData(clonedData);
            mainDrive(Home_1.d.format('ddd MMM D YYYY'));
            setPillName('');
            setPillDesc('');
            setDosage('');
            setInstructions('');
            setEditPill(false);
            setPillActive(false);
            setCurrentPill(null);
            setIndex(null);
            setMessage('Pills Edit Sucessful! 🥶');
            setShowNotif(true);
        });
    }
    return (react_1["default"].createElement(react_native_1.View, { style: {
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
                    } }, "Edit Pills"),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setEditPill(false); } },
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
                    } }, "Pill Name"),
                react_1["default"].createElement(react_native_1.TextInput, { value: pillName, autoFocus: true, onChangeText: function (text) { return setPillName(text); }, style: {
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
                react_1["default"].createElement(react_native_1.TextInput, { multiline: true, value: pillDesc, onChangeText: function (text) { return setPillDesc(text); }, style: {
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
                    } }, "Dosage"),
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
                    } }, "Duration"),
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
                    } }, "Time?"),
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
                    } }, "Start Date?"),
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
                react_1["default"].createElement(react_native_1.TextInput, { value: instructions, onChangeText: function (text) { return setInstructions(text); }, placeholder: "Take after a meal", placeholderTextColor: 'gray', multiline: true, style: {
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
                        width: 240,
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
                        } }, "Save Changes"))))));
};
exports["default"] = EditPills;
var styles = react_native_1.StyleSheet.create({});
