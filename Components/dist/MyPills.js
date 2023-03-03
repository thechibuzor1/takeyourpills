"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var react_native_elements_1 = require("react-native-elements");
var Apill_1 = require("./Apill");
var moment_1 = require("moment");
var MyPills = function (_a) {
    var setMyPills = _a.setMyPills, filterData = _a.filterData;
    var _b = react_1.useState(''), active = _b[0], setActive = _b[1];
    var _c = react_1.useState(filterData), data = _c[0], setData = _c[1];
    /*   morning: 00:00 to 12:00
    after: 12:01 to 18:00
    evening: 18:01 to 23:59 */
    var morningPills = [];
    var afternoonPills = [];
    var eveningPills = [];
    var completedcircles = [];
    //get their times in a day
    var today = moment_1["default"](new Date());
    filterData.forEach(function (element) {
        var end = moment_1["default"](new Date(element.endDate));
        var daysLeft = end.diff(today, 'days');
        if (daysLeft <= 0) {
            completedcircles.push(element);
        }
        else {
            element.times.forEach(function (ele) {
                if (Number(ele.replace(':', '') >= 0 && Number(ele.replace(':', '') <= 1200))) {
                    morningPills.push(element);
                }
                else if (Number(ele.replace(':', '') >= 1201 &&
                    Number(ele.replace(':', '') <= 1800))) {
                    afternoonPills.push(element);
                }
                else {
                    eveningPills.push(element);
                }
            });
        }
    });
    react_1.useEffect(function () {
        switch (active) {
            case 'Morning':
                setData(morningPills);
                break;
            case 'Afternoon':
                setData(afternoonPills);
                break;
            case 'Evening':
                setData(eveningPills);
                break;
            case 'Completed Circles':
                setData(completedcircles);
                break;
            case '':
                setData(filterData);
                break;
            default:
                setData(filterData);
        }
    }, [active]);
    var _d = react_1.useState(), currentPill = _d[0], setCurrentPill = _d[1];
    var _e = react_1.useState(false), pillActive = _e[0], setPillActive = _e[1];
    function handleActive(name) {
        if (name === active) {
            setActive('');
            return;
        }
        setActive(name);
    }
    var PillBlocks = function (_a) {
        var props = _a.props;
        var end = moment_1["default"](new Date(props.endDate));
        var daysLeft = end.diff(today, 'days');
        if (daysLeft <= 0) {
            daysLeft = 0;
        }
        return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                setCurrentPill(props);
                setPillActive(true);
            }, activeOpacity: 0.8, style: {
                padding: 16,
                backgroundColor: daysLeft <= 0
                    ? '#ECECEC'
                    : daysLeft <= 5
                        ? '#ED1D24'
                        : daysLeft <= 15
                            ? '#FFAD00'
                            : '#132342',
                borderRadius: 15,
                margin: 5,
                justifyContent: 'center',
                marginBottom: 20
            } },
            react_1["default"].createElement(react_native_1.View, { style: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                } },
                react_1["default"].createElement(react_native_1.View, { style: {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    } },
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('pills'), size: 20, style: { marginRight: 5 }, color: daysLeft <= 0 ? '#000000' : '#ffffff' }),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 28,
                            fontFamily: 'Satoshi-Bold',
                            color: daysLeft <= 0 ? '#000000' : '#ffffff',
                            width: '80%'
                        } }, props.name)),
                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('circle-info'), size: 24, color: daysLeft <= 0 ? '#000000' : '#ffffff', style: {
                        marginTop: 5,
                        marginLeft: 5
                    } })),
            react_1["default"].createElement(react_native_1.Text, { style: {
                    fontSize: 16,
                    fontFamily: 'Satoshi-Bold',
                    marginTop: 15,
                    color: daysLeft <= 0 ? '#000000' : '#ffffff'
                } },
                "Dosage: ",
                props.dosage),
            react_1["default"].createElement(react_native_1.Text, { style: {
                    fontSize: 16,
                    fontFamily: 'Satoshi-Bold',
                    marginTop: 5,
                    marginBottom: 15,
                    color: daysLeft <= 0 ? '#000000' : '#ffffff'
                } },
                "Days Left: ",
                daysLeft)));
    };
    var FilterButtons = function (props) { return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return handleActive(props.name); }, activeOpacity: 0.7, style: {
            padding: 15,
            backgroundColor: active === props.name ? '#000000' : '#ffffff',
            borderWidth: 1,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: props.name === 'Completed Circles' ? 15 : 5,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            height: 55
        } },
        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: props.icon, size: 18, style: { marginRight: 5 }, color: props.name === 'Completed Circles'
                ? 'green'
                : props.name === active
                    ? 'white'
                    : 'black' }),
        react_1["default"].createElement(react_native_1.Text, { style: {
                color: active === props.name ? '#ffffff' : '#000000',
                fontSize: 18,
                fontFamily: 'Satoshi-Regular',
                textAlign: 'center'
            } }, props.name))); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: pillActive, transparent: true, onRequestClose: function () { return setPillActive(false); } }, react_1["default"].createElement(Apill_1["default"], { setPillActive: setPillActive, data: currentPill, setCurrentPill: setCurrentPill })),
        react_1["default"].createElement(react_native_1.View, { style: {
                display: 'flex',
                flex: 1,
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(0,0,0,0.7)'
            } },
            react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png'), style: {
                    paddingTop: 16,
                    flex: 1
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
                            marginLeft: 15,
                            fontFamily: 'Satoshi-Bold'
                        } }, "My Pills"),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setMyPills(false); } },
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('xmark'), style: { marginRight: 15 }, size: 30, color: 'black' }))),
                react_1["default"].createElement(react_native_1.View, { style: { marginTop: 15 } },
                    react_1["default"].createElement(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, style: {
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            padding: 5
                        } },
                        react_1["default"].createElement(FilterButtons, { name: 'Morning', icon: import_macro_1.solid('cloud-sun') }),
                        react_1["default"].createElement(FilterButtons, { name: 'Afternoon', icon: import_macro_1.regular('sun') }),
                        react_1["default"].createElement(FilterButtons, { name: 'Evening', icon: import_macro_1.solid('cloud-moon') }),
                        react_1["default"].createElement(FilterButtons, { name: 'Completed Circles', icon: import_macro_1.solid('check') }))),
                react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: {
                        width: '100%',
                        alignSelf: 'center',
                        marginTop: 5
                    } }),
                react_1["default"].createElement(react_native_1.FlatList, { alwaysBounceVertical: true, showsVerticalScrollIndicator: false, bounces: true, bouncesZoom: true, style: { paddingTop: 15 }, data: data, renderItem: function (data) { return react_1["default"].createElement(PillBlocks, { props: data.item }); } }),
                react_1["default"].createElement(react_native_1.ScrollView, null)))));
};
exports["default"] = MyPills;
var styles = react_native_1.StyleSheet.create({});
