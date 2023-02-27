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
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Divider} from 'react-native-elements';

const MyPills = ({setMyPills}) => {
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
          style={{paddingTop: 15}}></ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MyPills;

const styles = StyleSheet.create({});
