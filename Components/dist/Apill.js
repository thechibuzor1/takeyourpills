"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var lottie_react_native_1 = require("lottie-react-native");
var react_native_elements_1 = require("react-native-elements");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var EditPills_1 = require("./EditPills");
var DeleteApill_1 = require("./DeleteApill");
var Apill = function (_a) {
    var setPillActive = _a.setPillActive, data = _a.data, setCurrentPill = _a.setCurrentPill, index = _a.index, setShowNotif = _a.setShowNotif, setMessage = _a.setMessage, filterData = _a.filterData, mainDrive = _a.mainDrive, setFilterData = _a.setFilterData, setIndex = _a.setIndex;
    var _b = react_1.useState(false), editPill = _b[0], setEditPill = _b[1];
    var _c = react_1.useState(false), deleteAPill = _c[0], setDeleteAPill = _c[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: editPill, transparent: true, onRequestClose: function () { return setEditPill(false); } }, react_1["default"].createElement(EditPills_1["default"], { setEditPill: setEditPill, data: data, index: index, setShowNotif: setShowNotif, setMessage: setMessage, filterData: filterData, mainDrive: mainDrive, setFilterData: setFilterData, setPillActive: setPillActive, setCurrentPill: setCurrentPill, setIndex: setIndex })),
        react_1["default"].createElement(react_native_1.Modal, { animated: true, animationType: "slide", visible: deleteAPill, transparent: true, onRequestClose: function () { return setDeleteAPill(false); } }, react_1["default"].createElement(DeleteApill_1["default"], { setDeleteAPill: setDeleteAPill, data: data, index: index, setShowNotif: setShowNotif, setMessage: setMessage, filterData: filterData, mainDrive: mainDrive, setFilterData: setFilterData, setPillActive: setPillActive, setCurrentPill: setCurrentPill, setIndex: setIndex })),
        react_1["default"].createElement(react_native_1.View, { style: {
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
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 10
                    } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setDeleteAPill(true); }, activeOpacity: 0.7 },
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('trash-can'), size: 25, style: { marginRight: 15 }, color: 'red' })),
                    react_1["default"].createElement(react_native_1.View, { style: {
                            alignSelf: 'flex-end',
                            flexDirection: 'row',
                            alignItems: 'center'
                        } },
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setEditPill(true); }, activeOpacity: 0.7 },
                            react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.regular('pen-to-square'), size: 24, style: { marginRight: 15 }, color: '#000000' })),
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                                setPillActive(false);
                                setCurrentPill(null);
                                setIndex(null);
                            }, activeOpacity: 0.5 },
                            react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('xmark'), style: {}, size: 30, color: 'black' })))),
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
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: import_macro_1.solid('pills'), size: 20, style: { marginRight: 5 }, color: '#000000' }),
                        react_1["default"].createElement(react_native_1.Text, { style: {
                                fontSize: 28,
                                fontFamily: 'Satoshi-Bold',
                                color: '#000000',
                                width: '80%'
                            } }, data.name))),
                react_1["default"].createElement(react_native_elements_1.Divider, { width: 0.5, style: {
                        width: '100%',
                        alignSelf: 'center',
                        marginTop: 15
                    } }),
                react_1["default"].createElement(react_native_1.View, { style: {
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        justifyContent: 'flex-end'
                    } },
                    react_1["default"].createElement(lottie_react_native_1["default"], { autoSize: true, loop: true, style: { height: '85%', width: '25%' }, source: require('../assets/bubbles.json'), autoPlay: true, speed: 2 })),
                react_1["default"].createElement(react_native_1.ScrollView, { showsVerticalScrollIndicator: false, style: { paddingTop: 16 } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxt },
                        "Pill name:",
                        ' ',
                        react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } },
                            data.name,
                            " ")),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxt },
                        "Description:",
                        ' ',
                        react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } },
                            data.desc,
                            " ")),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxt },
                        "Dosage:",
                        ' ',
                        react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } },
                            data.dosage,
                            ' ')),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxt },
                        "Duration:",
                        ' ',
                        react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } }, data.duration)),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxt },
                        "Time in a day:",
                        ' ',
                        react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } }, data.timesPerDay)),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxt },
                        "Times:",
                        ' ',
                        react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } }, data.times)),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxt },
                        "Start date:",
                        ' ',
                        react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } }, data.startDate)),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infoTxt },
                        "End date:",
                        ' ',
                        react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } },
                            data.endDate,
                            ' ')),
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.infoTxt, { marginBottom: 30 }] },
                        "Instructions:",
                        ' ',
                        react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Satoshi-Regular' } }, data.instructions)))))));
};
exports["default"] = Apill;
var styles = react_native_1.StyleSheet.create({
    infoTxt: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Satoshi-Bold',
        marginBottom: 10
    }
});
