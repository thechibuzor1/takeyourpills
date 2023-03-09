"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var EnterDisplayName = function (_a) {
    var displayName = _a.displayName, setDisplayName = _a.setDisplayName, setShowDisplayName = _a.setShowDisplayName, setMessage = _a.setMessage, setShowNotif = _a.setShowNotif;
    function handleDone() {
        if (!displayName.trim()) {
            react_native_1.Alert.alert('Umm... 😑 ', 'Dude just put a name... 😐');
            return;
        }
        async_storage_1["default"].setItem('userName', JSON.stringify(displayName))
            .then(function () {
            setShowDisplayName(false);
            setMessage("Hola! " + displayName + "\uD83E\uDD75");
            setShowNotif(true);
        })["catch"](function (err) { return console.log(err); });
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
                } }, "What should i call you?\uD83E\uDDD0"),
            react_1["default"].createElement(react_native_1.Text, { style: {
                    fontFamily: 'Satoshi-regular',
                    color: 'gray'
                } }, "set your display name."),
            react_1["default"].createElement(react_native_1.Text, { style: {
                    fontFamily: 'Satoshi-regular',
                    color: 'gray'
                } }, "It can always be changed in settings later but please keep it PG..."),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.TextInput, { autoFocus: true, style: styles.textField, onChangeText: function (text) { return setDisplayName(text); } })),
            react_1["default"].createElement(react_native_1.View, { style: {
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 20,
                    paddingLeft: 4,
                    paddingRight: 4,
                    marginTop: 8,
                    alignSelf: 'flex-end'
                } },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleDone, activeOpacity: 0.7, style: {
                        padding: 16,
                        backgroundColor: 'black',
                        borderRadius: 15,
                        alignSelf: 'flex-end'
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: 'green',
                            fontFamily: 'Satoshi-Bold'
                        } }, "Confirm \uD83D\uDE2A"))))));
};
exports["default"] = EnterDisplayName;
var styles = react_native_1.StyleSheet.create({
    textField: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Satoshi-Bold',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 16,
        padding: 16
    }
});
