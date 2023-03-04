import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Alert,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useEffect, useMemo, useState, useRef} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro';
import {d} from '../screens/Home';
import {Divider} from 'react-native-elements';

const NewPill = ({
  setPillModal,
  setShowNotif,
  setMessage,
  mainDrive,
  filterData,
  setFilterData,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [pillName, setPillName] = useState<string>('');
  const [pillDesc, setPillDesc] = useState<string>('');
  const [dosage, setDosage] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [instructions, setInstructions] = useState<string>('');

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

  const [startDate, setStartDate] = useState<string>(
    d.format('ddd MMM D YYYY'),
  );
  const [startDatePicker, setStartDatePicker] = useState<boolean>(false);

  function handleSave() {
    if (!pillName.trim() || !dosage.trim() || !duration.trim()) {
      Alert.alert(
        'Umm... 😑 ',
        'Please fill all fields with "*" at the end... 😐',
      );
      return;
    }
    const clonedData = [...filterData];
    var endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + Number(duration));

    const newPills = {
      id: clonedData.length + 1,
      name: pillName,
      desc: pillDesc,
      dosage: dosage,
      duration: duration,
      timesPerDay: value,
      times:
        value === 1
          ? [morningTime]
          : value === 2
          ? [morningTime, afternoonTime]
          : [morningTime, afternoonTime, eveningTime],
      startDate: startDate,
      endDate: moment(endDate).format('ddd MMM D YYYY'),
      instructions: instructions,
    };

    clonedData.push(newPills);
    setFilterData(clonedData);
    mainDrive(d.format('ddd MMM D YYYY'));

    setPillName('');
    setPillDesc('');
    setDosage('');
    setInstructions('');
    setPillModal(false);
    setMessage('New Pills Added! 🥵');
    setShowNotif(true);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
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
            flex: 0.9,
            paddingBottom: 0,
          }}>
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
          <Divider
            width={0.5}
            style={{
              width: '100%',
              alignSelf: 'center',
              marginTop: 15,
            }}
          />
          <ScrollView
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}
            bounces
            bouncesZoom
            style={{paddingTop: 15}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Satoshi-Bold',
                color: 'black',
              }}>
              Pill Name *
            </Text>

            <TextInput
              value={pillName}
              autoFocus
              placeholder="example: Nora - BE"
              placeholderTextColor={'gray'}
              onChangeText={text => setPillName(text)}
              style={{
                marginTop: 15,
                color: 'black',
                height: 50,
                fontSize: 20,
                fontFamily: 'Satoshi-Bold',
                backgroundColor: '#ffffff',
                width: '85%',
                borderRadius: 15,
                borderWidth: 1,
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
              value={pillDesc}
              placeholder="example: Norenthindrone - 0.35mg"
              placeholderTextColor={'gray'}
              onChangeText={text => setPillDesc(text)}
              style={{
                marginTop: 15,
                color: 'black',
                height: 70,
                fontSize: 14,
                fontFamily: 'Satoshi-Regular',
                backgroundColor: '#ffffff',
                width: '85%',
                borderRadius: 15,
                borderWidth: 1,
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
              Dosage *
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
                value={dosage}
                onChangeText={text => setDosage(text)}
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
                  borderWidth: 1,
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
                borderWidth: 1,
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
              Duration *
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
                value={duration}
                onChangeText={text => setDuration(text)}
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
                  borderWidth: 1,
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
              Time? *
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
              Start Date? *
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
                setStartDate(date.format('ddd MMM D YYYY'));
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
              value={instructions}
              onChangeText={text => setInstructions(text)}
              style={{
                marginTop: 15,
                color: 'black',
                height: 90,
                fontSize: 14,
                fontFamily: 'Satoshi-Regular',
                backgroundColor: '#ffffff',
                width: '85%',
                borderRadius: 15,
                borderWidth: 1,
                borderColor: 'gray',
                textAlignVertical: 'top',
                padding: 8,
              }}
            />

            <TouchableOpacity
              onPress={handleSave}
              activeOpacity={0.5}
              style={{
                display: 'flex',
                alignSelf: 'center',
                flexDirection: 'row',
                height: 50,
                width: 140,
                backgroundColor: '#2CA6FF',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
                marginBottom: 30,
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
    </>
  );
};

export default NewPill;

const styles = StyleSheet.create({});
