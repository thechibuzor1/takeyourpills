"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_dropdown_picker_1 = require("react-native-dropdown-picker");
var react_native_modal_datetime_picker_1 = require("react-native-modal-datetime-picker");
var moment_1 = require("moment");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var Home_1 = require("../screens/Home");
var EditPills = function (_a) {
    var setEditPill = _a.setEditPill, pillData = _a.pillData;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var _c = react_1.useState(pillData.name), pillName = _c[0], setPillName = _c[1];
    var _d = react_1.useState(pillData.dosage.toString()), dosage = _d[0], setDosage = _d[1];
    var _e = react_1.useState(pillData.desc), pillDesc = _e[0], setPillDesc = _e[1];
    var _f = react_1.useState(pillData.instruction), instructions = _f[0], setInstructions = _f[1];
    var _g = react_1.useState(1), value = _g[0], setValue = _g[1];
    var _h = react_1.useState([
        { label: 'Once a day', value: 1 },
        { label: 'Twice a day', value: 2 },
        { label: 'Three Times a day', value: 3 },
    ]), items = _h[0], setItems = _h[1];
    var _j = react_1.useState('9:00'), morningTime = _j[0], setMorningTime = _j[1];
    var _k = react_1.useState(false), isMorning = _k[0], setMorningVisibility = _k[1];
    var _l = react_1.useState('14:00'), afternoonTime = _l[0], setAfternoonTime = _l[1];
    var _m = react_1.useState(false), isAfternoon = _m[0], setAfternoonVisibility = _m[1];
    var _o = react_1.useState('20:00'), eveningTime = _o[0], setEveningTime = _o[1];
    var _p = react_1.useState(false), isEvening = _p[0], setEveningVisibility = _p[1];
    var _q = react_1.useState(Home_1.d.format('dddd MMM D')), startDate = _q[0], setStartDate = _q[1];
    var _r = react_1.useState(false), startDatePicker = _r[0], setStartDatePicker = _r[1];
    return (react_1["default"].createElement(react_native_1.View, { style: {
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)'
        } },
        react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png'), style: {
                padding: 16
            } },
            react_1["default"].createElement(react_native_1.ScrollView, { alwaysBounceVertical: true, showsVerticalScrollIndicator: false, bounces: true, bouncesZoom: true },
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
                react_1["default"].createElement(react_native_1.Text, { style: {
                        fontSize: 14,
                        fontFamily: 'Satoshi-Bold',
                        color: 'black'
                    } }, "Pill Name"),
                react_1["default"].createElement(react_native_1.TextInput, { value: pillName, style: {
                        marginTop: 15,
                        color: 'black',
                        height: 50,
                        fontSize: 20,
                        fontFamily: 'Satoshi-Bold',
                        backgroundColor: '#ffffff',
                        width: '85%',
                        borderRadius: 15,
                        borderWidth: 0.5,
                        borderColor: 'gray',
                        paddingStart: 16
                    } }),
                react_1["default"].createElement(react_native_1.Text, { style: {
                        fontSize: 14,
                        fontFamily: 'Satoshi-Bold',
                        color: 'black',
                        marginTop: 15
                    } }, "Pill Description"),
                react_1["default"].createElement(react_native_1.TextInput, { multiline: true, value: pillDesc, style: {
                        marginTop: 15,
                        color: 'black',
                        height: 70,
                        fontSize: 14,
                        fontFamily: 'Satoshi-Regular',
                        backgroundColor: '#ffffff',
                        width: '85%',
                        borderRadius: 15,
                        borderWidth: 0.5,
                        borderColor: 'gray',
                        textAlignVertical: 'top',
                        padding: 8
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
                    react_1["default"].createElement(react_native_1.TextInput, { value: dosage, keyboardType: "numeric", maxLength: 2, style: {
                            marginTop: 15,
                            color: 'black',
                            height: 50,
                            fontSize: 23,
                            fontFamily: 'Satoshi-Bold',
                            backgroundColor: '#ffffff',
                            width: '12%',
                            borderRadius: 15,
                            borderWidth: 0.5,
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
                        borderWidth: 0.5,
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
                    react_1["default"].createElement(react_native_1.TextInput, { keyboardType: "numeric", maxLength: 2, style: {
                            marginTop: 15,
                            color: 'black',
                            height: 50,
                            fontSize: 23,
                            fontFamily: 'Satoshi-Bold',
                            backgroundColor: '#ffffff',
                            width: '12%',
                            borderRadius: 15,
                            borderWidth: 0.5,
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
                        setStartDate(date.format('dddd MMM D'));
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
                react_1["default"].createElement(react_native_1.TextInput, { value: instructions, multiline: true, style: {
                        marginTop: 15,
                        color: 'black',
                        height: 90,
                        fontSize: 14,
                        fontFamily: 'Satoshi-Regular',
                        backgroundColor: '#ffffff',
                        width: '85%',
                        borderRadius: 15,
                        borderWidth: 0.5,
                        borderColor: 'gray',
                        textAlignVertical: 'top',
                        padding: 8
                    } }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, style: {
                        display: 'flex',
                        alignSelf: 'center',
                        flexDirection: 'row',
                        height: 50,
                        width: 240,
                        backgroundColor: '#2CA6FF',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
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
