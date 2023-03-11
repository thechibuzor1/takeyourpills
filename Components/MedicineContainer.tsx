import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {d} from '../screens/Home';

import AnimatedLottieView from 'lottie-react-native';

const MedicineContainer = ({props, confetti, setConfetti, day}) => {
  const [taken, setTaken] = useState<string>('NONE');
  /* how many pills are there??  */
  const pillCount = props.pills.length;
  var takenCount = 0;

  var currentTime = Number(d.format('HH:mm').replace(':', ''));
  var windowOpen = Number(props.time.replace(':', '')) - 100;
  var windowClosed = Number(props.time.replace(':', '')) + 100;

  props.pills.forEach(element => {
    element.daysTaken.forEach(elem => {
      if (elem.date === day) {
        elem.time.every(function (element, index) {
          // Do your thing, then:
          if (
            Number(element.replace(':', '')) >= windowOpen &&
            Number(element.replace(':', '')) <= windowClosed
          ) {
            takenCount += 1;
            return false;
          } else return true;
        });
      }
    });
  });

  useEffect(() => {
    if (takenCount === pillCount) {
      setTaken('ALL');
    } else if (takenCount < pillCount && takenCount > 0) {
      setTaken('SOME');
    } else {
      setTaken('NONE');
    }
  }, [takenCount, pillCount]);

  var dataTime = Number(props.time.replace(':', ''));

  /*  const pillColor = pillColors[Math.floor(Math.random() * pillColors.length)];
   */

  const style = StyleSheet.create({
    box: {
      borderRadius: 15,
      backgroundColor:
        new Date(day) > new Date()
          ? '#768692'
          : day !== d.format('ddd MMM D YYYY') && taken == 'ALL'
          ? '#69CA90'
          : day !== d.format('ddd MMM D YYYY') && taken == 'SOME'
          ? '#FFC600'
          : day !== d.format('ddd MMM D YYYY') && taken == 'NONE'
          ? '#ED1D24'
          : day === d.format('ddd MMM D YYYY') && taken == 'ALL'
          ? '#69CA90'
          : day === d.format('ddd MMM D YYYY') && taken == 'SOME'
          ? '#FFC600'
          : currentTime >= windowOpen &&
            currentTime <= windowClosed &&
            taken !== 'ALL'
          ? '#FF7276'
          : dataTime < currentTime
          ? '#ED1D24'
          : dataTime - currentTime < 300
          ? '#F9DD71'
          : dataTime - currentTime > 300 && dataTime - currentTime <= 600
          ? '#132342'
          : /* '#ECECEC' */
            '#A5F2F3',
      display: 'flex',
      width: '95%',
      alignSelf: 'center',
      justifyContent: 'space-between',
      height: props.pills.length * 300,
    },
    textColor: {
      color:
        dataTime - currentTime > 300 && dataTime - currentTime <= 600
          ? 'white'
          : 'black',
    },
  });
  const [active, setActive] = useState(null);

  function handleActive(pill) {
    if (active !== pill.id) {
      setActive(pill.id);

      return;
    }
    setActive(null);
  }

  useEffect(() => {
    setTimeout(() => {
      setConfetti(false);
    }, 1000);
  }, [confetti]);
  return (
    <View style={{...style.box}}>
      {confetti && taken === 'ALL' && (
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
                    dataTime < currentTime
                      ? '#FFFFFF'
                      : dataTime - currentTime > 300 &&
                        dataTime - currentTime <= 600
                      ? '#FF66CC' || '#EF6F3A'
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
  );
};

export default MedicineContainer;

const styles = StyleSheet.create({});
