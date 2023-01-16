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
var demodata_1 = require("../demodata");
var Home = function () {
    var _a;
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
    var date = new Date();
    var d = moment_1["default"](date);
    d.month(); // 1
    var _b = react_1.useState(demodata_1.monPills), pillData = _b[0], setPillData = _b[1];
    var _c = react_1.useState(d.format('dddd')), day = _c[0], setDay = _c[1];
    var _d = react_1.useState(d.format('dddd MMM D')), fullDate = _d[0], setFullDate = _d[1];
    var _e = react_1.useState('today'), header = _e[0], setHeader = _e[1];
    var _f = react_1.useState(moment_1["default"]()), selectedDate = _f[0], setSelectedDate = _f[1];
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
    var _g = react_1.useState(false), showCalendar = _g[0], setShowCalendar = _g[1];
    /*  const [selectedDate, setSelectedDate] = useState(date.toISOString()); */
    var vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
    var massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
    var workout = { key: 'workout', color: 'green' };
    var pillColors = [
        '#FFDE00',
        '#fbd75c',
        '#234df0',
        '#FFBCD9',
    ];
    var color = colors[Math.floor(Math.random() * colors.length)];
    /* const animation = new Animated.Value(0); */
    var renderItem = function (data) { return (react_1["default"].createElement(react_native_1.View, { style: styles.rowFront },
        react_1["default"].createElement(MedicineContainer, { props: data.item }))); };
    var renderHiddenItem = function (data, rowMap) {
        /*  const handleAnimation = () => {
          Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }).start(() => {
            Animated.timing(animation, {
              toValue: 0,
              duration: 1000,
              useNativeDriver: false,
            }).start();
          });
        }; */
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
        return (react_1["default"].createElement(react_1["default"].Fragment, null, data.item.pills.map(function (pill) { return (react_1["default"].createElement(react_native_1.TouchableOpacity
        /*  onPress={handleAnimation} */
        , { 
            /*  onPress={handleAnimation} */
            onPress: handleTaken, activeOpacity: 0.8, key: pill.id, style: {
                alignSelf: 'flex-end',
                justifyContent: 'center',
                alignItems: 'flex-end',
                width: 150,
                height: 270,
                borderRadius: 15,
                backgroundColor: '#2584ec',
                marginRight: 15,
                marginTop: 3
            } },
            react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('check'), style: { marginRight: 25 }, size: 24, color: 'white' }))); })));
    };
    var MedicineContainer = function (_a) {
        var props = _a.props;
        var Medcolor = colors[Math.floor(Math.random() * colors.length)];
        var pillColor = pillColors[Math.floor(Math.random() * pillColors.length)];
        var style = react_native_1.StyleSheet.create({
            box: {
                borderRadius: 15,
                backgroundColor: props.taken ? '#26D07C' : '#E5E1E6',
                display: 'flex',
                width: '95%',
                alignSelf: 'center',
                justifyContent: 'space-between'
            }
        });
        /*   const boxInterpolation = animation.interpolate({
          inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          outputRange: colors,
        });
        const animatedStyle = {
          backgroundColor: boxInterpolation,
        }; */
        return (react_1["default"].createElement(react_native_1.Animated.View, { style: __assign({}, style.box /* ...animatedStyle */) },
            props.pills.map(function (pill) { return (react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.8, key: pill.id, style: { height: 270, marginTop: 0 } },
                react_1["default"].createElement(react_native_1.Text, { style: {
                        color: 'black',
                        fontSize: 28,
                        fontFamily: 'Satoshi-Bold',
                        marginLeft: 15,
                        marginTop: 15
                    } }, pill.name),
                react_1["default"].createElement(react_native_1.Text, { style: {
                        color: 'black',
                        marginLeft: 15,
                        fontSize: 14,
                        fontFamily: 'Satoshi-Bold'
                    } }, pill.desc),
                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: props.pills.length > 1 ? import_macro_1.solid('pills') : import_macro_1.solid('tablets'), size: 50, style: {
                        alignSelf: 'center',
                        marginTop: 60
                    }, color: pillColor }))); }),
            react_1["default"].createElement(react_native_1.Text, { style: {
                    color: 'black',
                    fontFamily: 'Satoshi-Bold',
                    bottom: 15,
                    marginLeft: 15
                } }, props.time)));
    };
    var TickButton = function (_a) {
        var props = _a.props;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.backRightBtn, styles.backRightBtnLeft] },
                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('check'), style: { marginRight: 25 }, size: 24, color: 'black' }))));
    };
    return (react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png'), style: { display: 'flex', flex: 1 } },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setShowCalendar(!showCalendar); }, style: {
                display: 'flex',
                flexDirection: 'row',
                marginTop: 30,
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
        react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: { marginTop: 10, width: '95%', alignSelf: 'center' } }),
        react_1["default"].createElement(react_native_1.ScrollView, { showsVerticalScrollIndicator: false, alwaysBounceVertical: true, scrollEventThrottle: 16, scrollEnabled: true, bounces: true, bouncesZoom: true, stickyHeaderIndices: showCalendar ? [1] : [0] },
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
                            color: color,
                            selected: true,
                            startingDay: true,
                            endingDay: true
                        },
                        _a) }))),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png') },
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
                        header))),
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
                    backgroundColor: color
                }, iconStyle: { display: 'none' }, selectedDate: selectedDate, onDateSelected: function (date) {
                    setDay(date.format('dddd'));
                    setFullDate(date.format('dddd MMM D'));
                    setSelectedDate(date);
                } }),
            react_1["default"].createElement(react_native_swipe_list_view_1.SwipeListView, { alwaysBounceVertical: true, scrollEventThrottle: 16, scrollEnabled: true, bounces: true, bouncesZoom: true, pagingEnabled: true, style: { marginTop: 30 }, data: pillData, renderItem: renderItem, renderHiddenItem: renderHiddenItem, rightOpenValue: -70, previewRowKey: '0', previewOpenValue: -40, previewOpenDelay: 3000 }))));
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
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        width: '100%',
        alignSelf: 'center',
        height: 90
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
    }
});
