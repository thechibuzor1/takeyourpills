import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Divider} from 'react-native-elements';

const NotificationBlocks = props => (
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
      {props.date}
    </Text>
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <FontAwesomeIcon
        icon={solid('prescription-bottle')}
        size={30}
        color={props.color}
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

const Notifications = ({setNotifications}) => {
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
            onPress={() => setNotifications(false)}>
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
            date={'Today'}
            color={'#ED1D24'}
            message={'Hey, You missed taking your 7:00 pills today:'}
            sub={'Phenol H - BE, Nora - BE and 1 more.'}
          />
          <NotificationBlocks
            date={'Yesterday'}
            color={'#00958A'}
            message={
              "Hey Chibuzor, today is the your last day taking some pills. Check if you'd like to renew any: "
            }
            sub={'Phenol H - BE, Nora - BE and 1 more.'}
          />

          <NotificationBlocks
            date={'May 3rd'}
            color={'#132342'}
            message={'Hello Chibuzor, your circle is done with some pills: '}
            sub={'Nora - BE and 1 more.'}
          />
          <NotificationBlocks
            date={'May 7th'}
            color={'#132342'}
            message={'Hello Chibuzor, your circle is done with some pills: '}
            sub={'Paracetamol'}
          />
          <NotificationBlocks
            date={'March 3rd'}
            color={'#132342'}
            message={'Hello Chibuzor, your circle is done with some pills: '}
            sub={'Trent'}
          />
          <NotificationBlocks
            date={'March 11th'}
            color={'#00958A'}
            message={
              "Hey Chibuzor, today is the your last day taking some pills. Check if you'd like to renew any: "
            }
            sub={'Nora - BE and 1 more.'}
          />
          <NotificationBlocks
            date={'March 11th'}
            color={'#00958A'}
            message={
              "Hey Chibuzor, today is the your last day taking some pills. Check if you'd like to renew any: "
            }
            sub={'Phenol H - BE, Nora - BE and 1 more.'}
          />
          <NotificationBlocks
            date={'Jan 20th'}
            color={'#ED1D24'}
            message={'Hey, You missed taking your 7:00 pills today:'}
            sub={'Phenol H - BE, Nora - BE and 1 more.'}
          />
          <NotificationBlocks
            date={'Jan 19th'}
            color={'#ED1D24'}
            message={'Hey, You missed taking your 7:00 pills today:'}
            sub={'Phenol H - BE, Nora - BE and 1 more.'}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
