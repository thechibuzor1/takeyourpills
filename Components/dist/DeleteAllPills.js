"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var DeleteAllPills = function (_a) {
    var setDeleteAllPills = _a.setDeleteAllPills;
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
                } }, "Delete all pill records \uD83D\uDE27"),
            react_1["default"].createElement(react_native_1.Text, { style: {
                    fontFamily: 'Satoshi-regular'
                } }, "Are you sure about this?"),
            react_1["default"].createElement(react_native_1.Text, { style: {
                    fontFamily: 'Satoshi-regular'
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
                react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.7, style: {
                        padding: 16,
                        backgroundColor: 'black',
                        borderRadius: 15
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: 'red',
                            fontFamily: 'Satoshi-Bold'
                        } }, "Yes, I'am sure \uD83D\uDE2A")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setDeleteAllPills(false); }, activeOpacity: 0.7, style: {
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
exports["default"] = DeleteAllPills;
var styles = react_native_1.StyleSheet.create({});
