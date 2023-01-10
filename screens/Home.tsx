import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Divider} from 'react-native-elements';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

const Home = () => {
  const date = new Date();
  var d = moment(date);
  d.month(); // 1
  const [showCalendar, setShowCalendar] = useState<Boolean>(false);
  const [selectedDate, setSelectedDate] = useState(date.toISOString());
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};

  const MedicineContainer = props => {
    return (
      <View
        style={{
          height: 250,
          borderRadius: 10,
          backgroundColor: props.bg,
          display: 'flex',
          width: '95%',
          alignSelf: 'center',
          marginTop: 7,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 15,
          }}>
          Name
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: 15,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          Desc
        </Text>
        <Text style={{color: 'black', alignSelf: 'center'}}>Icon</Text>

        <Text
          style={{
            color: 'black',
            position: 'absolute',
            bottom: 15,
            marginLeft: 15,
          }}>
          time
        </Text>
      </View>
    );
  };
  return (
    <ScrollView style={{backgroundColor: 'white', display: 'flex', flex: 1}}>
      <TouchableOpacity onPress={() => setShowCalendar(!showCalendar)}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            marginTop: 20,
            marginLeft: 15,
            fontWeight: 'bold',
          }}>
          {d.format('MMM YYYY')}
        </Text>
      </TouchableOpacity>

      <Divider
        width={2}
        style={{marginTop: 10, width: '95%', alignSelf: 'center'}}
      />
      {showCalendar && (
        <View style={{marginTop: 30}}>
          <Calendar
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
        Hello, User!
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Your medicine for today
      </Text>

      <CalendarStrip
        scrollable
        scrollerPaging
        calendarHeaderStyle={{display: 'none'}}
        style={{height: 100, paddingTop: 20, paddingBottom: 10}}
        dateNumberStyle={{color: 'black', marginTop: 5, fontWeight: 'bold'}}
        dateNameStyle={{color: 'black', fontWeight: 'bold'}}
        highlightDateNumberStyle={{color: 'black', marginTop: 5}}
        highlightDateNameStyle={{color: 'black'}}
        highlightDateContainerStyle={{
          borderRadius: 15,
          backgroundColor: 'blue',
        }}
        iconStyle={{display: 'none'}}
        selectedDate={moment()}
      />

      <View style={{marginTop: 40}}>
        <MedicineContainer bg={'yellow'} />
        <MedicineContainer bg={'green'} />
      </View>
    </ScrollView>
  );
};

export default Home;
