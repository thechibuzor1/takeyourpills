import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Divider} from 'react-native-elements';
import {d} from '../screens/Home';
import moment from 'moment';

const Notifications = ({
  setNotifications,
  setMyPills,
  notificationData,
  pillData,
  setNewNotification,
}) => {
  interface notificationStructure {
    date: string;
    tag: string;
    message: string;
    sub: string | [];
    setMyPills: {setMyPills};
    redirect: boolean;
  }

  const Empty = () => (
    <View style={{paddingTop: 15}}>
      <Text style={styles.noPills}>No New Notification.</Text>
    </View>
  );

  /*  const notificationData: notificationStructure[] = [
    {
      date: 'Sun Mar 5 2023',
      tag: 'almost done',
      message:
        "Hey Chibuzor, your circle is almost done with some pills. Check if you'd like to renew any:",
      sub: 'Phenol H - BE, Nora - BE and 5 more.',
      setMyPills: {setMyPills},
      redirect: true,
    },
    {
      date: 'Thu Mar 1 2023',
      tag: 'missed',
      message: 'Hey, You missed taking your 7:00 pills today:',
      sub: 'Phenol H - BE, Nora - BE and 1 more.',
      setMyPills: {setMyPills},
      redirect: false,
    },
    {
      date: 'Wed Feb 13 2023',
      tag: 'last day',
      message:
        "Hey Chibuzor, today is the your last day taking some pills. Check if you'd like to renew any: ",
      sub: 'Phenol H - BE, Nora - BE and 1 more.',
      setMyPills: {setMyPills},
      redirect: true,
    },
  ]; */

  /*  function generateNotifications() {
    var today = moment(new Date());
    var currentTime = Number(d.format('HH:mm').replace(':', ''));
    filterData.forEach(element => {
      var end = moment(new Date(element.endDate));
      var daysLeft = end.diff(today, 'days') + 1;
      var pillName: [] = [];

      if (daysLeft <= 5 && daysLeft >= 3) {
        pillName.push(element.name + ' ');
        const notif: notificationStructure = {
          date: d.format('ddd MMM D YYYY'),
          tag: 'almost done',
          message:
            "Hey Chibuzor, your circle is almost done with some pills. Check if you'd like to renew any:",
          sub: pillName,
          setMyPills: {setMyPills},
          redirect: true,
        };

        notificationData.unshift(notif);
      } else if (daysLeft === 0) {
        pillName.push(element.name + ' ');
        const notif: notificationStructure = {
          date: d.format('ddd MMM D YYYY'),
          tag: 'last day',
          message:
            "Hey Chibuzor, today is the your last day taking some pills. Check if you'd like to renew any: ",
          sub: pillName,
          setMyPills: {setMyPills},
          redirect: true,
        };

        notificationData.unshift(notif);
      } else if (daysLeft === 1) {
        pillName.push(element.name + ' ');
        const notif: notificationStructure = {
          date: d.format('ddd MMM D YYYY'),
          tag: 'almost done',
          message:
            'Hello Chibuzor, your circle ends in a day with some pills: ',
          sub: pillName,
          setMyPills: {setMyPills},
          redirect: true,
        };

        notificationData.unshift(notif);
      } else if (daysLeft === -1) {
        pillName.push(element.name + ' ');
        const notif: notificationStructure = {
          date: d.format('ddd MMM D YYYY'),
          tag: 'done',
          message: 'Hello Chibuzor, your circle is done with some pills: ',
          sub: pillName,
          setMyPills: {setMyPills},
          redirect: true,
        };

        notificationData.unshift(notif);
      }
    });

    pillData.forEach(element => {
      var dataTime = Number(element.time.replace(':', ''));
      var windowOpen = Number(element.time.replace(':', '')) - 300;
      var windowClosed = Number(element.time.replace(':', '')) + 300;
      var takenCount = 0;
      const pillCount = element.pills.length;
      var pillName: [] = [];

      element.pills.forEach(element => {
        pillName.push(element.name + ' ');
        element.daysTaken.forEach(elem => {
          if (elem.date === d.format('ddd MMM D YYYY')) {
            elem.time.forEach(ti => {
              if (
                Number(ti.replace(':', '')) > windowOpen &&
                Number(ti.replace(':', '')) < windowClosed
              ) {
                takenCount += 1;
              }
            });
          }
        });
      });

      if (
        pillCount !== takenCount &&
        dataTime < currentTime &&
        currentTime >= windowOpen &&
        currentTime <= windowClosed
      ) {
        const notif: notificationStructure = {
          date: d.format('ddd MMM D YYYY'),
          tag: 'missed',
          message: `It's not too late to take the pills you missed by ${element.time}:`,
          sub: pillName,
          setMyPills: {setMyPills},
          redirect: false,
        };
        notificationData.unshift(notif);
      } else if (pillCount !== takenCount && dataTime < currentTime) {
        const notif: notificationStructure = {
          date: d.format('ddd MMM D YYYY'),
          tag: 'missed',
          message: `Hey, You missed taking your ${element.time} pills today:`,
          sub: pillName,
          setMyPills: {setMyPills},
          redirect: false,
        };
        notificationData.unshift(notif);
      }
    });
  }
  generateNotifications(); */

  const NotificationBlocks = ({props}) => (
    <>
      <Text
        style={{
          paddingTop: 15,
          color: 'gray',
          fontSize: 14,
          fontFamily: 'Satoshi-Regular',
          textAlign: 'right',
          paddingBottom: 5,
        }}>
        {props.date !== d.format('ddd MMM D YYYY')
          ? props.date.slice(0, -5)
          : 'Today'}
      </Text>
      <TouchableOpacity
        onPress={() => props.redirect && setMyPills(true)}
        activeOpacity={props.redirect ? 0.7 : 1}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <FontAwesomeIcon
          icon={solid('prescription-bottle')}
          size={30}
          color={
            props.tag === 'almost done'
              ? '#FFAD00'
              : props.tag === 'done'
              ? '#ECECEC'
              : props.tag === 'missed'
              ? '#ED1D24'
              : '#132342'
          }
        />
        <View style={{flex: 1, marginLeft: 15}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,

              fontFamily: 'Satoshi-Bold',
            }}>
            {props.message}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              marginTop: 5,
              fontFamily: 'Satoshi-Regular',
            }}>
            {props.sub}
          </Text>
        </View>
      </TouchableOpacity>
      <Divider
        width={0.5}
        style={{
          width: '100%',
          alignSelf: 'center',
          marginTop: 15,
        }}
      />
    </>
  );

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
          paddingBottom: 0,
          flex: 0.9,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,

            alignItems: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon
              icon={solid('bell')}
              size={20}
              style={{marginRight: 5, marginTop: 5}}
              color={'#000000'}
            />
            <Text
              style={{
                fontSize: 23,
                fontFamily: 'Satoshi-Bold',
                color: '#000000',
              }}>
              Notifications
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setNotifications(false);
              setNewNotification([]);
            }}>
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
        {notificationData.length !== 0 ? (
          <FlatList
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}
            bounces
            bouncesZoom
            data={notificationData}
            renderItem={data => <NotificationBlocks props={data.item} />}
          />
        ) : (
          <Empty />
        )}

        {/*  <ScrollView
         
          style={{}}>
          <NotificationBlocks
            date={'Today'}
            color={'#FFAD00'}
            message={
              "Hey Chibuzor, your circle is almost done with some pills. Check if you'd like to renew any:"
            }
            sub={'Phenol H - BE, Nora - BE and 5 more.'}
          />
          <NotificationBlocks
            setMyPills={setMyPills}
            date={'Today'}
            color={'#ED1D24'}
            message={'Hey, You missed taking your 7:00 pills today:'}
            sub={'Phenol H - BE, Nora - BE and 1 more.'}
          />
          <NotificationBlocks
            setMyPills={setMyPills}
            pilldetails={true}
            date={'Yesterday'}
            color={'#00958A'}
            message={
              "Hey Chibuzor, today is the your last day taking some pills. Check if you'd like to renew any: "
            }
            sub={'Phenol H - BE, Nora - BE and 1 more.'}
          />

          <NotificationBlocks
            setMyPills={setMyPills}
            pilldetails={true}
            date={'May 3rd'}
            color={'#132342'}
            message={'Hello Chibuzor, your circle is done with some pills: '}
            sub={'Nora - BE and 1 more.'}
          />
          <NotificationBlocks
            setMyPills={setMyPills}
            pilldetails={true}
            date={'May 7th'}
            color={'#132342'}
            message={'Hello Chibuzor, your circle is done with some pills: '}
            sub={'Paracetamol'}
          />
          <NotificationBlocks
            setMyPills={setMyPills}
            pilldetails={true}
            date={'March 3rd'}
            color={'#132342'}
            message={'Hello Chibuzor, your circle is done with some pills: '}
            sub={'Trent'}
          />
          <NotificationBlocks
            setMyPills={setMyPills}
            pilldetails={true}
            date={'March 11th'}
            color={'#00958A'}
            message={
              "Hey Chibuzor, today is the your last day taking some pills. Check if you'd like to renew any: "
            }
            sub={'Nora - BE and 1 more.'}
          />
          <NotificationBlocks
            setMyPills={setMyPills}
            pilldetails={true}
            date={'March 11th'}
            color={'#00958A'}
            message={
              "Hey Chibuzor, today is the your last day taking some pills. Check if you'd like to renew any: "
            }
            sub={'Phenol H - BE, Nora - BE and 1 more.'}
          />
          <NotificationBlocks
            setMyPills={setMyPills}
            date={'Jan 20th'}
            color={'#ED1D24'}
            message={'Hey, You missed taking your 7:00 pills today:'}
            sub={'Phenol H - BE, Nora - BE and 1 more.'}
          />
          <NotificationBlocks
            setMyPills={setMyPills}
            date={'Jan 19th'}
            color={'#ED1D24'}
            message={'Hey, You missed taking your 7:00 pills today:'}
            sub={'Phenol H - BE, Nora - BE and 1 more.'}
          />
        </ScrollView> */}
      </ImageBackground>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  noPills: {
    color: 'gray',
    fontFamily: 'Satoshi-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
});
