/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
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
  const date = new Date();
  var d = moment(date);
  d.month(); // 1
  const [pillData, setPillData] = useState(monPills);
  const [day, setDay] = useState(d.format('dddd'));
  const [fullDate, setFullDate] = useState(d.format('dddd MMM D'));
  const [header, setHeader] = useState<string>('today');

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
  /*  const [selectedDate, setSelectedDate] = useState(date.toISOString()); */
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};

  const colors = [
    '#4D4DFF',
    '#E5E1E6',
    '#00AE58',
    '#FFAD00',
    '#FF66CC',
    '#ED1D24',
    '#C724B1',
    '#FFDE00',
    '#00958A',
    '#00C0A3',
    '#26D07C',
    '#fede29',
    '#234df0',
    '#fbd75c',
    '#055a87',
    '#7da19d',
    '#1d9aa9',
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];

  const renderItem = data => (
    <View style={styles.rowFront}>
      <MedicineContainer props={data.item} />
    </View>
  );
  const renderHiddenItem = (data, rowMap) => (
    <>
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}>
          <FontAwesomeIcon
            icon={solid('check')}
            style={{marginRight: 25}}
            size={24}
            color={'black'}
          />
        </TouchableOpacity>
      </View>
    </>
  );

  const MedicineContainer = ({props}) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return (
      <View
        key={props.id}
        style={{
          height: 300,
          borderRadius: 15,
          backgroundColor: color,
          display: 'flex',
          width: '95%',
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 15,
              marginTop: 15,
            }}>
            {props.name}
          </Text>
          <Text
            style={{
              color: 'black',
              marginLeft: 15,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            {props.desc}
          </Text>
        </View>

        <FontAwesomeIcon
          icon={solid('pills')}
          size={50}
          style={{
            alignSelf: 'center',
            bottom: 10,
          }}
          color={'white'}
        />

        <Text
          style={{
            color: 'black',

            bottom: 15,
            marginLeft: 15,
          }}>
          {props.time}
        </Text>
      </View>
    );
  };

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
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            marginRight: 5,
            fontWeight: 'bold',
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
      {showCalendar && (
        <View style={{marginTop: 30, backgroundColor: 'transparent'}}>
          <Calendar
            style={{backgroundColor: 'transparent'}}
            markingType={'multi-dot'}
            markedDates={{
              '2023-01-25': {
                dots: [vacation, massage, workout],
                selected: true,
                selectedColor: 'red',
              },
              '2023-01-26': {dots: [massage, workout], disabled: true},
            }}
          />
        </View>
      )}

      <Text
        style={{
          color: 'black',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
          fontWeight: 'bold',
        }}>
        Hello, Chibuzor!
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Your medicine for {header}
      </Text>

      <CalendarStrip
        scrollable
        scrollerPaging
        calendarHeaderStyle={{display: 'none'}}
        style={{
          height: 150,
          paddingTop: 20,
          paddingBottom: 10,
          marginBottom: 20,
        }}
        dateNumberStyle={{color: 'black', marginTop: 5, fontWeight: 'bold'}}
        dateNameStyle={{color: 'black', fontWeight: 'bold'}}
        highlightDateNumberStyle={{color: 'black', marginTop: 5}}
        highlightDateNameStyle={{color: 'black'}}
        highlightDateContainerStyle={{
          borderRadius: 15,
          backgroundColor: color,
        }}
        iconStyle={{display: 'none'}}
        selectedDate={moment()}
        onDateSelected={date => {
          setDay(date.format('dddd'));
          setFullDate(date.format('dddd MMM D'));
        }}
      />

      <SwipeListView
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
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    width: '100%',
    alignSelf: 'center',
    height: 90,
  },
  backMore: {
    backgroundColor: 'rgba(118, 118, 128, 0.02)',
    right: 225,
  },
  backPin: {
    backgroundColor: 'rgba(118, 118, 128, 0.08)',
    right: 150,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 150,
    height: 300,
    borderRadius: 15,
  },
  backRightBtnLeft: {
    backgroundColor: '#2584ec',
    right: 15,
  },
  backRightBtnRight: {
    backgroundColor: '#ffffff',
    right: 90,
  },
});
