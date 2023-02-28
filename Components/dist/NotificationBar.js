"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
function NotificationBar(prop) {
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('prescription-bottle'), style: styles.logo, size: 30, color: 'green' }),
        react_1["default"].createElement(react_native_1.Text, { style: styles.text }, prop.text)));
}
exports["default"] = NotificationBar;
var styles = react_native_1.StyleSheet.create({
    container: {
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 10,
        zIndex: 999,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 15,
        height: 60
    },
    logo: {
        marginLeft: 30
    },
    text: {
        color: 'black',
        marginLeft: 10,
        marginRight: 30,
        fontFamily: 'Satoshi-Bold',
        fontSize: 18
    }
});
