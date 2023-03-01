import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {regular, solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Divider} from 'react-native-elements';

const Me = ({setMe}) => {
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
          flex: 0.6,
          paddingBottom: 0,
        }}>
        <View
          style={{
            alignSelf: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity>
            <FontAwesomeIcon
              icon={regular('pen-to-square')}
              size={24}
              style={{marginRight: 15}}
              color={'#000000'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMe(false)} activeOpacity={0.5}>
            <FontAwesomeIcon
              icon={solid('xmark')}
              style={{}}
              size={30}
              color={'black'}
            />
          </TouchableOpacity>
        </View>
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
              icon={solid('user')}
              size={22}
              style={{marginRight: 5}}
              color={'#000000'}
            />
            <Text
              style={{
                fontSize: 28,
                fontFamily: 'Satoshi-Bold',
                color: '#000000',
                width: '80%',
              }}>
              Chibuzor
            </Text>
          </View>
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
          showsVerticalScrollIndicator={false}
          style={{paddingTop: 16}}>
          <Text style={styles.infoTxt}>
            Fullname:{' '}
            <Text style={{fontFamily: 'Satoshi-Regular'}}>
              Igbudu Chibuzor Moses{' '}
            </Text>
          </Text>
          <Text style={styles.infoTxt}>
            Date of birth:{' '}
            <Text style={{fontFamily: 'Satoshi-Regular'}}>May 1, 2002</Text>
          </Text>
          <Text style={styles.infoTxt}>
            Age: <Text style={{fontFamily: 'Satoshi-Regular'}}>20</Text>
          </Text>
          <Text style={styles.infoTxt}>
            Gender: <Text style={{fontFamily: 'Satoshi-Regular'}}>Male</Text>
          </Text>
          <Text style={[styles.infoTxt, {marginBottom: 30}]}>
            BMI: <Text style={{fontFamily: 'Satoshi-Regular'}}>28</Text>
          </Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Me;

const styles = StyleSheet.create({
  infoTxt: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Satoshi-Bold',
    marginBottom: 10,
  },
});
