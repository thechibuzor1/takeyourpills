"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var moment_1 = require("moment");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
var Home_1 = require("../screens/Home");
var lottie_react_native_1 = require("lottie-react-native");
var MedicineContainer = function (_a) {
    var props = _a.props, confetti = _a.confetti, setConfetti = _a.setConfetti;
    var endTime = moment_1["default"](props.time, 'HH:mm:ss a');
    var timeDiff = Home_1.dateDifference(Home_1.d, endTime);
    timeDiff = Math.abs(timeDiff);
    /*  const pillColor = pillColors[Math.floor(Math.random() * pillColors.length)];
     */
    var style = react_native_1.StyleSheet.create({
        box: {
            borderRadius: 15,
            backgroundColor: props.taken
                ? '#69CA90'
                : timeDiff <= 3 && timeDiff > 0
                    ? '#F9DD71'
                    : timeDiff > 3 && timeDiff <= 6
                        ? '#132342'
                        : '#ECECEC',
            display: 'flex',
            width: '95%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            height: props.pills.length * 300
        },
        textColor: {
            color: timeDiff > 3 && timeDiff <= 6 ? 'white' : 'black'
        }
    });
    var _b = react_1.useState(null), active = _b[0], setActive = _b[1];
    function handleActive(pill) {
        if (active !== pill.id) {
            setActive(pill.id);
            return;
        }
        setActive(null);
    }
    react_1.useEffect(function () {
        setTimeout(function () {
            setConfetti(false);
        }, 500);
    }, [confetti]);
    return (react_1["default"].createElement(react_native_1.View, { style: __assign({}, style.box) },
        confetti && props.taken && (react_1["default"].createElement(lottie_react_native_1["default"], { style: { height: 200, position: 'absolute', right: 0, top: '25%' }, source: require('../assets/confetti.json'), autoPlay: true, speed: 2 })),
        props.pills.map(function (pill) {
            return (react_1["default"].createElement(react_native_1.TouchableOpacity, { key: pill.id, style: { marginTop: 0 }, onPress: function () { return handleActive(pill); }, activeOpacity: 0.7 }, active !== pill.id ? (react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { style: [
                        {
                            fontSize: 28,
                            fontFamily: 'Satoshi-Bold',
                            marginLeft: 15,
                            marginTop: 15
                        },
                        style.textColor,
                    ] }, pill.name),
                react_1["default"].createElement(react_native_1.Text, { style: [
                        {
                            marginLeft: 15,
                            fontSize: 14,
                            fontFamily: 'Satoshi-Bold'
                        },
                        style.textColor,
                    ] }, pill.desc),
                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: props.pills.length > 1 ? import_macro_1.solid('pills') : import_macro_1.solid('tablets'), size: 50, style: {
                        alignSelf: 'center',
                        marginTop: 60
                    }, color: timeDiff <= 3
                        ? '#FFFFFF'
                        : timeDiff > 3 && timeDiff <= 6
                            ? '#FF66CC'
                            : '#EF6F3A' }))) : (react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.View, { style: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 15
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: [
                            {
                                fontSize: 28,
                                fontFamily: 'Satoshi-Bold',
                                marginLeft: 15
                            },
                            style.textColor,
                        ] }, pill.name)),
                react_1["default"].createElement(react_native_1.Text, { style: [
                        {
                            marginLeft: 15,
                            fontSize: 14,
                            marginBottom: 15,
                            fontFamily: 'Satoshi-Bold'
                        },
                        style.textColor,
                    ] }, pill.desc),
                react_1["default"].createElement(react_native_1.Text, { style: [
                        {
                            marginLeft: 15,
                            fontSize: 18,
                            fontFamily: 'Satoshi-Bold',
                            marginBottom: 15
                        },
                        style.textColor,
                    ] },
                    "Instructions: ",
                    pill.instructions),
                react_1["default"].createElement(react_native_1.Text, { style: [
                        {
                            marginLeft: 15,
                            fontSize: 18,
                            fontFamily: 'Satoshi-Bold'
                        },
                        style.textColor,
                    ] },
                    "Dosage: ",
                    pill.dosage)))));
        }),
        react_1["default"].createElement(react_native_1.Text, { style: [
                {
                    fontFamily: 'Satoshi-Bold',
                    bottom: 15,
                    marginLeft: 15
                },
                style.textColor,
            ] }, moment_1["default"]("" + props.time, ['h:m a', 'H:m']).format('H:mm'))));
};
exports["default"] = MedicineContainer;
var styles = react_native_1.StyleSheet.create({});
