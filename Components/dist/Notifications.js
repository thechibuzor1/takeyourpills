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
    /*  const notificationData: notificationStructure[] = [
      {
        date: 'Sun Mar 5 2023',
        tag: 'almost done',
        message:
          "Hey Chibuzor, your circle is almost done with some pills. Check if you'd like to renew any:",
        sub: 'Phenol H - BE, Nora - BE and 5 more.',
        setMyPills: {setMyPills},
        redirect: true,
      },
      {
        date: 'Thu Mar 1 2023',
        tag: 'missed',
        message: 'Hey, You missed taking your 7:00 pills today:',
        sub: 'Phenol H - BE, Nora - BE and 1 more.',
        setMyPills: {setMyPills},
        redirect: false,
      },
      {
        date: 'Wed Feb 13 2023',
        tag: 'last day',
        message:
          "Hey Chibuzor, today is the your last day taking some pills. Check if you'd like to renew any: ",
        sub: 'Phenol H - BE, Nora - BE and 1 more.',
        setMyPills: {setMyPills},
        redirect: true,
      },
    ]; */
    /*  function generateNotifications() {
      var today = moment(new Date());
      var currentTime = Number(d.format('HH:mm').replace(':', ''));
      filterData.forEach(element => {
        var end = moment(new Date(element.endDate));
        var daysLeft = end.diff(today, 'days') + 1;
        var pillName: [] = [];
  
        if (daysLeft <= 5 && daysLeft >= 3) {
          pillName.push(element.name + ' ');
          const notif: notificationStructure = {
            date: d.format('ddd MMM D YYYY'),
            tag: 'almost done',
            message:
              "Hey Chibuzor, your circle is almost done with some pills. Check if you'd like to renew any:",
            sub: pillName,
            setMyPills: {setMyPills},
            redirect: true,
          };
  
          notificationData.unshift(notif);
        } else if (daysLeft === 0) {
          pillName.push(element.name + ' ');
          const notif: notificationStructure = {
            date: d.format('ddd MMM D YYYY'),
            tag: 'last day',
            message:
              "Hey Chibuzor, today is the your last day taking some pills. Check if you'd like to renew any: ",
            sub: pillName,
            setMyPills: {setMyPills},
            redirect: true,
          };
  
          notificationData.unshift(notif);
        } else if (daysLeft === 1) {
          pillName.push(element.name + ' ');
          const notif: notificationStructure = {
            date: d.format('ddd MMM D YYYY'),
            tag: 'almost done',
            message:
              'Hello Chibuzor, your circle ends in a day with some pills: ',
            sub: pillName,
            setMyPills: {setMyPills},
            redirect: true,
          };
  
          notificationData.unshift(notif);
        } else if (daysLeft === -1) {
          pillName.push(element.name + ' ');
          const notif: notificationStructure = {
            date: d.format('ddd MMM D YYYY'),
            tag: 'done',
            message: 'Hello Chibuzor, your circle is done with some pills: ',
            sub: pillName,
            setMyPills: {setMyPills},
            redirect: true,
          };
  
          notificationData.unshift(notif);
        }
      });
  
      pillData.forEach(element => {
        var dataTime = Number(element.time.replace(':', ''));
        var windowOpen = Number(element.time.replace(':', '')) - 300;
        var windowClosed = Number(element.time.replace(':', '')) + 300;
        var takenCount = 0;
        const pillCount = element.pills.length;
        var pillName: [] = [];
  
        element.pills.forEach(element => {
          pillName.push(element.name + ' ');
          element.daysTaken.forEach(elem => {
            if (elem.date === d.format('ddd MMM D YYYY')) {
              elem.time.forEach(ti => {
                if (
                  Number(ti.replace(':', '')) > windowOpen &&
                  Number(ti.replace(':', '')) < windowClosed
                ) {
                  takenCount += 1;
                }
              });
            }
          });
        });
  
        if (
          pillCount !== takenCount &&
          dataTime < currentTime &&
          currentTime >= windowOpen &&
          currentTime <= windowClosed
        ) {
          const notif: notificationStructure = {
            date: d.format('ddd MMM D YYYY'),
            tag: 'missed',
            message: `It's not too late to take the pills you missed by ${element.time}:`,
            sub: pillName,
            setMyPills: {setMyPills},
            redirect: false,
          };
          notificationData.unshift(notif);
        } else if (pillCount !== takenCount && dataTime < currentTime) {
          const notif: notificationStructure = {
            date: d.format('ddd MMM D YYYY'),
            tag: 'missed',
            message: `Hey, You missed taking your ${element.time} pills today:`,
            sub: pillName,
            setMyPills: {setMyPills},
            redirect: false,
          };
          notificationData.unshift(notif);
        }
      });
    }
    generateNotifications(); */
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
