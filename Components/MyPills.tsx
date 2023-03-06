import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {regular, solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Divider} from 'react-native-elements';
import Apill from './Apill';
import {demoRemake} from '../demodata';
import moment from 'moment';
import {d} from '../screens/Home';
import NotificationBar from './NotificationBar';

const MyPills = ({
  setMyPills,
  filterData,
  showNotif,
  message,
  setShowNotif,
  setMessage,
  mainDrive,
  setFilterData,
}) => {
  const [active, setActive] = useState<string>('');
  const [data, setData] = useState(filterData);
  useEffect(() => setData(filterData), [filterData]);

  /*   morning: 00:00 to 12:00
  after: 12:01 to 18:00
  evening: 18:01 to 23:59 */

  var morningPills = [];
  var afternoonPills = [];
  var eveningPills = [];
  var completedcircles = [];

  //get their times in a day
  var today = moment(new Date());
  filterData.forEach(element => {
    var end = moment(new Date(element.endDate));
    var daysLeft = end.diff(today, 'days') + 1;

    if (daysLeft <= 0) {
      completedcircles.push(element);
    } else {
      element.times.forEach(ele => {
        if (
          Number(
            ele.replace(':', '') >= 0 && Number(ele.replace(':', '') <= 1200),
          )
        ) {
          morningPills.push(element);
        } else if (
          Number(
            ele.replace(':', '') >= 1201 &&
              Number(ele.replace(':', '') <= 1800),
          )
        ) {
          afternoonPills.push(element);
        } else {
          eveningPills.push(element);
        }
      });
    }
  });

  useEffect(() => {
    switch (active) {
      case 'Morning':
        setData(morningPills);
        break;
      case 'Afternoon':
        setData(afternoonPills);
        break;
      case 'Evening':
        setData(eveningPills);
        break;
      case 'Completed Circles':
        setData(completedcircles);
        break;
      case '':
        setData(filterData);
        break;
      default:
        setData(filterData);
    }
  }, [active]);

  const [currentPill, setCurrentPill] = useState();
  const [index, setIndex] = useState<number>();

  const [pillActive, setPillActive] = useState<boolean>(false);
  function handleActive(name: string) {
    if (name === active) {
      setActive('');
      return;
    }
    setActive(name);
  }

  const PillBlocks = ({props}) => {
    var end = moment(new Date(props.endDate));

    var daysLeft = end.diff(today, 'days') + 1;
    if (daysLeft <= 0) {
      daysLeft = 0;
    }
    return (
      <TouchableOpacity
        onPress={() => {
          setIndex(filterData.indexOf(props));
          setCurrentPill(props);
          setPillActive(true);
        }}
        activeOpacity={0.8}
        style={{
          padding: 16,
          backgroundColor:
            daysLeft <= 0
              ? '#ECECEC'
              : daysLeft <= 5
              ? '#ED1D24'
              : daysLeft <= 15
              ? '#FFAD00'
              : '#132342',
          borderRadius: 15,
          margin: 5,
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon
              icon={solid('pills')}
              size={20}
              style={{marginRight: 5}}
              color={daysLeft <= 0 ? '#000000' : '#ffffff'}
            />
            <Text
              style={{
                fontSize: 28,
                fontFamily: 'Satoshi-Bold',
                color: daysLeft <= 0 ? '#000000' : '#ffffff',
                width: '80%',
              }}>
              {props.name}
            </Text>
          </View>

          <FontAwesomeIcon
            icon={solid('circle-info')}
            size={24}
            color={daysLeft <= 0 ? '#000000' : '#ffffff'}
            style={{
              marginTop: 5,
              marginLeft: 5,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Satoshi-Bold',
            marginTop: 15,
            color: daysLeft <= 0 ? '#000000' : '#ffffff',
          }}>
          Dosage: {props.dosage}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Satoshi-Bold',
            marginTop: 5,
            marginBottom: 15,
            color: daysLeft <= 0 ? '#000000' : '#ffffff',
          }}>
          Days Left: {daysLeft}
        </Text>
      </TouchableOpacity>
    );
  };

  const FilterButtons = props => (
    <TouchableOpacity
      onPress={() => handleActive(props.name)}
      activeOpacity={0.7}
      style={{
        padding: 15,
        backgroundColor: active === props.name ? '#000000' : '#ffffff',
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: props.name === 'Completed Circles' ? 15 : 5,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
      }}>
      <FontAwesomeIcon
        icon={props.icon}
        size={18}
        style={{marginRight: 5}}
        color={
          props.name === 'Completed Circles'
            ? 'green'
            : props.name === active
            ? 'white'
            : 'black'
        }
      />
      <Text
        style={{
          color: active === props.name ? '#ffffff' : '#000000',
          fontSize: 18,
          fontFamily: 'Satoshi-Regular',
          textAlign: 'center',
        }}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
  const Empty = () => (
    <View style={{paddingTop: 15}}>
      <Text style={styles.noPills}>Your Pill Cabinet Is Empty.</Text>
    </View>
  );

  return (
    <>
      {showNotif && <NotificationBar text={message} />}
      <Modal
        animated
        animationType="slide"
        visible={pillActive}
        transparent
        onRequestClose={() => setPillActive(false)}>
        {
          <Apill
            setPillActive={setPillActive}
            data={currentPill}
            setCurrentPill={setCurrentPill}
            setIndex={setIndex}
            index={index}
            setShowNotif={setShowNotif}
            setMessage={setMessage}
            filterData={filterData}
            mainDrive={mainDrive}
            setFilterData={setFilterData}
          />
        }
      </Modal>
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
            paddingTop: 16,
            flex: 1,
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
                marginLeft: 15,
                fontFamily: 'Satoshi-Bold',
              }}>
              My Pills
            </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setMyPills(false)}>
              <FontAwesomeIcon
                icon={solid('xmark')}
                style={{marginRight: 15}}
                size={30}
                color={'black'}
              />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 15}}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: 5,
              }}>
              {/* <TouchableOpacity>Morning</TouchableOpacity>
          <TouchableOpacity>Afternoon</TouchableOpacity>
          <TouchableOpacity>Evening</TouchableOpacity>
          <TouchableOpacity>Completed Cirles</TouchableOpacity> */}
              <FilterButtons name={'Morning'} icon={solid('cloud-sun')} />
              <FilterButtons name={'Afternoon'} icon={regular('sun')} />
              <FilterButtons name={'Evening'} icon={solid('cloud-moon')} />
              <FilterButtons name={'Completed Circles'} icon={solid('check')} />
            </ScrollView>
          </View>
          <Divider
            width={0.5}
            style={{
              width: '100%',
              alignSelf: 'center',
              marginTop: 5,
            }}
          />
          {data.length === 0 ? (
            <Empty />
          ) : (
            <FlatList
              alwaysBounceVertical
              showsVerticalScrollIndicator={false}
              bounces
              bouncesZoom
              style={{paddingTop: 15}}
              data={data}
              renderItem={data => <PillBlocks props={data.item} />}
            />
          )}
        </ImageBackground>
      </View>
    </>
  );
};

export default MyPills;

const styles = StyleSheet.create({
  noPills: {
    color: 'gray',
    fontFamily: 'Satoshi-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
});
