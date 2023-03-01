"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var react_native_elements_1 = require("react-native-elements");
var Me = function (_a) {
    var setMe = _a.setMe;
    return (react_1["default"].createElement(react_native_1.View, { style: {
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)'
        } },
        react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/body.png'), style: {
                padding: 16,
                flex: 0.6,
                paddingBottom: 0
            } },
            react_1["default"].createElement(react_native_1.View, { style: {
                    alignSelf: 'flex-end',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10
                } },
                react_1["default"].createElement(react_native_1.TouchableOpacity, null,
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('pen-to-square'), size: 24, style: { marginRight: 15 }, color: '#000000' })),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setMe(false); }, activeOpacity: 0.5 },
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('xmark'), style: {}, size: 30, color: 'black' }))),
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
                        } }, "Chibuzor"))),
            react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: {
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: 15
                } }),
            react_1["default"].createElement(react_native_1.ScrollView, { showsVerticalScrollIndicator: false, style: { paddingTop: 16 } },
                react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxt },
                    "Fullname:",
                    ' ',
                    react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } },
                        "Igbudu Chibuzor Moses",
                        ' ')),
                react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxt },
                    "Date of birth:",
                    ' ',
                    react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } }, "May 1, 2002")),
                react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxt },
                    "Age: ",
                    react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } }, "20")),
                react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxt },
                    "Gender: ",
                    react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } }, "Male")),
                react_1["default"].createElement(react_native_1.Text, { style: [styles.infoTxt, { marginBottom: 30 }] },
                    "BMI: ",
                    react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } }, "28"))))));
};
exports["default"] = Me;
var styles = react_native_1.StyleSheet.create({
    infoTxt: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Satoshi-Bold',
        marginBottom: 10
    }
});
