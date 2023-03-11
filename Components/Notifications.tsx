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
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Divider} from 'react-native-elements';
import {d} from '../screens/Home';

const Notifications = ({
  setNotifications,
  setMyPills,
  notificationData,
  pillData,
  setNewNotification,
}) => {
  const Empty = () => (
    <View style={{paddingTop: 15}}>
      <Text style={styles.noPills}>No New Notification.</Text>
    </View>
  );

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
