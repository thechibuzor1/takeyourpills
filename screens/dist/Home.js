"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_calendars_1 = require("react-native-calendars");
var react_native_elements_1 = require("react-native-elements");
var react_native_calendar_strip_1 = require("react-native-calendar-strip");
var moment_1 = require("moment");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var react_native_swipe_list_view_1 = require("react-native-swipe-list-view");
var react_native_dropdown_picker_1 = require("react-native-dropdown-picker");
var react_native_modal_datetime_picker_1 = require("react-native-modal-datetime-picker");
var demodata_1 = require("../demodata");
var Home = function () {
    var colors = [
        '#4D4DFF',
        '#E5E1E6',
        '#FFAD00',
        '#ED1D24',
        '#00958A',
        '#00C0A3',
        '#26D07C',
        '#fede29',
        '#055a87',
        '#7da19d',
        '#1d9aa9',
    ];
    /* Check date in duration function */
    var datefrom = '05/05/2013';
    var dateCurr = '05/28/2013';
    var dateTo = '05/22/2013';
    function check() {
        var dateFrom = '02/05/2013';
        /* var dateTo = '02/09/2013'; */
        var dateCheck = '02/07/2013';
        var d1 = datefrom.split('/');
        var d2 = dateTo.split('/');
        var c = dateCurr.split('/');
        var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
        var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
        var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);
        console.log(check >= from && check <= to);
    }
    /*   const medicineConColor = ['#F9DD71', '#ECECEC', '#132342']; */
    var date = new Date();
    var d = moment_1["default"](date);
    function dateDifference(startDate, endDate) {
        return moment_1["default"](startDate).diff(moment_1["default"](endDate), 'hours');
    }
    d.month(); // 1
    var _a = react_1.useState(demodata_1.monPills), pillData = _a[0], setPillData = _a[1];
    var _b = react_1.useState(d.format('dddd')), day = _b[0], setDay = _b[1];
    var _c = react_1.useState(d.format('dddd MMM D')), fullDate = _c[0], setFullDate = _c[1];
    var _d = react_1.useState('today'), header = _d[0], setHeader = _d[1];
    var _e = react_1.useState(moment_1["default"]()), selectedDate = _e[0], setSelectedDate = _e[1];
    react_1.useEffect(function () {
        switch (day) {
            case 'Monday':
                setPillData(demodata_1.monPills);
                break;
            case 'Tuesday':
                setPillData(demodata_1.tuePills);
                break;
            case 'Wednesday':
                setPillData(demodata_1.wedPills);
                break;
            case 'Thursday':
                setPillData(demodata_1.thuPills);
                break;
            case 'Friday':
                setPillData(demodata_1.friPills);
                break;
            case 'Saturday':
                setPillData(demodata_1.satPills);
                break;
            case 'Sunday':
                setPillData(demodata_1.sunPills);
                break;
            default:
                setPillData([]);
        }
    }, [day]);
    react_1.useEffect(function () {
        if (fullDate === d.format('dddd MMM D')) {
            setHeader('today');
        }
        else {
            setHeader(fullDate);
        }
    }, [fullDate]);
    var _f = react_1.useState(false), showCalendar = _f[0], setShowCalendar = _f[1];
    var pillColors = ['#FF66CC', '#EF6F3A', '#FFFFFF'];
    /*   const color = colors[Math.floor(Math.random() * colors.length)]; */
    var renderItem = function (data) { return (react_1["default"].createElement(react_native_1.View, { style: styles.rowFront },
        react_1["default"].createElement(MedicineContainer, { props: data.item }))); };
    var renderHiddenItem = function (data, rowMap) {
        function handleTaken() {
            var newPillData = __spreadArrays(pillData);
            var newData = {
                time: data.item.time,
                pills: data.item.pills,
                taken: true
            };
            newPillData[data.index] = newData;
            setPillData(newPillData);
        }
        return (react_1["default"].createElement(react_native_1.TouchableOpacity
        /*  onPress={handleAnimation} */
        , { 
            /*  onPress={handleAnimation} */
            onPress: handleTaken, activeOpacity: 0.8, style: {
                alignSelf: 'flex-end',
                justifyContent: 'center',
                alignItems: 'flex-end',
                width: 150,
                height: 300 * data.item.pills.length,
                borderRadius: 15,
                backgroundColor: '#2CA6FF',
                marginRight: 15,
                display: data.item.taken ? 'none' : 'flex'
            } },
            react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('check'), style: { marginRight: 25 }, size: 24, color: 'white' })));
    };
    var MedicineContainer = function (_a) {
        var props = _a.props;
        var endTime = moment_1["default"](props.time, 'HH:mm:ss a');
        var timeDiff = dateDifference(d, endTime);
        /*  const pillColor = pillColors[Math.floor(Math.random() * pillColors.length)];
         */
        var style = react_native_1.StyleSheet.create({
            box: {
                borderRadius: 15,
                backgroundColor: props.taken
                    ? '#69CA90'
                    : timeDiff <= 3
                        ? '#F9DD71'
                        : timeDiff > 3 && timeDiff <= 9
                            ? '#132342'
                            : '#ECECEC',
                display: 'flex',
                width: '95%',
                alignSelf: 'center',
                justifyContent: 'space-between',
                height: props.pills.length * 300
            },
            textColor: {
                color: timeDiff > 3 && timeDiff <= 9 ? 'white' : 'black'
            }
        });
        var _b = react_1.useState(null), active = _b[0], setActive = _b[1];
        function handleActive(pill) {
            if (active !== pill) {
                setActive(pill);
                return;
            }
            setActive(null);
        }
        return (react_1["default"].createElement(react_native_1.View, { style: __assign({}, style.box) },
            props.pills.map(function (pill) { return (react_1["default"].createElement(react_native_1.TouchableOpacity, { key: pill.id, style: { marginTop: 0 }, onPress: function () { return handleActive(pill.id); } }, active !== pill.id ? (react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { style: [
                        {
                            fontSize: 28,
                            fontFamily: 'Satoshi-Bold',
                            marginLeft: 15,
                            marginTop: 15
                        },
                        style.textColor,
                    ] }, pill.name),
                react_1["default"].createElement(react_native_1.Text, { style: [
                        {
                            marginLeft: 15,
                            fontSize: 14,
                            fontFamily: 'Satoshi-Bold'
                        },
                        style.textColor,
                    ] }, pill.desc),
                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: props.pills.length > 1 ? import_macro_1.solid('pills') : import_macro_1.solid('tablets'), size: 50, style: {
                        alignSelf: 'center',
                        marginTop: 60
                    }, color: timeDiff <= 3
                        ? '#FFFFFF'
                        : timeDiff > 3 && timeDiff <= 9
                            ? '#FF66CC'
                            : '#EF6F3A' }))) : (react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.View, { style: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 15
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: [
                            {
                                fontSize: 28,
                                fontFamily: 'Satoshi-Bold',
                                marginLeft: 15
                            },
                            style.textColor,
                        ] }, pill.name),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5 },
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('pen-to-square'), style: { marginRight: 15 }, size: 24, color: timeDiff > 3 && timeDiff <= 9 ? 'white' : 'black' }))),
                react_1["default"].createElement(react_native_1.Text, { style: [
                        {
                            marginLeft: 15,
                            fontSize: 14,
                            marginBottom: 15,
                            fontFamily: 'Satoshi-Bold'
                        },
                        style.textColor,
                    ] }, pill.desc),
                react_1["default"].createElement(react_native_1.Text, { style: [
                        {
                            marginLeft: 15,
                            fontSize: 18,
                            fontFamily: 'Satoshi-Bold',
                            marginBottom: 15
                        },
                        style.textColor,
                    ] },
                    "Instructions: ",
                    pill.instruction),
                react_1["default"].createElement(react_native_1.Text, { style: [
                        {
                            marginLeft: 15,
                            fontSize: 18,
                            fontFamily: 'Satoshi-Bold'
                        },
                        style.textColor,
                    ] },
                    "Dosage: ",
                    pill.dosage))))); }),
            react_1["default"].createElement(react_native_1.Text, { style: [
                    {
                        fontFamily: 'Satoshi-Bold',
                        bottom: 15,
                        marginLeft: 15
                    },
                    style.textColor,
                ] }, moment_1["default"]("" + props.time, ['h:m a', 'H:m']).format('H:mm'))));
    };
    var _g = react_1.useState(false), newPill = _g[0], setPillModal = _g[1];
    var pillModalContent = function () {
        var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
        var _b = react_1.useState(1), value = _b[0], setValue = _b[1];
        var _c = react_1.useState([
            { label: 'Once a day', value: 1 },
            { label: 'Twice a day', value: 2 },
            { label: 'Three Times a day', value: 3 },
        ]), items = _c[0], setItems = _c[1];
        var _d = react_1.useState('9:00'), morningTime = _d[0], setMorningTime = _d[1];
        var _e = react_1.useState(false), isMorning = _e[0], setMorningVisibility = _e[1];
        var _f = react_1.useState('14:00'), afternoonTime = _f[0], setAfternoonTime = _f[1];
        var _g = react_1.useState(false), isAfternoon = _g[0], setAfternoonVisibility = _g[1];
        var _h = react_1.useState('20:00'), eveningTime = _h[0], setEveningTime = _h[1];
        var _j = react_1.useState(false), isEvening = _j[0], setEveningVisibility = _j[1];
        var _k = react_1.useState(d.format('dddd MMM D')), startDate = _k[0], setStartDate = _k[1];
        var _l = react_1.useState(false), startDatePicker = _l[0], setStartDatePicker = _l[1];
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
                            } }, "Add Pills"),
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setPillModal(false); } },
                            react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('xmark'), style: { marginRight: 15 }, size: 30, color: 'black' }))),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 14,
                            fontFamily: 'Satoshi-Bold',
                            color: 'black'
                        } }, "Pill Name"),
                    react_1["default"].createElement(react_native_1.TextInput, { style: {
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
                    react_1["default"].createElement(react_native_1.TextInput, { multiline: true, style: {
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
                    react_1["default"].createElement(react_native_1.TextInput, { multiline: true, style: {
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
                            height: 45,
                            width: 140,
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
                            } }, "Add Pills"))))));
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.StatusBar, { barStyle: "light-content" }),
        react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png'), style: { display: 'flex', flex: 1 } },
            react_1["default"].createElement(react_native_1.View, { style: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 30,
                    alignItems: 'center'
                } },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setShowCalendar(!showCalendar); }, style: {
                        display: 'flex',
                        flexDirection: 'row',
                        marginLeft: 15,
                        alignContent: 'center',
                        alignItems: 'center'
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: 'black',
                            fontSize: 18,
                            marginRight: 5,
                            fontFamily: 'Satoshi-Bold'
                        } }, d.format('MMM YYYY')),
                    !showCalendar ? (react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('caret-down'), color: "gray" })) : (react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('caret-up'), color: "gray" }))),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setPillModal(true); } },
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('plus'), style: { marginRight: 15 }, size: 24, color: 'black' }))),
            react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: { marginTop: 10, width: '95%', alignSelf: 'center' } }),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { style: {
                        color: 'black',
                        fontSize: 23,
                        textAlign: 'center',
                        marginTop: 20,
                        fontFamily: 'Satoshi-Bold'
                    } }, "Hello, Chibuzor,"),
                react_1["default"].createElement(react_native_1.Text, { style: {
                        color: 'black',
                        fontSize: 25,
                        textAlign: 'center',
                        fontFamily: 'Satoshi-Bold',
                        marginBottom: 5
                    } },
                    "Your medicine schedule for ",
                    header)),
            react_1["default"].createElement(react_native_swipe_list_view_1.SwipeListView, { ListHeaderComponent: function () {
                    var _a;
                    return (react_1["default"].createElement(react_native_1.View, null,
                        showCalendar && (react_1["default"].createElement(react_native_1.View, { style: { marginTop: 30, backgroundColor: 'white' } },
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
                                    setDay(moment_1["default"](date.dateString.toLocaleString()).format('dddd'));
                                    setFullDate(moment_1["default"](date.dateString.toLocaleString()).format('dddd MMM D'));
                                    setSelectedDate(moment_1["default"](date.dateString.toLocaleString()));
                                }, collapsable: true, markingType: 'period', markedDates: (_a = {},
                                    _a[selectedDate.format('YYYY-MM-DD').toString()] = {
                                        color: '#2CA6FF',
                                        selected: true,
                                        startingDay: true,
                                        endingDay: false,
                                        marked: true,
                                        dotColor: '#132342'
                                    },
                                    _a['2023-01-20'] = {
                                        color: '#2CA6FF',
                                        selected: true,
                                        startingDay: false,
                                        endingDay: false
                                    },
                                    _a['2023-01-21'] = {
                                        color: '#2CA6FF',
                                        selected: true,
                                        startingDay: false,
                                        endingDay: false
                                    },
                                    _a['2023-01-22'] = {
                                        color: '#2CA6FF',
                                        selected: true,
                                        startingDay: false,
                                        endingDay: true
                                    },
                                    _a) }))),
                        react_1["default"].createElement(react_native_calendar_strip_1["default"], { scrollable: true, scrollerPaging: true, calendarHeaderStyle: { display: 'none' }, style: {
                                height: 100,
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
                                setDay(date.format('dddd'));
                                setFullDate(date.format('dddd MMM D'));
                                setSelectedDate(date);
                            } }),
                        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: newPill, transparent: true, onRequestClose: function () { return setPillModal(false); } }, pillModalContent())));
                }, recalculateHiddenLayout: true, alwaysBounceVertical: true, showsVerticalScrollIndicator: false, bounces: true, disableLeftSwipe: fullDate !== d.format('dddd MMM D'), disableRightSwipe: fullDate !== d.format('dddd MMM D'), focusable: true, closeOnRowBeginSwipe: true, closeOnScroll: true, bouncesZoom: true, scrollEnabled: true, useAnimatedList: true, style: { marginTop: 30 }, data: pillData, renderItem: renderItem, renderHiddenItem: renderHiddenItem, rightOpenValue: -70, previewRowKey: '0', previewOpenValue: -40, previewOpenDelay: 3000 }))));
};
exports["default"] = Home;
var styles = react_native_1.StyleSheet.create({
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
    contentContainerStyle: {}
});
