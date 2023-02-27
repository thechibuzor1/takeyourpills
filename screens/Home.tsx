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
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useEffect, useMemo, useState, useRef} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Divider} from 'react-native-elements';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro';
import {SwipeListView} from 'react-native-swipe-list-view';

import {
  monPills,
  tuePills,
  wedPills,
  thuPills,
  friPills,
  satPills,
  sunPills,
} from '../demodata';
import NewPill from '../Components/NewPill';
import Settings from '../Components/Settings';
import MedicineContainer from '../Components/MedicineContainer';
import AnimatedLottieView from 'lottie-react-native';
import Notifications from '../Components/Notifications';
import NotificationBar from '../Components/NotificationBar';
import MyPills from '../Components/MyPills';
export function dateDifference(startDate, endDate) {
  return moment(startDate).diff(moment(endDate), 'hours');
}
const date = new Date();
export var d = moment(date);
const Home = () => {
  const colors = [
    '#4D4DFF',
    '#E5E1E6',

    '#FFAD00', //orange. pill almost late to take
    '#ED1D24', //red. pill is late to be taken

    '#00958A', // dark green
    '#00C0A3', // green
    '#26D07C', //green. use it to show pill has been taken
    '#fede29', //yellow. approaching orange

    '#055a87', //dark blue
    '#7da19d', //gray
    '#1d9aa9', //light dark blue lol
  ];
  /* Check date in duration function */
  /*   var datefrom = '05/05/2013';
  var dateCurr = '05/28/2013';
  var dateTo = '05/22/2013'; */

  /*   function check() {
    var dateFrom = '02/05/2013';
    var dateTo = '02/09/2013';
    var dateCheck = '02/07/2013';

    var d1 = datefrom.split('/');
    var d2 = dateTo.split('/');
    var c = dateCurr.split('/');

    var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
    var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
    var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

    console.log(check >= from && check <= to);
  } */

  /*   const medicineConColor = ['#F9DD71', '#ECECEC', '#132342']; */

  d.month(); // 1
  const [pillData, setPillData] = useState(monPills);
  const [day, setDay] = useState(d.format('dddd'));
  const [fullDate, setFullDate] = useState(d.format('dddd MMM D'));
  const [header, setHeader] = useState<string>('today');
  const [selectedDate, setSelectedDate] = useState(moment());

  useEffect(() => {
    switch (day) {
      case 'Monday':
        setPillData(monPills);
        break;
      case 'Tuesday':
        setPillData(tuePills);
        break;
      case 'Wednesday':
        setPillData(wedPills);
        break;
      case 'Thursday':
        setPillData(thuPills);
        break;
      case 'Friday':
        setPillData(friPills);
        break;
      case 'Saturday':
        setPillData(satPills);
        break;
      case 'Sunday':
        setPillData(sunPills);
        break;
      default:
        setPillData([]);
    }
  }, [day]);
  useEffect(() => {
    if (fullDate === d.format('dddd MMM D')) {
      setHeader('today');
    } else {
      setHeader(fullDate);
    }
  }, [fullDate]);

  const [showCalendar, setShowCalendar] = useState<Boolean>(false);

  const pillColors = ['#FF66CC', '#EF6F3A', '#FFFFFF'];
  /*   const color = colors[Math.floor(Math.random() * colors.length)]; */
  const [confetti, setConfetti] = useState<boolean>(false);
  const renderItem = data => (
    <View style={styles.rowFront}>
      <MedicineContainer
        props={data.item}
        pillDataX={pillData}
        setPillDataX={setPillData}
        index={data.index}
        confetti={confetti}
        setConfetti={setConfetti}
        setShowNotif={setShowNotif}
        setMessage={setMessage}
      />
    </View>
  );
  const renderHiddenItem = (data, rowMap) => {
    function handleTaken() {
      const newPillData = [...pillData];
      const newData = {
        time: data.item.time,
        pills: data.item.pills,
        taken: true,
      };
      newPillData[data.index] = newData;
      setPillData(newPillData);
      setConfetti(true);
    }

    return (
      <TouchableOpacity
        /*  onPress={handleAnimation} */
        onPress={handleTaken}
        activeOpacity={0.8}
        style={{
          alignSelf: 'flex-end',
          justifyContent: 'center',
          alignItems: 'flex-end',
          width: 150,
          height: 300 * data.item.pills.length,
          borderRadius: 15,
          backgroundColor: '#2CA6FF',
          marginRight: 15,
          display: data.item.taken ? 'none' : 'flex',
        }}>
        <FontAwesomeIcon
          icon={solid('check')}
          style={{marginRight: 25}}
          size={24}
          color={'white'}
        />
      </TouchableOpacity>
    );
  };

  const [newPill, setPillModal] = useState<boolean>(false);
  const [settings, setSettings] = useState<boolean>(false);
  const [myPills, setMyPills] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [splash, setSplash] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<boolean>(false);

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

  /*  interface pillModalData {
    edit: boolean;
    data: {};
  }
*/
  /*  const addPillModalData = {
    edit: false,
    data: {},
  }; */

  /*  make shift splash screen  */
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 500);
  }, []);

  const [showNotif, setShowNotif] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  useEffect(() => {
    setTimeout(() => {
      setShowNotif(false);
    }, 3000);
  }, [showNotif]);

  return splash ? (
    <Splash />
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
            pillData={pillData}
            setPillData={setPillData}
            setShowNotif={setShowNotif}
            setMessage={setMessage}
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
          />
        }
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={notifications}
        transparent
        onRequestClose={() => setNotifications(false)}>
        {<Notifications setNotifications={setNotifications} />}
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={myPills}
        transparent
        onRequestClose={() => setMyPills(false)}>
        {<MyPills setMyPills={setMyPills} />}
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
            <Text style={styles.Header}>Hello Chibuzor,</Text>
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
          {showNotif && <NotificationBar text={message} />}
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
                              'dddd',
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
                          endingDay: false,
                          marked: true,
                          dotColor: '#132342',
                        },
                        '2023-01-20': {
                          color: '#2CA6FF',
                          selected: true,
                          startingDay: false,
                          endingDay: false,
                        },
                        '2023-01-21': {
                          color: '#2CA6FF',
                          selected: true,
                          startingDay: false,
                          endingDay: false,
                        },
                        '2023-01-22': {
                          color: '#2CA6FF',
                          selected: true,
                          startingDay: false,
                          endingDay: true,
                        },
                      }}
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
                      setDay(date.format('dddd'));
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
            disableRightSwipe={fullDate !== d.format('dddd MMM D')}
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
