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
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro';
import {d, dateDifference} from '../screens/Home';
import EditPills from './EditPills';
import AnimatedLottieView from 'lottie-react-native';

const MedicineContainer = ({
  props,
  pillDataX,
  setPillDataX,
  index,
  confetti,
  setConfetti,
  setShowNotif,
  setMessage,
}) => {
  const [editPill, setEditPill] = useState<boolean>(false);
  const [pillData, setPillData] = useState(null);

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
    if (active !== pill.id) {
      setActive(pill.id);
      setPillData(pill);

      return;
    }
    setActive(null);
    setPillData(null);
  }

  useEffect(() => {
    setTimeout(() => {
      setConfetti(false);
    }, 500);
  }, [confetti]);
  return (
    <>
      <Modal
        animated
        animationType="slide"
        visible={editPill}
        transparent
        onRequestClose={() => setEditPill(false)}>
        {
          <EditPills
            setEditPill={setEditPill}
            pillData={pillData}
            pillDataX={pillDataX}
            setPillDataX={setPillDataX}
            index={index}
            setShowNotif={setShowNotif}
            setMessage={setMessage}
          />
        }
      </Modal>
      <View style={{...style.box}}>
        {confetti && props.taken && (
          <AnimatedLottieView
            style={{height: 200, position: 'absolute', right: 0, top: '25%'}}
            source={require('../assets/confetti.json')}
            autoPlay
            speed={2}
          />
        )}

        {props.pills.map(pill => {
          return (
            <TouchableOpacity
              key={pill.id}
              style={{marginTop: 0}}
              onPress={() => handleActive(pill)}
              activeOpacity={0.7}>
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
                   {/*  <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => setEditPill(true)}>
                      <FontAwesomeIcon
                        icon={regular('pen-to-square')}
                        style={{marginRight: 15}}
                        size={24}
                        color={
                          timeDiff > 3 && timeDiff <= 6 ? 'white' : 'black'
                        }
                      />
                    </TouchableOpacity> */}
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
                    Instructions: {pill.instructions}
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
          );
        })}

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
    </>
  );
};

export default MedicineContainer;

const styles = StyleSheet.create({});
