import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {regular, solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Divider} from 'react-native-elements';
import Apill from './Apill';

const MyPills = ({setMyPills}) => {
  const [active, setActive] = useState<string>('');
  const [currentPill, setCurrentPill] = useState();

  const [pillActive, setPillActive] = useState<boolean>(false);
  function handleActive(name: string) {
    if (name === active) {
      setActive('');
      return;
    }
    setActive(name);
  }

  const PillBlocks = props => (
    <TouchableOpacity
      onPress={() => {
        setCurrentPill(props);
        setPillActive(true);
      }}
      activeOpacity={0.8}
      style={{
        padding: 16,
        backgroundColor: props.color,
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
            color={props.color === '#132342' ? '#ffffff' : '#000000'}
          />
          <Text
            style={{
              fontSize: 28,
              fontFamily: 'Satoshi-Bold',
              color: props.color === '#132342' ? '#ffffff' : '#000000',
              width: '80%',
            }}>
            {props.name}
          </Text>
        </View>

        <FontAwesomeIcon
          icon={solid('circle-info')}
          size={24}
          color={'#ffffff'}
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
          color: props.color === '#132342' ? '#ffffff' : '#000000',
        }}>
        Dosage: {props.dosage}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: 'Satoshi-Bold',
          marginTop: 5,
          marginBottom: 15,
          color: props.color === '#132342' ? '#ffffff' : '#000000',
        }}>
        Days Left: {props.daysLeft}
      </Text>
    </TouchableOpacity>
  );

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

  return (
    <>
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
          <ScrollView
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}
            bounces
            bouncesZoom
            style={{paddingTop: 15}}>
            <PillBlocks
              name={'Nora - BE'}
              color={'#132342'}
              dosage={3}
              daysLeft={15}
            />
            <PillBlocks
              name={'Phenol H - BE'}
              color={'#FF66CC'}
              dosage={2}
              daysLeft={5}
            />
            <PillBlocks
              name={'Paracetamol'}
              color={'#EF6F3A'}
              dosage={3}
              daysLeft={3}
            />
            <PillBlocks
              name={'Nora - BE'}
              color={'#132342'}
              dosage={3}
              daysLeft={15}
            />
            <PillBlocks
              name={'Phillel -B'}
              color={'#EF6F3A'}
              dosage={3}
              daysLeft={4}
            />
            <PillBlocks
              name={'Phillel - BE'}
              color={'#00958A'}
              dosage={3}
              daysLeft={41}
            />
            <PillBlocks
              name={'Phillel - BE'}
              color={'#EF6F3A'}
              dosage={3}
              daysLeft={4}
            />
            <PillBlocks
              name={'Nora - BE'}
              color={'#ED1D24'}
              dosage={3}
              daysLeft={15}
            />
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
};

export default MyPills;

const styles = StyleSheet.create({});
