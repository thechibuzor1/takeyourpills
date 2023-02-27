"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var react_native_elements_1 = require("react-native-elements");
var NotificationBlocks = function (props) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
    react_1["default"].createElement(react_native_1.Text, { style: {
            paddingTop: 15,
            color: 'gray',
            fontSize: 14,
            fontFamily: 'Satoshi-Regular',
            textAlign: 'right',
            paddingBottom: 5
        } }, props.date),
    react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.7, style: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        } },
        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('prescription-bottle'), size: 30, color: props.color }),
        react_1["default"].createElement(react_native_1.View, { style: { flex: 1, marginLeft: 15 } },
            react_1["default"].createElement(react_native_1.Text, { style: {
                    color: 'black',
                    fontSize: 18,
                    fontFamily: 'Satoshi-Bold'
                } }, props.message),
            react_1["default"].createElement(react_native_1.Text, { style: {
                    color: 'black',
                    fontSize: 16,
                    marginTop: 5,
                    fontFamily: 'Satoshi-Regular'
                } }, props.sub))),
    react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: {
            width: '100%',
            alignSelf: 'center',
            marginTop: 15
        } }))); };
var Notifications = function (_a) {
    var setNotifications = _a.setNotifications;
    return (react_1["default"].createElement(react_native_1.View, { style: {
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)'
        } },
        react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png'), style: {
                padding: 16,
                paddingBottom: 0,
                flex: 0.9
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
                    } }, "Notifications"),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setNotifications(false); } },
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('xmark'), style: { marginRight: 15 }, size: 30, color: 'black' }))),
            react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: {
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: 15
                } }),
            react_1["default"].createElement(react_native_1.ScrollView, { alwaysBounceVertical: true, showsVerticalScrollIndicator: false, bounces: true, bouncesZoom: true, style: {} },
                react_1["default"].createElement(NotificationBlocks, { date: 'Today', color: '#FFAD00', message: "Hey Chibuzor, your circle is almost done with some pills. Check if you'd like to renew any:", sub: 'Phenol H - BE, Nora - BE and 5 more.' }),
                react_1["default"].createElement(NotificationBlocks, { date: 'Today', color: '#ED1D24', message: 'Hey, You missed taking your 7:00 pills today:', sub: 'Phenol H - BE, Nora - BE and 1 more.' }),
                react_1["default"].createElement(NotificationBlocks, { date: 'Yesterday', color: '#00958A', message: "Hey Chibuzor, today is the your last day taking some pills. Check if you'd like to renew any: ", sub: 'Phenol H - BE, Nora - BE and 1 more.' }),
                react_1["default"].createElement(NotificationBlocks, { date: 'May 3rd', color: '#132342', message: 'Hello Chibuzor, your circle is done with some pills: ', sub: 'Nora - BE and 1 more.' }),
                react_1["default"].createElement(NotificationBlocks, { date: 'May 7th', color: '#132342', message: 'Hello Chibuzor, your circle is done with some pills: ', sub: 'Paracetamol' }),
                react_1["default"].createElement(NotificationBlocks, { date: 'March 3rd', color: '#132342', message: 'Hello Chibuzor, your circle is done with some pills: ', sub: 'Trent' }),
                react_1["default"].createElement(NotificationBlocks, { date: 'March 11th', color: '#00958A', message: "Hey Chibuzor, today is the your last day taking some pills. Check if you'd like to renew any: ", sub: 'Nora - BE and 1 more.' }),
                react_1["default"].createElement(NotificationBlocks, { date: 'March 11th', color: '#00958A', message: "Hey Chibuzor, today is the your last day taking some pills. Check if you'd like to renew any: ", sub: 'Phenol H - BE, Nora - BE and 1 more.' }),
                react_1["default"].createElement(NotificationBlocks, { date: 'Jan 20th', color: '#ED1D24', message: 'Hey, You missed taking your 7:00 pills today:', sub: 'Phenol H - BE, Nora - BE and 1 more.' }),
                react_1["default"].createElement(NotificationBlocks, { date: 'Jan 19th', color: '#ED1D24', message: 'Hey, You missed taking your 7:00 pills today:', sub: 'Phenol H - BE, Nora - BE and 1 more.' })))));
};
exports["default"] = Notifications;
var styles = react_native_1.StyleSheet.create({});
