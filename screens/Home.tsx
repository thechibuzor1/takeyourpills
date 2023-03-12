/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Modal,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import notifee from '@notifee/react-native';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {Divider, Badge} from 'react-native-elements';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro';
import {SwipeListView} from 'react-native-swipe-list-view';
import NewPill from '../Components/NewPill';
import Settings from '../Components/Settings';
import MedicineContainer from '../Components/MedicineContainer';
import AnimatedLottieView from 'lottie-react-native';
import Notifications from '../Components/Notifications';
import NotificationBar from '../Components/NotificationBar';
import MyPills from '../Components/MyPills';
import Me from '../Components/Me';
import DeleteAllPills from '../Components/DeleteAllPills';
import HiddenItem from '../Components/HiddenItem';
import AppIntroSlider from 'react-native-app-intro-slider';
import EnterDisplayName from '../Components/EnterDisplayName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Info from '../Components/Info';
import Notification from '../Notifications';

export function check(dF: string, dT: string, dC: string) {
  //convert dates to 'day/month/year' format
  var dateFrom = moment(new Date(dF)).format('DD/MM/YYYY');
  var dateTo = moment(new Date(dT)).format('DD/MM/YYYY');
  var dateCheck = moment(new Date(dC)).format('DD/MM/YYYY');

  /*     var dateFrom = '02/05/2023';
  var dateTo = '09/03/2023';
  var dateCheck = '05/07/2023'; */

  var d1 = dateFrom.split('/');
  var d2 = dateTo.split('/');
  var c = dateCheck.split('/');

  var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
  var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
  var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);
  //cheack if date is in range of two dates
  return check >= from && check <= to;
}
const date = new Date();
export var d = moment(date);

const Home = () => {
  const [displayName, setDisplayName] = useState<string>('');
  const [showDisplayName, setShowDisplayName] = useState<boolean>(false);
  d.month(); // 1
  const [day, setDay] = useState(d.format('ddd MMM D YYYY'));
  const [pillData, setPillData] = useState([]);
  const [fullDate, setFullDate] = useState(d.format('dddd MMM D'));
  const [header, setHeader] = useState<string>('today');
  const [selectedDate, setSelectedDate] = useState(moment());

  const [filterData, setFilterData] = useState([]);
  function mainDrive(date) {
    //set data based on date
    var listInDuration = []; //empty list of piils in range of selected date
    var listInDurationTimes = []; //empty list of times in date range
    var pills = [];

    //check if pills are in ramge of current date
    filterData.forEach(element => {
      if (check(element.startDate, element.endDate, date)) {
        listInDuration.push(element); //add those in range to the list
        return;
      }
    });

    //get their times in a day
    listInDuration.forEach(element => {
      element.times.forEach(element => {
        listInDurationTimes.push(element);
      });
    });
    //remove repeated times
    listInDurationTimes = [...new Set(listInDurationTimes)];

    listInDurationTimes.sort(function (a: string, b: string) {
      return Number(a.replace(':', '')) - Number(b.replace(':', ''));
    });
    var mainReturn = [];

    //create pill with times
    listInDurationTimes.forEach(element => {
      const newData = {
        time: element,
        pills: [],
      };
      mainReturn.push(newData);
    });

    //recreate pills without nested times list but only a specific time
    listInDuration.forEach(ele => {
      ele.times.forEach(element => {
        const pill = {
          id: ele.id,
          name: ele.name,
          desc: ele.desc,
          dosage: ele.dosage,
          duration: ele.duration,
          timesPerDay: ele.timesPerDay,
          time: element, //from [] to string
          startDate: ele.startDate,
          endDate: ele.endDate,
          instructions: ele.instructions,
          daysTaken: ele.daysTaken,
        };
        pills.push(pill); //add new piils to list of piils
      });
    });

    //add pills at specific times list
    mainReturn.forEach(ele => {
      pills.forEach(element => {
        if (element.time === ele.time) {
          ele.pills.push(element);
        }
      });
    });
    setPillData(mainReturn);
    //notifications

    //set new data
  }
  async function setPushNotification() {
    var todaysDuration = [];
    var todaysTimes = [];
    filterData?.forEach(element => {
      if (
        check(element.startDate, element.endDate, d.format('ddd MMM D YYYY'))
      ) {
        todaysDuration.push(element); //add those in range to the list
        return;
      }
    });

    //get their times in a day
    todaysDuration.forEach(element => {
      element.times.forEach(element => {
        todaysTimes.push(element);
      });
    });
    //remove repeated times
    todaysTimes = [...new Set(todaysTimes)];

    todaysTimes.sort(function (a: string, b: string) {
      return Number(a.replace(':', '')) - Number(b.replace(':', ''));
    });
    var currentTime = Number(d.format('HH:mm').replace(':', ''));
    todaysTimes.forEach(element => {
      var dateTime = Number(element.replace(':', ''));
      if (currentTime < dateTime) {
        var notifDate = moment(element, ['h:m a', 'H:m']).toDate();
        var text = `It's time to take your ${element} pills`;
        Notification.scheduleNotification({reminder: text, date: notifDate});
      }
    });
  }
  interface notificationStructure {
    date: string;
    tag: string;
    message: string;
    sub: string | [];
    setMyPills: {setMyPills};
    redirect: boolean;
  }

  useEffect(() => mainDrive(day), [filterData]);

  useEffect(() => {
    if (fullDate === d.format('dddd MMM D')) {
      setHeader('today');
    } else {
      setHeader(fullDate);
    }
  }, [fullDate]);

  const [showCalendar, setShowCalendar] = useState<Boolean>(false);

  const slides = [
    {
      key: 1,
      title: 'Schedule Pills',
      text: 'Never miss\ntaking your pills',
      image: require('../assets/1.jpg'),
      backgroundColor: '#fff',
    },
    {
      key: 2,
      title: 'Manage Pills',
      text: 'Track pills durations, dosage and so on...',
      image: require('../assets/2.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Notifications',
      text: 'Get notified on\nmissed pills and pills due for renewal',
      image: require('../assets/3.jpg'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 4,
      title: 'Calendar',
      text: 'View your pills schedule\nmonths ahead or behind.',
      image: require('../assets/4.jpg'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 5,
      title: 'Strict Scheduling',
      text: 'Pills have to be taken\nwithin an hour before or after \nspecified time.',
      image: require('../assets/5.jpg'),
      backgroundColor: '#22bcb5',
    },
  ];
   
  const [confetti, setConfetti] = useState<boolean>(false);
  const renderItem = data => (
    <View style={styles.rowFront}>
      <MedicineContainer
        props={data.item}
        confetti={confetti}
        setConfetti={setConfetti}
        day={day}
      />
    </View>
  );
  const renderHiddenItem = data => (
    <HiddenItem
      props={data.item}
      filterData={filterData}
      setFilterData={setFilterData}
      mainDrive={mainDrive}
      setConfetti={setConfetti}
    />
  );

  const [newPill, setPillModal] = useState<boolean>(false);
  const [settings, setSettings] = useState<boolean>(false);
  const [myPills, setMyPills] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [splash, setSplash] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<boolean>(false);
  const [info, setInfo] = useState<boolean>(false);

  const Loading = () => (
    <ImageBackground
      source={require('../assets/body.png')}
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AnimatedLottieView
        style={{height: 200}}
        source={require('../assets/loading.json')}
        autoPlay
        speed={2}
      />
    </ImageBackground>
  );
  const Empty = () => (
    <View>
      <Text style={styles.noPills}>Your Pill Schedule Is Empty.</Text>
    </View>
  );
  const Splash = () => (
    <ImageBackground
      source={require('../assets/body.png')}
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AnimatedLottieView
        style={{height: 200}}
        source={require('../assets/medicine-pills.json')}
        autoPlay
        speed={2}
      />
    </ImageBackground>
  );

  const [newNotificationData, setNewNotification] = useState([]);
  var [notificationData, setNotificationData] = useState<
    notificationStructure[]
  >([]);

  async function generateNotifications() {
    var today = moment(new Date());
    var currentTime = Number(d.format('HH:mm').replace(':', ''));
    pillData?.forEach(element => {
      var dataTime = Number(element.time.replace(':', ''));
      var windowOpen = Number(element.time.replace(':', '')) - 100;
      var windowClosed = Number(element.time.replace(':', '')) + 100;
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
        newNotificationData.unshift(notif);
      } else if (pillCount !== takenCount && dataTime < currentTime) {
        const notif: notificationStructure = {
          date: d.format('ddd MMM D YYYY'),
          tag: 'missed',
          message: `Hey, You missed taking your ${element.time} pills today:`,
          sub: pillName,
          setMyPills: {setMyPills},
          redirect: false,
        };
        newNotificationData.unshift(notif);
      }
    });
    filterData?.forEach(element => {
      var end = moment(new Date(element.endDate));
      var daysLeft = end.diff(today, 'days') + 1;
      var pillName: [] = [];

      if (daysLeft <= 5 && daysLeft >= 3) {
        pillName.push(element.name + ' ');
        const notif: notificationStructure = {
          date: d.format('ddd MMM D YYYY'),
          tag: 'almost done',
          message: `Hey ${displayName}, your circle is almost done with some pills. Check if you'd like to renew any:`,
          sub: pillName,
          setMyPills: {setMyPills},
          redirect: true,
        };

        newNotificationData.unshift(notif);
      } else if (daysLeft === 0) {
        pillName.push(element.name + ' ');
        const notif: notificationStructure = {
          date: d.format('ddd MMM D YYYY'),
          tag: 'last day',
          message: `Hey ${displayName}, today is the your last day taking some pills. Check if you'd like to renew any: `,
          sub: pillName,
          setMyPills: {setMyPills},
          redirect: true,
        };

        newNotificationData.unshift(notif);
      } else if (daysLeft === 1) {
        pillName.push(element.name + ' ');
        const notif: notificationStructure = {
          date: d.format('ddd MMM D YYYY'),
          tag: 'almost done',
          message: `Hello ${displayName}, your circle ends in a day with some pills: `,
          sub: pillName,
          setMyPills: {setMyPills},
          redirect: true,
        };

        newNotificationData.unshift(notif);
      } else if (daysLeft === -1) {
        pillName.push(element.name + ' ');
        const notif: notificationStructure = {
          date: d.format('ddd MMM D YYYY'),
          tag: 'done',
          message: `Hello ${displayName}, your circle is done with some pills: `,
          sub: pillName,
          setMyPills: {setMyPills},
          redirect: true,
        };

        newNotificationData.unshift(notif);
      }
    });

    const clonedData = [...notificationData];

    newNotificationData.forEach(ele => {
      if (!clonedData.includes(ele)) {
        clonedData.unshift(ele);
      }
    });
    AsyncStorage.setItem('notifications', JSON.stringify(clonedData))
      .then(() => {
        setNotificationData(clonedData);
      })
      .catch(err => console.log(err));
  }

  const [showRealApp, setShowRealApp] = useState<boolean>(false);

  async function loadData() {
    AsyncStorage.getItem('first_time').then(data => {
      if (data !== null) {
        setShowRealApp(true);
      }
    });
    AsyncStorage.getItem('userName')
      .then(data => {
        if (data !== null) {
          setDisplayName(JSON.parse(data));
        }
      })
      .catch(err => console.log(err));
    AsyncStorage.getItem('pillData')
      .then(data => {
        if (data !== null) {
          setFilterData(JSON.parse(data));
          /*  setPushNotification(); */
        }
      })
      .catch(err => console.log(err));
    AsyncStorage.getItem('notifications')
      .then(data => {
        if (data !== null) {
          setNotificationData(JSON.parse(data));
        }
      })
      .catch(err => console.log(err));
  }
  async function checkPermission() {
    const hasPermissions = await Notification.checkPermissions();
    if (!hasPermissions) {
      Alert.alert(
        'Permission Declined',
        'To ensure notifications are delivered, please enable notifications for the app.',
        [
          // 3. launch intent to navigate the user to the appropriate screen
          {
            text: 'OK, open settings',
            onPress: async () => await notifee.openNotificationSettings(),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    }
    const batteryOptimizationEnabled =
      await notifee.isBatteryOptimizationEnabled();
    if (batteryOptimizationEnabled) {
      // 2. ask your users to disable the feature
      Alert.alert(
        'Restrictions Detected',
        'To ensure notifications are delivered, please disable battery optimization for the app.',
        [
          // 3. launch intent to navigate the user to the appropriate screen
          {
            text: 'OK, open settings',
            onPress: async () =>
              await notifee.openBatteryOptimizationSettings(),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    }
    const powerManagerInfo = await notifee.getPowerManagerInfo();
    if (powerManagerInfo.activity) {
      // 2. ask your users to adjust their settings
      Alert.alert(
        'Restrictions Detected',
        'To ensure notifications are delivered, please adjust your settings to prevent the app from being killed',
        [
          // 3. launch intent to navigate the user to the appropriate screen
          {
            text: 'OK, open settings',
            onPress: async () => await notifee.openPowerManagerSettings(),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    }
  }

  /*  makeshift splash screen  */
  useEffect(() => {
    setTimeout(() => {
      loadData().then(() => {
        mainDrive(d.format('ddd MMM D YYYY'));
        setPushNotification();
        generateNotifications();

        checkPermission();
        setSplash(false);
      });
    }, 1000);
  }, []);

  const [showNotif, setShowNotif] = useState<boolean>(false);
  const [me, setMe] = useState<boolean>(false);
  const [deleteAllPills, setDeleteAllPills] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  useEffect(() => {
    setTimeout(() => {
      setShowNotif(false);
    }, 3000);
  }, [showNotif]);

  const renderSlideItem = ({item}) => {
    return (
      <View key={item.key} style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.img} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  const onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.setItem('first_time', JSON.stringify(true)).then(() => {
      setShowRealApp(true);
    });
    if (!displayName.trim()) {
      setShowDisplayName(true);
    }
  };
  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <FontAwesomeIcon
          icon={solid('chevron-right')}
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={[styles.buttonCircle, {backgroundColor: 'green'}]}>
        <FontAwesomeIcon
          icon={solid('check')}
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  return splash ? (
    <Splash />
  ) : !showRealApp ? (
    <AppIntroSlider
      renderItem={renderSlideItem}
      data={slides}
      onDone={onDone}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      showSkipButton={true}
      activeDotStyle={{
        backgroundColor: '#000000',
      }}
    />
  ) : (
    <>
      <StatusBar barStyle="light-content" />
      <Modal
        animated
        animationType="slide"
        visible={newPill}
        transparent
        onRequestClose={() => setPillModal(false)}>
        {
          <NewPill
            setPillModal={setPillModal}
            setShowNotif={setShowNotif}
            setMessage={setMessage}
            mainDrive={mainDrive}
            filterData={filterData}
            setFilterData={setFilterData}
          />
        }
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={showDisplayName}
        transparent
        onRequestClose={() => setShowDisplayName(false)}>
        {
          <EnterDisplayName
            displayName={displayName}
            setDisplayName={setDisplayName}
            setShowDisplayName={setShowDisplayName}
            setMessage={setMessage}
            setShowNotif={setShowNotif}
          />
        }
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={settings}
        transparent
        onRequestClose={() => setSettings(false)}>
        {
          <Settings
            setSettings={setSettings}
            setLoading={setLoading}
            setMyPills={setMyPills}
            setMe={setMe}
            setDeleteAllPills={setDeleteAllPills}
            setInfo={setInfo}
          />
        }
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={notifications}
        transparent
        onRequestClose={() => setNotifications(false)}>
        {
          <Notifications
            setNotifications={setNotifications}
            setMyPills={setMyPills}
            notificationData={notificationData}
            pillData={pillData}
            setNewNotification={setNewNotification}
          />
        }
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={me}
        transparent
        onRequestClose={() => setMe(false)}>
        {
          <Me
            setMe={setMe}
            displayName={displayName}
            setDisplayName={setDisplayName}
          />
        }
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={deleteAllPills}
        transparent
        onRequestClose={() => setDeleteAllPills(false)}>
        {
          <DeleteAllPills
            setDeleteAllPills={setDeleteAllPills}
            setFilterData={setFilterData}
            setShowNotif={setShowNotif}
            setMessage={setMessage}
            mainDrive={mainDrive}
          />
        }
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={myPills}
        transparent
        onRequestClose={() => setMyPills(false)}>
        {
          <MyPills
            setMyPills={setMyPills}
            filterData={filterData}
            setShowNotif={setShowNotif}
            setMessage={setMessage}
            mainDrive={mainDrive}
            setFilterData={setFilterData}
            showNotif={showNotif}
            message={message}
          />
        }
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={info}
        transparent
        onRequestClose={() => setInfo(false)}>
        {<Info setInfo={setInfo} />}
      </Modal>

      {loading ? (
        <Loading />
      ) : (
        <ImageBackground
          source={require('../assets/body.png')}
          style={{display: 'flex', flex: 1}}>
          <View style={styles.DateCon}>
            <View style={styles.DateConL}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setShowCalendar(!showCalendar);
                    setLoading(false);
                  }, 150);
                }}
                style={styles.DateMonth}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    marginRight: 5,
                    fontFamily: 'Satoshi-Bold',
                  }}>
                  {d.format('MMM YYYY')}
                </Text>
                {!showCalendar ? (
                  <FontAwesomeIcon icon={solid('caret-down')} color="gray" />
                ) : (
                  <FontAwesomeIcon icon={solid('caret-up')} color="gray" />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={{width: 40}}
                activeOpacity={0.5}
                onPress={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setNotifications(true);
                    setLoading(false);
                  }, 150);
                }}>
                <FontAwesomeIcon
                  icon={regular('bell')}
                  style={{marginLeft: 5}}
                  size={22}
                  color={'black'}
                />
                <Badge
                  value={newNotificationData.length}
                  badgeStyle={{backgroundColor: 'red'}}
                  containerStyle={{
                    position: 'absolute',
                    top: -4,
                    right: 4,
                    display: newNotificationData.length !== 0 ? 'flex' : 'none',
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{width: 40}}
                activeOpacity={0.5}
                onPress={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setSettings(true);
                    setLoading(false);
                  }, 150);
                }}>
                <FontAwesomeIcon
                  icon={solid('sliders')}
                  style={{marginRight: 15}}
                  size={22}
                  color={'black'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{width: 40}}
                activeOpacity={0.5}
                onPress={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setPillModal(true);
                    setLoading(false);
                  }, 150);
                }}>
                <FontAwesomeIcon
                  icon={solid('plus')}
                  style={{marginRight: 15}}
                  size={24}
                  color={'black'}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Divider
            width={0.5}
            style={{marginTop: 10, width: '95%', alignSelf: 'center'}}
          />
          <View>
            <Text style={styles.Header}>Hello {displayName},</Text>
            <Text style={styles.SubHeader}>
              Your medicine schedule for {header}
            </Text>
            <Divider
              width={0.5}
              style={{
                width: '100%',
                alignSelf: 'center',
                marginTop: 15,
              }}
            />
          </View>
          {message !== 'Pills Edit Sucessful! 🥶' &&
            message !== 'Pills have been deleted! 🤯' &&
            showNotif && <NotificationBar text={message} />}
          <SwipeListView
            ListHeaderComponent={() => (
              <View>
                {showCalendar && (
                  <View style={{marginTop: 0, backgroundColor: 'white'}}>
                    <Calendar
                      displayLoadingIndicator
                      // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                      disableAllTouchEventsForDisabledDays={true}
                      style={{backgroundColor: 'transparent'}}
                      theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        arrowColor: 'black',
                        monthTextColor: 'black',
                        indicatorColor: 'black',
                        textDayFontFamily: 'Satoshi-Light',
                        textMonthFontFamily: 'Satoshi-Bold',
                        textDayHeaderFontFamily: 'Satoshi-Light',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16,
                      }}
                      enableSwipeMonths={true}
                      onDayPress={date => {
                        setLoading(true);
                        setTimeout(() => {
                          setDay(
                            moment(date.dateString.toLocaleString()).format(
                              'ddd MMM D YYYY',
                            ),
                          );
                          mainDrive(
                            moment(date.dateString.toLocaleString()).format(
                              'ddd MMM D YYYY',
                            ),
                          );
                          setFullDate(
                            moment(date.dateString.toLocaleString()).format(
                              'dddd MMM D',
                            ),
                          );
                          setSelectedDate(
                            moment(date.dateString.toLocaleString()),
                          );

                          setLoading(false);
                        }, 250);
                      }}
                      collapsable
                      markingType={'period'}
                      markedDates={{
                        [selectedDate.format('YYYY-MM-DD').toString()]: {
                          color: '#2CA6FF',
                          selected: true,
                          startingDay: true,
                          endingDay: true,
                          marked: true,
                          dotColor: '#132342',
                        },
                      }}
                      initialDate={selectedDate.format('YYYY-MM-DD').toString()}
                    />
                  </View>
                )}

                <CalendarStrip
                  scrollable
                  scrollerPaging
                  calendarHeaderStyle={{display: 'none'}}
                  style={{
                    height: 80,
                    paddingTop: 10,
                    paddingBottom: 10,
                    marginBottom: 20,
                  }}
                  dateNumberStyle={{
                    color: 'black',
                    marginTop: 5,
                    fontFamily: 'Satoshi-Bold',
                  }}
                  dateNameStyle={{color: 'black', fontFamily: 'Satoshi-Bold'}}
                  highlightDateNumberStyle={{
                    color: 'black',
                    marginTop: 5,
                  }}
                  highlightDateNameStyle={{color: 'black'}}
                  highlightDateContainerStyle={{
                    borderRadius: 15,
                    backgroundColor: '#2CA6FF',
                  }}
                  iconStyle={{display: 'none'}}
                  selectedDate={selectedDate}
                  onDateSelected={date => {
                    setLoading(true);
                    setTimeout(() => {
                      setDay(date.format('ddd MMM D YYYY'));
                      mainDrive(date.format('ddd MMM D YYYY'));
                      setFullDate(date.format('dddd MMM D'));
                      setSelectedDate(date);
                      setLoading(false);
                    }, 250);
                  }}
                />
                {pillData.length === 0 && <Empty />}
              </View>
            )}
            recalculateHiddenLayout={true}
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}
            bounces
            disableLeftSwipe={fullDate !== d.format('dddd MMM D')}
            disableRightSwipe={true}
            focusable
            closeOnRowBeginSwipe
            closeOnScroll
            bouncesZoom
            scrollEnabled
            useAnimatedList={true}
            style={{paddingTop: 5, paddingBottom: 15}}
            data={pillData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-70}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
          />
        </ImageBackground>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    height: '65%',
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  slide: {
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    color: '#000000',
    fontSize: 32,
    fontFamily: 'Satoshi-Bold',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    bottom: 100,
    margin: 16,
    color: '#000000',
    fontSize: 28,
    fontFamily: 'Satoshi-Regular',
  },

  DateConL: {display: 'flex', flexDirection: 'row'},
  noPills: {
    color: 'gray',
    fontFamily: 'Satoshi-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  DateMonth: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
  DateCon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
  },
  Header: {
    color: 'black',
    fontSize: 23,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Satoshi-Bold',
  },
  SubHeader: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    marginBottom: 0,
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderBottomWidth: 1,
    justifyContent: 'center',
    marginBottom: 7,
  },

  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 150,
    height: 298,
    borderRadius: 15,
  },
  backRightBtnLeft: {
    backgroundColor: '#2584ec',
    right: 15,
  },
  contentContainerStyle: {},
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalItemsContainer: {
    width: 400,
    padding: 16,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
  modalC: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
  modalA: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
});
