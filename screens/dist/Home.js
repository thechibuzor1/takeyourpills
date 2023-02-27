"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.d = exports.dateDifference = void 0;
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
var NewPill_1 = require("../Components/NewPill");
var Settings_1 = require("../Components/Settings");
var MedicineContainer_1 = require("../Components/MedicineContainer");
var lottie_react_native_1 = require("lottie-react-native");
var Notifications_1 = require("../Components/Notifications");
var NotificationBar_1 = require("../Components/NotificationBar");
var MyPills_1 = require("../Components/MyPills");
function dateDifference(startDate, endDate) {
    return moment_1["default"](startDate).diff(moment_1["default"](endDate), 'hours');
}
exports.dateDifference = dateDifference;
var date = new Date();
exports.d = moment_1["default"](date);
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
    /*   var datefrom = '05/05/2013';
    var dateCurr = '05/28/2013';
    var dateTo = '05/22/2013'; */
    /*   function check() {
      var dateFrom = '02/05/2013';
      var dateTo = '02/09/2013';
      var dateCheck = '02/07/2013';
  
      var d1 = datefrom.split('/');
      var d2 = dateTo.split('/');
      var c = dateCurr.split('/');
  
      var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
      var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
      var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);
  
      console.log(check >= from && check <= to);
    } */
    /*   const medicineConColor = ['#F9DD71', '#ECECEC', '#132342']; */
    exports.d.month(); // 1
    var _a = react_1.useState(demodata_1.monPills), pillData = _a[0], setPillData = _a[1];
    var _b = react_1.useState(exports.d.format('dddd')), day = _b[0], setDay = _b[1];
    var _c = react_1.useState(exports.d.format('dddd MMM D')), fullDate = _c[0], setFullDate = _c[1];
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
        if (fullDate === exports.d.format('dddd MMM D')) {
            setHeader('today');
        }
        else {
            setHeader(fullDate);
        }
    }, [fullDate]);
    var _f = react_1.useState(false), showCalendar = _f[0], setShowCalendar = _f[1];
    var pillColors = ['#FF66CC', '#EF6F3A', '#FFFFFF'];
    /*   const color = colors[Math.floor(Math.random() * colors.length)]; */
    var _g = react_1.useState(false), confetti = _g[0], setConfetti = _g[1];
    var renderItem = function (data) { return (react_1["default"].createElement(react_native_1.View, { style: styles.rowFront },
        react_1["default"].createElement(MedicineContainer_1["default"], { props: data.item, pillDataX: pillData, setPillDataX: setPillData, index: data.index, confetti: confetti, setConfetti: setConfetti, setShowNotif: setShowNotif, setMessage: setMessage }))); };
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
            setConfetti(true);
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
    var _h = react_1.useState(false), newPill = _h[0], setPillModal = _h[1];
    var _j = react_1.useState(false), settings = _j[0], setSettings = _j[1];
    var _k = react_1.useState(false), myPills = _k[0], setMyPills = _k[1];
    var _l = react_1.useState(false), loading = _l[0], setLoading = _l[1];
    var _m = react_1.useState(true), splash = _m[0], setSplash = _m[1];
    var _o = react_1.useState(false), notifications = _o[0], setNotifications = _o[1];
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
    /*  interface pillModalData {
      edit: boolean;
      data: {};
    }
  */
    /*  const addPillModalData = {
      edit: false,
      data: {},
    }; */
    /*  make shift splash screen  */
    react_1.useEffect(function () {
        setTimeout(function () {
            setSplash(false);
        }, 500);
    }, []);
    var _p = react_1.useState(false), showNotif = _p[0], setShowNotif = _p[1];
    var _q = react_1.useState(''), message = _q[0], setMessage = _q[1];
    react_1.useEffect(function () {
        setTimeout(function () {
            setShowNotif(false);
        }, 3000);
    }, [showNotif]);
    return splash ? (react_1["default"].createElement(Splash, null)) : (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.StatusBar, { barStyle: "light-content" }),
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: newPill, transparent: true, onRequestClose: function () { return setPillModal(false); } }, react_1["default"].createElement(NewPill_1["default"], { setPillModal: setPillModal, pillData: pillData, setPillData: setPillData, setShowNotif: setShowNotif, setMessage: setMessage })),
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: settings, transparent: true, onRequestClose: function () { return setSettings(false); } }, react_1["default"].createElement(Settings_1["default"], { setSettings: setSettings, setLoading: setLoading, setMyPills: setMyPills })),
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: notifications, transparent: true, onRequestClose: function () { return setNotifications(false); } }, react_1["default"].createElement(Notifications_1["default"], { setNotifications: setNotifications })),
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: myPills, transparent: true, onRequestClose: function () { return setMyPills(false); } }, react_1["default"].createElement(MyPills_1["default"], { setMyPills: setMyPills })),
        loading ? (react_1["default"].createElement(Loading, null)) : (react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png'), style: { display: 'flex', flex: 1 } },
            react_1["default"].createElement(react_native_1.View, { style: styles.DateCon },
                react_1["default"].createElement(react_native_1.View, { style: styles.DateConL },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
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
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('bell'), style: { marginLeft: 5 }, size: 22, color: 'black' }))),
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
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { width: 40 }, activeOpacity: 0.5, onPress: function () { return setPillModal(true); } },
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('plus'), style: { marginRight: 15 }, size: 24, color: 'black' })))),
            react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: { marginTop: 10, width: '95%', alignSelf: 'center' } }),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { style: styles.Header }, "Hello, Chibuzor,"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.SubHeader },
                    "Your medicine schedule for ",
                    header),
                react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: {
                        width: '100%',
                        alignSelf: 'center',
                        marginTop: 15
                    } })),
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
                                        setDay(moment_1["default"](date.dateString.toLocaleString()).format('dddd'));
                                        setFullDate(moment_1["default"](date.dateString.toLocaleString()).format('dddd MMM D'));
                                        setSelectedDate(moment_1["default"](date.dateString.toLocaleString()));
                                        setLoading(false);
                                    }, 250);
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
                                    setDay(date.format('dddd'));
                                    setFullDate(date.format('dddd MMM D'));
                                    setSelectedDate(date);
                                    setLoading(false);
                                }, 250);
                            } }),
                        pillData.length === 0 && react_1["default"].createElement(Empty, null)));
                }, recalculateHiddenLayout: true, alwaysBounceVertical: true, showsVerticalScrollIndicator: false, bounces: true, disableLeftSwipe: fullDate !== exports.d.format('dddd MMM D'), disableRightSwipe: fullDate !== exports.d.format('dddd MMM D'), focusable: true, closeOnRowBeginSwipe: true, closeOnScroll: true, bouncesZoom: true, scrollEnabled: true, useAnimatedList: true, style: { paddingTop: 5, paddingBottom: 15 }, data: pillData, renderItem: renderItem, renderHiddenItem: renderHiddenItem, rightOpenValue: -70, previewRowKey: '0', previewOpenValue: -40, previewOpenDelay: 3000 })))));
};
exports["default"] = Home;
var styles = react_native_1.StyleSheet.create({
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
