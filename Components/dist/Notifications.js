"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var react_native_elements_1 = require("react-native-elements");
var Home_1 = require("../screens/Home");
var Notifications = function (_a) {
    var setNotifications = _a.setNotifications, setMyPills = _a.setMyPills, notificationData = _a.notificationData, pillData = _a.pillData, setNewNotification = _a.setNewNotification;
    var Empty = function () { return (react_1["default"].createElement(react_native_1.View, { style: { paddingTop: 15 } },
        react_1["default"].createElement(react_native_1.Text, { style: styles.noPills }, "No New Notification."))); };
    var NotificationBlocks = function (_a) {
        var props = _a.props;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_native_1.Text, { style: {
                    paddingTop: 15,
                    color: 'gray',
                    fontSize: 14,
                    fontFamily: 'Satoshi-Regular',
                    textAlign: 'right',
                    paddingBottom: 5
                } }, props.date !== Home_1.d.format('ddd MMM D YYYY')
                ? props.date.slice(0, -5)
                : 'Today'),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return props.redirect && setMyPills(true); }, activeOpacity: props.redirect ? 0.7 : 1, style: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                } },
                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('prescription-bottle'), size: 30, color: props.tag === 'almost done'
                        ? '#FFAD00'
                        : props.tag === 'done'
                            ? '#ECECEC'
                            : props.tag === 'missed'
                                ? '#ED1D24'
                                : '#132342' }),
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
                } })));
    };
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
                react_1["default"].createElement(react_native_1.View, { style: {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    } },
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('bell'), size: 20, style: { marginRight: 5, marginTop: 5 }, color: '#000000' }),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 23,
                            fontFamily: 'Satoshi-Bold',
                            color: '#000000'
                        } }, "Notifications")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () {
                        setNotifications(false);
                        setNewNotification([]);
                    } },
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('xmark'), style: { marginRight: 15 }, size: 30, color: 'black' }))),
            react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: {
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: 15
                } }),
            notificationData.length !== 0 ? (react_1["default"].createElement(react_native_1.FlatList, { alwaysBounceVertical: true, showsVerticalScrollIndicator: false, bounces: true, bouncesZoom: true, data: notificationData, renderItem: function (data) { return react_1["default"].createElement(NotificationBlocks, { props: data.item }); } })) : (react_1["default"].createElement(Empty, null)))));
};
exports["default"] = Notifications;
var styles = react_native_1.StyleSheet.create({
    noPills: {
        color: 'gray',
        fontFamily: 'Satoshi-Regular',
        fontSize: 20,
        textAlign: 'center'
    }
});
