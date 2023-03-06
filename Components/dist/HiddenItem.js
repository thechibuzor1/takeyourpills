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
var Home_1 = require("../screens/Home");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var HiddenItem = function (_a) {
    var props = _a.props, filterData = _a.filterData, setFilterData = _a.setFilterData, mainDrive = _a.mainDrive;
    var _b = react_1.useState(false), taken = _b[0], setTaken = _b[1];
    var pillCount = props.pills.length;
    var takenCount = 0;
    var currentTime = Number(Home_1.d.format('HH:mm').replace(':', ''));
    var windowOpen = Number(props.time.replace(':', '')) - 100;
    var windowClosed = Number(props.time.replace(':', '')) + 100;
    props.pills.forEach(function (element) {
        element.daysTaken.forEach(function (elem) {
            if (elem.date === Home_1.d.format('ddd MMM D YYYY')) {
                elem.time.forEach(function (i) {
                    if (Number(i.replace(':', '')) > windowOpen &&
                        Number(i.replace(':', '')) < windowClosed) {
                        takenCount += 1;
                    }
                });
            }
        });
    });
    react_1.useEffect(function () {
        if (takenCount === pillCount) {
            setTaken(true);
        }
        else {
            setTaken(false);
        }
    }, [takenCount, pillCount]);
    function handleTaken() {
        var clonedData = __spreadArrays(filterData);
        var pills = props.pills;
        clonedData.forEach(function (ele) {
            pills.forEach(function (element) {
                if (element.id === ele.id) {
                    if (ele.daysTaken.length === 0) {
                        ele.daysTaken.push({
                            date: Home_1.d.format('ddd MMM D YYYY'),
                            time: [Home_1.d.format('HH:mm')]
                        });
                    }
                    else {
                        ele.daysTaken.forEach(function (elem) {
                            if (elem.date === Home_1.d.format('ddd MMM D YYYY')) {
                                elem.time.push(Home_1.d.format('HH:mm'));
                            }
                            else {
                                ele.daysTaken.push({
                                    date: Home_1.d.format('ddd MMM D YYYY'),
                                    time: [Home_1.d.format('HH:mm')]
                                });
                            }
                        });
                    }
                }
            });
        });
        setFilterData(clonedData);
        mainDrive(Home_1.d.format('ddd MMM D YYYY'));
    }
    /* console.log(diff(props.time, d.format('HH:mm'))); */
    /*  console.log(Number(d.format('HH:mm').replace(':', ''))); */
    return (react_1["default"].createElement(react_native_1.TouchableOpacity
    /*  onPress={handleAnimation} */
    , { 
        /*  onPress={handleAnimation} */
        onPress: handleTaken, activeOpacity: 0.8, style: {
            alignSelf: 'flex-end',
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: 150,
            height: 300 * props.pills.length,
            borderRadius: 15,
            backgroundColor: '#2CA6FF',
            marginRight: 15,
            display: currentTime >= windowOpen && currentTime <= windowClosed && !taken
                ? 'flex'
                : 'none'
        } },
        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('check'), style: { marginRight: 25 }, size: 24, color: 'white' })));
};
exports["default"] = HiddenItem;
var styles = react_native_1.StyleSheet.create({});
