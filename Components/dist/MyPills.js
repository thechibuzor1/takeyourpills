"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var react_native_elements_1 = require("react-native-elements");
var MyPills = function (_a) {
    var setMyPills = _a.setMyPills;
    return (react_1["default"].createElement(react_native_1.View, { style: {
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)'
        } },
        react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png'), style: {
                padding: 16,
                paddingBottom: 0,
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
                        fontFamily: 'Satoshi-Bold'
                    } }, "My Pills"),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setMyPills(false); } },
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('xmark'), style: { marginRight: 15 }, size: 30, color: 'black' }))),
            react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: {
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: 15
                } }),
            react_1["default"].createElement(react_native_1.ScrollView, { alwaysBounceVertical: true, showsVerticalScrollIndicator: false, bounces: true, bouncesZoom: true, style: { paddingTop: 15 } }))));
};
exports["default"] = MyPills;
var styles = react_native_1.StyleSheet.create({});
