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
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditPills = ({
  setEditPill,
  filterData,
  data,
  index,
  setFilterData,
  mainDrive,
  setMessage,
  setShowNotif,
  setPillActive,
  setCurrentPill,
  setIndex,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [pillName, setPillName] = useState<string>(data?.name);
  const [dosage, setDosage] = useState<string>(data?.dosage);
  const [duration, setDuration] = useState<string>(data?.duration);
  const [pillDesc, setPillDesc] = useState<string>(data?.desc);
  const [instructions, setInstructions] = useState<string>(data?.instructions);
  const [value, setValue] = useState<any>(data?.timesPerDay);
  const [items, setItems] = useState<any>([
    {label: 'Once a day', value: 1},
    {label: 'Twice a day', value: 2},
    {label: 'Three Times a day', value: 3},
  ]);

  const [morningTime, setMorningTime] = useState<string>(data?.times[0]);
  const [isMorning, setMorningVisibility] = useState<boolean>(false);

  const [afternoonTime, setAfternoonTime] = useState<string>('14:00');
  const [isAfternoon, setAfternoonVisibility] = useState<boolean>(false);

  const [eveningTime, setEveningTime] = useState<string>('19:00');
  const [isEvening, setEveningVisibility] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<string>(data?.startDate);
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

    const edittedPill = {
      id: data.id,
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
      daysTaken: data?.daysTaken,
    };

    clonedData[index] = edittedPill;
    AsyncStorage.setItem('pillData', JSON.stringify(clonedData)).then(() => {
      setFilterData(clonedData);
      mainDrive(d.format('ddd MMM D YYYY'));
      setPillName('');
      setPillDesc('');
      setDosage('');
      setInstructions('');
      setEditPill(false);
      setPillActive(false);
      setCurrentPill(null);
      setIndex(null);
      setMessage('Pills Edit Sucessful! 🥶');
      setShowNotif(true);
    });
  }

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
            Edit Pills
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setEditPill(false)}>
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
            Pill Name
          </Text>

          <TextInput
            value={pillName}
            autoFocus
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
              padding: 16,
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
                  setMorningVisibility(false);
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
                  setMorningVisibility(false);
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
                  setEveningVisibility(false);
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
                  setMorningVisibility(false);
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
                  setAfternoonVisibility(false);
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
                  setEveningVisibility(false);
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
            value={instructions}
            onChangeText={text => setInstructions(text)}
            placeholder="Take after a meal"
            placeholderTextColor={'gray'}
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
              borderWidth: 1,
              borderColor: 'gray',
              textAlignVertical: 'top',
              padding: 16,
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
              width: 240,
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
              Save Changes
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default EditPills;

const styles = StyleSheet.create({});
