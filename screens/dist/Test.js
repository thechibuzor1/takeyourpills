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
var react_1 = require("react");
var react_native_1 = require("react-native");
function Test() {
    var animation = new react_native_1.Animated.Value(0);
    var handleAnimation = function () {
        react_native_1.Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false
        }).start(function () {
            react_native_1.Animated.timing(animation, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            }).start();
        });
    };
    var boxInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgb(90,210,244)', 'rgb(224,82,99)']
    });
    var animatedStyle = {
        backgroundColor: boxInterpolation
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, { onPress: handleAnimation },
            react_1["default"].createElement(react_native_1.Animated.View, { style: __assign(__assign({}, styles.box), animatedStyle) }))));
}
exports["default"] = Test;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: '#5AD2F4'
    }
});
