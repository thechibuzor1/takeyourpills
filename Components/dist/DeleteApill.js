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
var DeleteApill = function (_a) {
    var data = _a.data, index = _a.index, setDeleteAPill = _a.setDeleteAPill, filterData = _a.filterData, setFilterData = _a.setFilterData, setShowNotif = _a.setShowNotif, setMessage = _a.setMessage, mainDrive = _a.mainDrive, setPillActive = _a.setPillActive, setCurrentPill = _a.setCurrentPill, setIndex = _a.setIndex;
    function handleDelete() {
        // array.splice(start_index, no_of_elements_to_remove)
        var clonedData = __spreadArrays(filterData);
        clonedData.splice(index, 1);
        setFilterData(clonedData);
        mainDrive(Home_1.d.format('ddd MMM D YYYY'));
        setPillActive(false);
        setCurrentPill(null);
        setIndex(null);
        setMessage('Pills have been deleted! 🤯');
        setShowNotif(true);
    }
    return (react_1["default"].createElement(react_native_1.View, { style: {
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)'
        } },
        react_1["default"].createElement(react_native_1.View, { style: {
                backgroundColor: 'white',
                padding: 16,
                width: 400,
                alignSelf: 'center'
            } },
            react_1["default"].createElement(react_native_1.Text, { style: {
                    color: 'black',
                    fontSize: 22,
                    fontFamily: 'Satoshi-Bold',
                    marginBottom: 10,
                    marginTop: 10
                } },
                "Delete ",
                data.name,
                "? \uD83D\uDE27"),
            react_1["default"].createElement(react_native_1.Text, { style: {
                    fontFamily: 'Satoshi-regular',
                    color: 'gray'
                } }, "Are you sure about this?"),
            react_1["default"].createElement(react_native_1.Text, { style: {
                    fontFamily: 'Satoshi-regular',
                    color: 'gray'
                } }, "There's no going back once it's done..."),
            react_1["default"].createElement(react_native_1.View, { style: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,
                    paddingLeft: 4,
                    paddingRight: 4,
                    marginTop: 8
                } },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.7, onPress: handleDelete, style: {
                        padding: 16,
                        backgroundColor: 'black',
                        borderRadius: 15
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: 'red',
                            fontFamily: 'Satoshi-Bold'
                        } }, "Yes, I'm sure \uD83D\uDE2A")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setDeleteAPill(false); }, activeOpacity: 0.7, style: {
                        padding: 16,
                        backgroundColor: 'white',
                        borderRadius: 15,
                        borderWidth: 1
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: 'black',
                            fontFamily: 'Satoshi-Bold'
                        } }, "No, I was feeling silly \uD83D\uDE0C"))))));
};
exports["default"] = DeleteApill;
var styles = react_native_1.StyleSheet.create({});
