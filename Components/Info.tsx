import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

const Info = ({setInfo}) => {
  interface info {
    color: string;
    meaning: string;
  }

  const infoList: info[] = [
    {
      color: '#768692',
      meaning: 'The Pills are for a future date.',
    },
    {
      color: '#69CA90',
      meaning: 'All Pills for that time have been taken.',
    },
    {
      color: '#FFC600',
      meaning: 'Some but not all Pills for that time have been taken.',
    },
    {
      color: '#FF7276',
      meaning: 'The Window is open to take the pills for that time.',
    },
    {
      color: '#ED1D24',
      meaning: 'The pills for that time were missed.',
    },
    {
      color: '#F9DD71',
      meaning: 'in less than 3 hours you need to take the pills.',
    },
    {
      color: '#132342',
      meaning: 'In 3-6 hours, you need to take the pills.',
    },
    {
      color: '#A5F2F3',
      meaning: 'The pills are due in > 6 hours.',
    },
  ];

  const InfoBlocks = ({props}) => (
    <View
      style={{
        height: 300,
        margin: 15,
        borderRadius: 15,
        backgroundColor: props.color,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          color:
            props.color === '#132342' || props.color === '#768692'
              ? '#ffffff'
              : '#000000',
          fontSize: 22,
          marginLeft: 15,
          fontFamily: 'Satoshi-Bold',
        }}>
        {props.meaning}
      </Text>
    </View>
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
          paddingTop: 16,
          flex: 1,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            marginBottom: 15,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              marginLeft: 15,
              fontFamily: 'Satoshi-Bold',
              flex: 1,
            }}>
            But like... WHAT DO THESE COLORS EVEN MEAN??😱
          </Text>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setInfo(false)}>
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
            marginTop: 5,
          }}
        />

        <ScrollView style={{paddingTop: 15}}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesomeIcon
              icon={solid('exclamation')}
              style={{marginLeft: 5}}
              size={30}
              color={'red'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'Satoshi-Bold',
                flex: 1,
                marginRight: 5,
              }}>
              YOU HAVE TO TAKE THE PILLS WITHIN AN HOUR BEFORE AND AN HOUR AFTER
              THE SPECIFIED TIME.{'\n'}
              {'\n'}
              For instance, if you have pills scheduled for 9am, you can take
              them ONLY between 8am and 10am.
            </Text>
          </View>
          {infoList.map(info => (
            <InfoBlocks key={info.color} props={info} />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
