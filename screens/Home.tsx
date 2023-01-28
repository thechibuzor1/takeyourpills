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
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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
  /* Check date in duration function */
  var datefrom = '05/05/2013';
  var dateCurr = '05/28/2013';
  var dateTo = '05/22/2013';

  function check() {
    var dateFrom = '02/05/2013';
    /* var dateTo = '02/09/2013'; */
    var dateCheck = '02/07/2013';

    var d1 = datefrom.split('/');
    var d2 = dateTo.split('/');
    var c = dateCurr.split('/');

    var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
    var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
    var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

    console.log(check >= from && check <= to);
  }

  /*   const medicineConColor = ['#F9DD71', '#ECECEC', '#132342']; */
  const date = new Date();
  var d = moment(date);

  function dateDifference(startDate, endDate) {
    return moment(startDate).diff(moment(endDate), 'hours');
  }

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

  const MedicineContainer = ({props}) => {
    var endTime = moment(props.time, 'HH:mm:ss a');
    var timeDiff = dateDifference(d, endTime);
    timeDiff = Math.abs(timeDiff);
    /*  const pillColor = pillColors[Math.floor(Math.random() * pillColors.length)];
     */
    const style = StyleSheet.create({
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
        height: props.pills.length * 300,
      },
      textColor: {
        color: timeDiff > 3 && timeDiff <= 6 ? 'white' : 'black',
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
                  color={
                    timeDiff <= 3
                      ? '#FFFFFF'
                      : timeDiff > 3 && timeDiff <= 6
                      ? '#FF66CC'
                      : '#EF6F3A'
                  }
                />
              </View>
            ) : (
              <View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 15,
                  }}>
                  <Text
                    style={[
                      {
                        fontSize: 28,
                        fontFamily: 'Satoshi-Bold',
                        marginLeft: 15,
                      },
                      style.textColor,
                    ]}>
                    {pill.name}
                  </Text>
                  <TouchableOpacity activeOpacity={0.5}>
                    <FontAwesomeIcon
                      icon={regular('pen-to-square')}
                      style={{marginRight: 15}}
                      size={24}
                      color={timeDiff > 3 && timeDiff <= 6 ? 'white' : 'black'}
                    />
                  </TouchableOpacity>
                </View>

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

  const [newPill, setPillModal] = useState<boolean>(false);
  const [settings, setSettings] = useState<boolean>(false);

  const settingsModal = () => {
    return (
      <View style={styles.modalContainer}>
        <ImageBackground
          style={{
            alignSelf: 'center',
            marginBottom: 5,
          }}
          source={require('../assets/body.png')}>
          <View style={styles.modalItemsContainer}>
            <Text
              style={{
                color: 'gray',
                fontSize: 20,
                fontFamily: 'Satoshi-Bold',
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              ───────
            </Text>
            <TouchableOpacity activeOpacity={0.5} style={styles.modalC}>
              <View style={styles.modalA}>
                <FontAwesomeIcon
                  icon={solid('capsules')}
                  size={20}
                  color={'#2CA6FF'}
                  style={{marginRight: 15, marginLeft: 15}}
                />
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Satoshi-Bold',
                    fontSize: 15,
                  }}>
                  My Pills
                </Text>
              </View>
            </TouchableOpacity>
            <Divider width={0.4} color={'gray'} />
            <TouchableOpacity activeOpacity={0.5} style={styles.modalC}>
              <View style={styles.modalA}>
                <FontAwesomeIcon
                  icon={solid('pen')}
                  size={20}
                  color={'black'}
                  style={{marginRight: 15, marginLeft: 15}}
                />
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Satoshi-Bold',
                    fontSize: 15,
                  }}>
                  Edit My Info
                </Text>
              </View>
            </TouchableOpacity>
            <Divider width={0.4} color={'gray'} />
            <TouchableOpacity activeOpacity={0.5} style={styles.modalC}>
              <View style={styles.modalA}>
                <FontAwesomeIcon
                  icon={solid('trash')}
                  size={20}
                  color={'red'}
                  style={{marginRight: 15, marginLeft: 15}}
                />
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Satoshi-Bold',
                    fontSize: 15,
                  }}>
                  Delete Pill Records
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const pillModalContent = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<any>(1);
    const [items, setItems] = useState<any>([
      {label: 'Once a day', value: 1},
      {label: 'Twice a day', value: 2},
      {label: 'Three Times a day', value: 3},
    ]);

    const [morningTime, setMorningTime] = useState<string>('9:00');
    const [isMorning, setMorningVisibility] = useState<boolean>(false);

    const [afternoonTime, setAfternoonTime] = useState<string>('14:00');
    const [isAfternoon, setAfternoonVisibility] = useState<boolean>(false);

    const [eveningTime, setEveningTime] = useState<string>('20:00');
    const [isEvening, setEveningVisibility] = useState<boolean>(false);

    const [startDate, setStartDate] = useState<string>(d.format('dddd MMM D'));
    const [startDatePicker, setStartDatePicker] = useState<boolean>(false);

    return (
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}>
        <ImageBackground
          source={require('../assets/body.png')}
          style={{
            padding: 16,
          }}>
          <ScrollView
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}
            bounces
            bouncesZoom>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 23,

                  fontFamily: 'Satoshi-Bold',
                }}>
                Add Pills
              </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setPillModal(false)}>
                <FontAwesomeIcon
                  icon={solid('xmark')}
                  style={{marginRight: 15}}
                  size={30}
                  color={'black'}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Satoshi-Bold',
                color: 'black',
              }}>
              Pill Name
            </Text>

            <TextInput
              style={{
                marginTop: 15,
                color: 'black',
                height: 50,
                fontSize: 20,
                fontFamily: 'Satoshi-Bold',
                backgroundColor: '#ffffff',
                width: '85%',
                borderRadius: 15,
                borderWidth: 0.5,
                borderColor: 'gray',
                paddingStart: 16,
              }}
            />

            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Satoshi-Bold',
                color: 'black',
                marginTop: 15,
              }}>
              Pill Description
            </Text>

            <TextInput
              multiline
              style={{
                marginTop: 15,
                color: 'black',
                height: 70,
                fontSize: 14,
                fontFamily: 'Satoshi-Regular',
                backgroundColor: '#ffffff',
                width: '85%',
                borderRadius: 15,
                borderWidth: 0.5,
                borderColor: 'gray',
                textAlignVertical: 'top',
                padding: 8,
              }}
            />

            <Text
              style={{
                color: 'black',
                fontSize: 23,

                marginTop: 20,
                fontFamily: 'Satoshi-Bold',
              }}>
              Dosage
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Satoshi-Bold',
                color: 'black',
              }}>
              How many pills do you need to take at once?
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TextInput
                keyboardType="numeric"
                maxLength={2}
                style={{
                  marginTop: 15,
                  color: 'black',
                  height: 50,
                  fontSize: 23,
                  fontFamily: 'Satoshi-Bold',
                  backgroundColor: '#ffffff',
                  width: '12%',
                  borderRadius: 15,
                  borderWidth: 0.5,
                  borderColor: 'gray',
                  paddingStart: 8,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 23,
                  marginLeft: 15,
                  marginTop: 20,
                  fontFamily: 'Satoshi-Bold',
                }}>
                Pills
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Satoshi-Bold',
                color: 'black',
                marginTop: 15,
              }}>
              How many times do you need to take the pills in a day?
            </Text>

            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              textStyle={{
                fontSize: 14,
                fontFamily: 'Satoshi-Bold',
                color: 'black',
              }}
              placeholder="Select a configuration"
              style={{
                backgroundColor: 'transparent',
                marginTop: 15,
                width: '85%',
                borderRadius: 15,
                borderWidth: 0.5,
                borderColor: 'gray',
              }}
              placeholderStyle={{
                color: 'gray',
                fontFamily: 'Satoshi-Regular',
              }}
              dropDownContainerStyle={{
                backgroundColor: '#ffffff',
                width: '85%',
                borderRadius: 15,
              }}
            />

            <Text
              style={{
                color: 'black',
                fontSize: 23,

                marginTop: 20,
                fontFamily: 'Satoshi-Bold',
              }}>
              Duration
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Satoshi-Bold',
                color: 'black',
              }}>
              How long will you take the pills?
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TextInput
                keyboardType="numeric"
                maxLength={2}
                style={{
                  marginTop: 15,
                  color: 'black',
                  height: 50,
                  fontSize: 23,
                  fontFamily: 'Satoshi-Bold',
                  backgroundColor: '#ffffff',
                  width: '12%',
                  borderRadius: 15,
                  borderWidth: 0.5,
                  borderColor: 'gray',
                  paddingStart: 8,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 23,
                  marginLeft: 15,
                  marginTop: 20,
                  fontFamily: 'Satoshi-Bold',
                }}>
                Days
              </Text>
            </View>

            <Text
              style={{
                color: 'black',
                fontSize: 23,

                marginTop: 20,
                fontFamily: 'Satoshi-Bold',
              }}>
              Time?
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Satoshi-Bold',
                color: 'black',
              }}>
              What time are you taking the pills?
            </Text>
            {value === 1 && (
              <>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 15,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 23,

                      fontFamily: 'Satoshi-Bold',
                    }}>
                    {morningTime}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setMorningVisibility(true)}>
                    <FontAwesomeIcon
                      icon={regular('pen-to-square')}
                      style={{marginLeft: 15}}
                      size={24}
                      color={'black'}
                    />
                  </TouchableOpacity>
                </View>
                <DateTimePickerModal
                  isVisible={isMorning}
                  mode="time"
                  onConfirm={data => {
                    let date = moment(data);
                    setMorningTime(date.format('H:mm'));
                  }}
                  onCancel={() => setMorningVisibility(false)}
                />
              </>
            )}
            {value === 2 && (
              <>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 15,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 23,

                      fontFamily: 'Satoshi-Bold',
                    }}>
                    {morningTime}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setMorningVisibility(true)}>
                    <FontAwesomeIcon
                      icon={regular('pen-to-square')}
                      style={{marginLeft: 15}}
                      size={24}
                      color={'black'}
                    />
                  </TouchableOpacity>
                </View>
                <DateTimePickerModal
                  isVisible={isMorning}
                  mode="time"
                  onConfirm={data => {
                    let date = moment(data);
                    setMorningTime(date.format('H:mm'));
                  }}
                  onCancel={() => setMorningVisibility(false)}
                />

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 15,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 23,
                      fontFamily: 'Satoshi-Bold',
                    }}>
                    {eveningTime}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setEveningVisibility(true)}>
                    <FontAwesomeIcon
                      icon={regular('pen-to-square')}
                      style={{marginLeft: 15}}
                      size={24}
                      color={'black'}
                    />
                  </TouchableOpacity>
                </View>
                <DateTimePickerModal
                  isVisible={isEvening}
                  mode="time"
                  onConfirm={data => {
                    let date = moment(data);
                    setEveningTime(date.format('H:mm'));
                  }}
                  onCancel={() => setEveningVisibility(false)}
                />
              </>
            )}
            {value === 3 && (
              <>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 15,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 23,

                      fontFamily: 'Satoshi-Bold',
                    }}>
                    {morningTime}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setMorningVisibility(true)}>
                    <FontAwesomeIcon
                      icon={regular('pen-to-square')}
                      style={{marginLeft: 15}}
                      size={24}
                      color={'black'}
                    />
                  </TouchableOpacity>
                </View>
                <DateTimePickerModal
                  isVisible={isMorning}
                  mode="time"
                  onConfirm={data => {
                    let date = moment(data);
                    setMorningTime(date.format('H:mm'));
                  }}
                  onCancel={() => setMorningVisibility(false)}
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 15,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 23,

                      fontFamily: 'Satoshi-Bold',
                    }}>
                    {afternoonTime}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setAfternoonVisibility(true)}>
                    <FontAwesomeIcon
                      icon={regular('pen-to-square')}
                      style={{marginLeft: 15}}
                      size={24}
                      color={'black'}
                    />
                  </TouchableOpacity>
                </View>
                <DateTimePickerModal
                  isVisible={isAfternoon}
                  mode="time"
                  onConfirm={data => {
                    let date = moment(data);
                    setAfternoonTime(date.format('H:mm'));
                  }}
                  onCancel={() => setAfternoonVisibility(false)}
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 15,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 23,

                      fontFamily: 'Satoshi-Bold',
                    }}>
                    {eveningTime}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setEveningVisibility(true)}>
                    <FontAwesomeIcon
                      icon={regular('pen-to-square')}
                      style={{marginLeft: 15}}
                      size={24}
                      color={'black'}
                    />
                  </TouchableOpacity>
                </View>
                <DateTimePickerModal
                  isVisible={isEvening}
                  mode="time"
                  onConfirm={data => {
                    let date = moment(data);
                    setEveningTime(date.format('H:mm'));
                  }}
                  onCancel={() => setEveningVisibility(false)}
                />
              </>
            )}

            <Text
              style={{
                color: 'black',
                fontSize: 23,

                marginTop: 20,
                fontFamily: 'Satoshi-Bold',
              }}>
              Start Date?
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Satoshi-Bold',
                color: 'black',
              }}>
              When will you start taking the pills?
            </Text>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 23,

                  fontFamily: 'Satoshi-Bold',
                }}>
                {startDate}
              </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setStartDatePicker(true)}>
                <FontAwesomeIcon
                  icon={regular('pen-to-square')}
                  style={{marginLeft: 15}}
                  size={24}
                  color={'black'}
                />
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={startDatePicker}
              mode="date"
              minimumDate={new Date()}
              onConfirm={data => {
                let date = moment(data);
                setStartDate(date.format('dddd MMM D'));
              }}
              onCancel={() => setStartDatePicker(false)}
            />

            <Text
              style={{
                color: 'black',
                fontSize: 23,

                marginTop: 20,
                fontFamily: 'Satoshi-Bold',
              }}>
              Instructions?
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Satoshi-Bold',
                color: 'black',
              }}>
              You can add intructions here
            </Text>

            <TextInput
              multiline={true}
              style={{
                marginTop: 15,
                color: 'black',
                height: 90,
                fontSize: 14,
                fontFamily: 'Satoshi-Regular',
                backgroundColor: '#ffffff',
                width: '85%',
                borderRadius: 15,
                borderWidth: 0.5,
                borderColor: 'gray',
                textAlignVertical: 'top',
                padding: 8,
              }}
            />

            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                display: 'flex',
                alignSelf: 'center',
                flexDirection: 'row',
                height: 45,
                width: 140,
                backgroundColor: '#2CA6FF',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
                borderRadius: 15,
              }}>
              <FontAwesomeIcon
                icon={solid('check')}
                style={{marginRight: 5}}
                size={20}
                color={'white'}
              />
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 20,
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontFamily: 'Satoshi-Bold',
                }}>
                Add Pills
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../assets/body.png')}
        style={{display: 'flex', flex: 1}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setShowCalendar(!showCalendar)}
            style={{
              display: 'flex',
              flexDirection: 'row',

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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setSettings(true)}>
              <FontAwesomeIcon
                icon={solid('sliders')}
                style={{marginRight: 15}}
                size={22}
                color={'black'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setPillModal(true)}>
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
                  backgroundColor: '#2CA6FF',
                }}
                iconStyle={{display: 'none'}}
                selectedDate={selectedDate}
                onDateSelected={date => {
                  setDay(date.format('dddd'));
                  setFullDate(date.format('dddd MMM D'));
                  setSelectedDate(date);
                }}
              />
              <Modal
                animated
                animationType="slide"
                visible={newPill}
                transparent
                onRequestClose={() => setPillModal(false)}>
                {pillModalContent()}
              </Modal>
              <Modal
                animated
                animationType="slide"
                visible={settings}
                transparent
                onRequestClose={() => setSettings(false)}>
                {settingsModal()}
              </Modal>
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
    </>
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
