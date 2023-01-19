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
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Divider} from 'react-native-elements';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';
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

  const medicineConColor = ['#F9DD71', '#ECECEC', '#132342'];
  const date = new Date();
  var d = moment(date);
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
  const color = colors[Math.floor(Math.random() * colors.length)];

  const renderItem = data => (
    <View style={styles.rowFront}>
      <MedicineContainer props={data.item} />
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

  const MedicineContainer = ({props}) => {
    const Medcolor =
      medicineConColor[Math.floor(Math.random() * medicineConColor.length)];
    const pillColor = pillColors[Math.floor(Math.random() * pillColors.length)];

    const style = StyleSheet.create({
      box: {
        borderRadius: 15,
        backgroundColor: props.taken ? '#69CA90' : Medcolor,
        display: 'flex',
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        height: props.pills.length * 300,
      },
      textColor: {
        color: Medcolor === '#132342' ? 'white' : 'black',
      },
    });
    const [active, setActive] = useState(null);
    function handleActive(pill) {
      if (active !== pill) {
        setActive(pill);
        return;
      }
      setActive(null);
    }

    return (
      <View style={{...style.box}}>
        {props.pills.map(pill => (
          <TouchableOpacity
            key={pill.id}
            style={{marginTop: 0}}
            onPress={() => handleActive(pill.id)}>
            {active !== pill.id ? (
              <View>
                <Text
                  style={[
                    {
                      fontSize: 28,
                      fontFamily: 'Satoshi-Bold',
                      marginLeft: 15,
                      marginTop: 15,
                    },
                    style.textColor,
                  ]}>
                  {pill.name}
                </Text>
                <Text
                  style={[
                    {
                      marginLeft: 15,
                      fontSize: 14,
                      fontFamily: 'Satoshi-Bold',
                    },
                    style.textColor,
                  ]}>
                  {pill.desc}
                </Text>
                <FontAwesomeIcon
                  icon={
                    props.pills.length > 1 ? solid('pills') : solid('tablets')
                  }
                  size={50}
                  style={{
                    alignSelf: 'center',
                    marginTop: 60,
                  }}
                  color={pillColor}
                />
              </View>
            ) : (
              <View>
                <Text
                  style={[
                    {
                      fontSize: 28,
                      fontFamily: 'Satoshi-Bold',
                      marginLeft: 15,
                      marginTop: 15,
                    },
                    style.textColor,
                  ]}>
                  {pill.name}
                </Text>
                <Text
                  style={[
                    {
                      marginLeft: 15,
                      fontSize: 14,
                      marginBottom: 15,
                      fontFamily: 'Satoshi-Bold',
                    },
                    style.textColor,
                  ]}>
                  {pill.desc}
                </Text>
                <Text
                  style={[
                    {
                      marginLeft: 15,
                      fontSize: 18,
                      fontFamily: 'Satoshi-Bold',
                      marginBottom: 15,
                    },
                    style.textColor,
                  ]}>
                  Instructions: {pill.instruction}
                </Text>
                <Text
                  style={[
                    {
                      marginLeft: 15,
                      fontSize: 18,
                      fontFamily: 'Satoshi-Bold',
                    },
                    style.textColor,
                  ]}>
                  Dosage: {pill.dosage}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        ))}

        <Text
          style={[
            {
              fontFamily: 'Satoshi-Bold',
              bottom: 15,
              marginLeft: 15,
            },
            style.textColor,
          ]}>
          {moment(`${props.time}`, ['h:m a', 'H:m']).format('H:mm')}
        </Text>
      </View>
    );
  };

  /*   const TickButton = ({props}) => {
    return (
      <>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}>
          <FontAwesomeIcon
            icon={solid('check')}
            style={{marginRight: 25}}
            size={24}
            color={'black'}
          />
        </TouchableOpacity>
      </>
    );
  }; */

  return (
    <ImageBackground
      source={require('../assets/body.png')}
      style={{display: 'flex', flex: 1}}>
      <TouchableOpacity
        onPress={() => setShowCalendar(!showCalendar)}
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 30,
          marginLeft: 15,
          alignContent: 'center',
          alignItems: 'center',
        }}>
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

      <Divider
        width={0.5}
        style={{marginTop: 10, width: '95%', alignSelf: 'center'}}
      />
      <View>
        <ImageBackground source={require('../assets/body.png')}>
          <Text
            style={{
              color: 'black',
              fontSize: 23,
              textAlign: 'center',
              marginTop: 20,
              fontFamily: 'Satoshi-Bold',
            }}>
            Hello, Chibuzor,
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              textAlign: 'center',
              fontFamily: 'Satoshi-Bold',
              marginBottom: 5,
            }}>
            Your medicine schedule for {header}
          </Text>
        </ImageBackground>
      </View>
      <SwipeListView
        ListHeaderComponent={() => (
          <View>
            {showCalendar && (
              <View style={{marginTop: 30, backgroundColor: 'white'}}>
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
                    setDay(
                      moment(date.dateString.toLocaleString()).format('dddd'),
                    );
                    setFullDate(
                      moment(date.dateString.toLocaleString()).format(
                        'dddd MMM D',
                      ),
                    );
                    setSelectedDate(moment(date.dateString.toLocaleString()));
                  }}
                  collapsable
                  markingType={'period'}
                  markedDates={{
                    [selectedDate.format('YYYY-MM-DD').toString()]: {
                      color: color,
                      selected: true,
                      startingDay: true,
                      endingDay: false,
                      marked: true,
                      dotColor: '#132342',
                    },
                    '2023-01-20': {
                      color: color,
                      selected: true,
                      startingDay: false,
                      endingDay: false,
                    },
                    '2023-01-21': {
                      color: color,
                      selected: true,
                      startingDay: false,
                      endingDay: false,
                    },
                    '2023-01-22': {
                      color: color,
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
                height: 100,
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
                backgroundColor: color,
              }}
              iconStyle={{display: 'none'}}
              selectedDate={selectedDate}
              onDateSelected={date => {
                setDay(date.format('dddd'));
                setFullDate(date.format('dddd MMM D'));
                setSelectedDate(date);
              }}
            />
          </View>
        )}
        recalculateHiddenLayout={true}
        alwaysBounceVertical
        showsVerticalScrollIndicator={false}
        bounces
        focusable
        closeOnRowBeginSwipe
        closeOnScroll
        bouncesZoom
        scrollEnabled
        useAnimatedList={true}
        style={{marginTop: 30}}
        data={pillData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-70}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
      />
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
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
});
