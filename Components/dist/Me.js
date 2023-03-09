"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var react_native_elements_1 = require("react-native-elements");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var Me = function (_a) {
    var setMe = _a.setMe, setDisplayName = _a.setDisplayName, displayName = _a.displayName;
    var _b = react_1.useState(false), edit = _b[0], setEdit = _b[1];
    function handleDone() {
        if (!displayName.trim()) {
            react_native_1.Alert.alert('Umm... 😑 ', 'Dude just put a name... 😐');
            return;
        }
        async_storage_1["default"].setItem('userName', JSON.stringify(displayName))
            .then(function () { return setEdit(false); })["catch"](function (err) { return console.log(err); });
    }
    return (react_1["default"].createElement(react_native_1.View, { style: {
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)'
        } },
        react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png'), style: {
                padding: 16,
                flex: 0.3,
                paddingBottom: 0
            } },
            react_1["default"].createElement(react_native_1.View, { style: {
                    alignSelf: 'flex-end',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10
                } }, edit ? (react_1["default"].createElement(react_native_1.View, { style: {
                    display: 'flex',
                    flexDirection: 'row'
                } },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleDone, activeOpacity: 0.7, style: {
                        padding: 16,
                        backgroundColor: 'black',
                        borderRadius: 15,
                        marginRight: 15
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: 'white',
                            fontFamily: 'Satoshi-Bold'
                        } }, "Save Changes")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.7, onPress: function () { return setEdit(false); }, style: {
                        padding: 16,
                        backgroundColor: 'white',
                        borderRadius: 15,
                        borderWidth: 1
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: 'black',
                            fontFamily: 'Satoshi-Bold'
                        } }, "Discard")))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: function () { return setEdit(true); } },
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('pen-to-square'), size: 24, style: { marginRight: 15 }, color: '#000000' })),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setMe(false); }, activeOpacity: 0.5 },
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('xmark'), style: {}, size: 30, color: 'black' }))))),
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
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('user'), size: 22, style: { marginRight: 5 }, color: '#000000' }),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 28,
                            fontFamily: 'Satoshi-Bold',
                            color: '#000000',
                            width: '80%'
                        } }, displayName))),
            react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: {
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: 15
                } }),
            react_1["default"].createElement(react_native_1.ScrollView, { showsVerticalScrollIndicator: false, style: { paddingTop: 16 } },
                react_1["default"].createElement(react_native_1.View, { style: styles.listContainer },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxt }, "Display Name: "),
                    edit ? (react_1["default"].createElement(react_native_1.TextInput, { autoFocus: true, style: styles.textField, value: displayName, onChangeText: function (text) { return setDisplayName(text); } })) : (react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxtR }, displayName)))))));
};
exports["default"] = Me;
var styles = react_native_1.StyleSheet.create({
    infoTxt: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Satoshi-Bold'
    },
    infoTxtR: { fontFamily: 'Satoshi-Regular', fontSize: 18, color: 'gray' },
    textField: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Satoshi-Bold',
        flex: 1,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'gray',
        paddingStart: 16,
        paddingEnd: 16,
        marginLeft: 5
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    }
});
