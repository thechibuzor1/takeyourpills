import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {d} from '../screens/Home';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

const HiddenItem = ({props, filterData, setFilterData, mainDrive}) => {
  const [taken, setTaken] = useState<boolean>(false);
  const pillCount = props.pills.length;
  var takenCount = 0;

  var currentTime = Number(d.format('HH:mm').replace(':', ''));
  var windowOpen = Number(props.time.replace(':', '')) - 100;
  var windowClosed = Number(props.time.replace(':', '')) + 100;

  props.pills.forEach(element => {
    element.daysTaken.forEach(elem => {
      if (elem.date === d.format('ddd MMM D YYYY')) {
        elem.time.forEach(i => {
          if (
            Number(i.replace(':', '')) > windowOpen &&
            Number(i.replace(':', '')) < windowClosed
          ) {
            takenCount += 1;
          }
        });
      }
    });
  });

  useEffect(() => {
    if (takenCount === pillCount) {
      setTaken(true);
    } else {
      setTaken(false);
    }
  }, [takenCount, pillCount]);

  function handleTaken() {
    const clonedData = [...filterData];
    var pills = props.pills;

    clonedData.forEach(ele => {
      pills.forEach(element => {
        if (element.id === ele.id) {
          if (ele.daysTaken.length === 0) {
            ele.daysTaken.push({
              date: d.format('ddd MMM D YYYY'),
              time: [d.format('HH:mm')],
            });
          } else {
            ele.daysTaken.forEach(elem => {
              if (elem.date === d.format('ddd MMM D YYYY')) {
                elem.time.push(d.format('HH:mm'));
              } else {
                ele.daysTaken.push({
                  date: d.format('ddd MMM D YYYY'),
                  time: [d.format('HH:mm')],
                });
              }
            });
          }
        }
      });
    });

    setFilterData(clonedData);
    mainDrive(d.format('ddd MMM D YYYY'));
  }

  /* console.log(diff(props.time, d.format('HH:mm'))); */

  /*  console.log(Number(d.format('HH:mm').replace(':', ''))); */

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
        height: 300 * props.pills.length,
        borderRadius: 15,
        backgroundColor: '#2CA6FF',
        marginRight: 15,
        display:
          currentTime >= windowOpen && currentTime <= windowClosed && !taken
            ? 'flex'
            : 'none',
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

export default HiddenItem;

const styles = StyleSheet.create({});
