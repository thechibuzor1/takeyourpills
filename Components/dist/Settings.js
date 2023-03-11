"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var react_native_elements_1 = require("react-native-elements");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var Settings = function (_a) {
    var setSettings = _a.setSettings, setMyPills = _a.setMyPills, setLoading = _a.setLoading, setMe = _a.setMe, setDeleteAllPills = _a.setDeleteAllPills, setInfo = _a.setInfo;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.modalContainer },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                setSettings(false);
                setInfo(true);
            }, style: { position: 'absolute', top: 40, right: 40 }, activeOpacity: 0.5 },
            react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('circle-question'), size: 30, color: 'white' })),
        react_1["default"].createElement(react_native_1.ImageBackground, { style: {
                alignSelf: 'center',
                marginBottom: 5
            }, source: require('../assets/body.png') },
            react_1["default"].createElement(react_native_1.View, { style: styles.modalItemsContainer },
                react_1["default"].createElement(react_native_1.Text, { style: {
                        color: 'gray',
                        fontSize: 20,
                        fontFamily: 'Satoshi-Bold',
                        alignSelf: 'center',
                        textAlign: 'center'
                    } }, "\u2500\u2500\u2500\u2500\u2500\u2500\u2500"),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                        setSettings(false);
                        setLoading(true);
                        setTimeout(function () {
                            setMyPills(true);
                            setLoading(false);
                        }, 150);
                    }, activeOpacity: 0.5, style: styles.modalC },
                    react_1["default"].createElement(react_native_1.View, { style: styles.modalA },
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('capsules'), size: 20, color: '#2CA6FF', style: { marginRight: 15, marginLeft: 15 } }),
                        react_1["default"].createElement(react_native_1.Text, { style: {
                                color: 'black',
                                fontFamily: 'Satoshi-Bold',
                                fontSize: 15
                            } }, "My Pills"))),
                react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.4, color: 'gray' }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, style: styles.modalC, onPress: function () {
                        setSettings(false);
                        setLoading(true);
                        setTimeout(function () {
                            setMe(true);
                            setLoading(false);
                        }, 150);
                    } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.modalA },
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('user'), size: 20, color: 'black', style: { marginRight: 15, marginLeft: 15 } }),
                        react_1["default"].createElement(react_native_1.Text, { style: {
                                color: 'black',
                                fontFamily: 'Satoshi-Bold',
                                fontSize: 15
                            } }, "Me"))),
                react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.4, color: 'gray' }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                        setSettings(false);
                        setLoading(true);
                        setTimeout(function () {
                            setDeleteAllPills(true);
                            setLoading(false);
                        }, 150);
                    }, activeOpacity: 0.5, style: styles.modalC },
                    react_1["default"].createElement(react_native_1.View, { style: styles.modalA },
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('trash'), size: 20, color: 'red', style: { marginRight: 15, marginLeft: 15 } }),
                        react_1["default"].createElement(react_native_1.Text, { style: {
                                color: 'black',
                                fontFamily: 'Satoshi-Bold',
                                fontSize: 15
                            } }, "Delete Pill Records")))))));
};
exports["default"] = Settings;
var styles = react_native_1.StyleSheet.create({
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
        marginTop: 15
    },
    modalA: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
});
