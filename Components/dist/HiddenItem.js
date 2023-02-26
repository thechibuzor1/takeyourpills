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
var HiddenItem = function (data, rowMap) {
    function handleTaken() {
        var newPillData = __spreadArrays(Home_1.pillData);
        var newData = {
            time: data.item.time,
            pills: data.item.pills,
            taken: true
        };
        newPillData[data.index] = newData;
        Home_1.setPillData(newPillData);
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
exports["default"] = HiddenItem;
var styles = react_native_1.StyleSheet.create({});
