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
import {Calendar} from 'react-native-calendars';
import {Divider, Badge} from 'react-native-elements';
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
  demoRemake,
} from '../demodata';
import NewPill from '../Components/NewPill';
import Settings from '../Components/Settings';
import MedicineContainer from '../Components/MedicineContainer';
import AnimatedLottieView from 'lottie-react-native';
import Notifications from '../Components/Notifications';
import NotificationBar from '../Components/NotificationBar';
import MyPills from '../Components/MyPills';
import Me from '../Components/Me';
import DeleteAllPills from '../Components/DeleteAllPills';
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

  function check(dF: string, dT: string, dC: string) {
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
  const [filterData, setFilterData] = useState(demoRemake);
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

    var mainReturn = [];

    //create pill with times
    listInDurationTimes.forEach(element => {
      const newData = {
        time: element,
        pills: [],
        taken: false,
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
    //set new data
    setPillData(mainReturn);
  }
  /*   const medicineConColor = ['#F9DD71', '#ECECEC', '#132342']; */

  useEffect(() => mainDrive(day), [filterData]);

  d.month(); // 1
  const [day, setDay] = useState(d.format('ddd MMM D YYYY'));
  const [pillData, setPillData] = useState([]);
  const [fullDate, setFullDate] = useState(d.format('dddd MMM D'));
  const [header, setHeader] = useState<string>('today');
  const [selectedDate, setSelectedDate] = useState(moment());

  /*   useEffect(() => {
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
 */

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
      mainDrive(d.format('ddd MMM D YYYY'));
      setSplash(false);
    }, 500);
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
        visible={me}
        transparent
        onRequestClose={() => setMe(false)}>
        {<Me setMe={setMe} />}
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={deleteAllPills}
        transparent
        onRequestClose={() => setDeleteAllPills(false)}>
        {<DeleteAllPills setDeleteAllPills={setDeleteAllPills} />}
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={myPills}
        transparent
        onRequestClose={() => setMyPills(false)}>
        {<MyPills setMyPills={setMyPills} filterData={filterData} />}
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
                  value={5}
                  badgeStyle={{backgroundColor: 'red'}}
                  containerStyle={{
                    position: 'absolute',
                    top: -4,
                    right: 4,
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
