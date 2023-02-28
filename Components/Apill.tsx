import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {Divider} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

const Apill = ({setPillActive, data, setCurrentPill}) => {
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
              icon={solid('pills')}
              size={20}
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
              {data.name}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setPillActive(false);
              setCurrentPill(null);
            }}
            activeOpacity={0.5}>
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
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            justifyContent: 'flex-end',
          }}>
          <AnimatedLottieView
            autoSize={true}
            loop={true}
            style={{height: '85%', width: '25%'}}
            source={require('../assets/bubbles.json')}
            autoPlay
            speed={2}
          />
        </View>
        <View style={{paddingTop: 16}}>
          <Text style={styles.infoTxt}>
            Pill name:{' '}
            <Text style={{fontFamily: 'Satoshi-Regular'}}>{data.name} </Text>
          </Text>
          <Text style={styles.infoTxt}>
            Description:{' '}
            <Text style={{fontFamily: 'Satoshi-Regular'}}>{data.desc} </Text>
          </Text>
          <Text style={styles.infoTxt}>
            Dosage:{' '}
            <Text style={{fontFamily: 'Satoshi-Regular'}}>{data.dosage} </Text>
          </Text>
          <Text style={styles.infoTxt}>
            Duration:{' '}
            <Text style={{fontFamily: 'Satoshi-Regular'}}>{data.duration}</Text>
          </Text>
          <Text style={styles.infoTxt}>
            Time in a day:{' '}
            <Text style={{fontFamily: 'Satoshi-Regular'}}>
              {data.timesPerDay}
            </Text>
          </Text>
          <Text style={styles.infoTxt}>
            Times:{' '}
            <Text style={{fontFamily: 'Satoshi-Regular'}}>{data.times} </Text>
          </Text>
          <Text style={styles.infoTxt}>
            Start date:{' '}
            <Text style={{fontFamily: 'Satoshi-Regular'}}>
              {data.startDate}
            </Text>
          </Text>
          <Text style={styles.infoTxt}>
            End date:{' '}
            <Text style={{fontFamily: 'Satoshi-Regular'}}>{data.endDate} </Text>
          </Text>
          <Text style={styles.infoTxt}>
            Instructions:{' '}
            <Text style={{fontFamily: 'Satoshi-Regular'}}>
              {data.instructions}
            </Text>
          </Text>
          <Text style={styles.infoTxt}>
            Days Left:{' '}
            <Text style={{fontFamily: 'Satoshi-Regular'}}>{data.daysLeft}</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Apill;

const styles = StyleSheet.create({
  infoTxt: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Satoshi-Bold',
    marginBottom: 10,
  },
});
