import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Divider} from 'react-native-elements';
import {solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro';

const Settings = ({
  setSettings,
  setMyPills,
  setLoading,
  setMe,
  setDeleteAllPills,
  setInfo,
}) => {
  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity
        onPress={() => {
          setSettings(false);
          setInfo(true);
        }}
        style={{position: 'absolute', top: 40, right: 40}}
        activeOpacity={0.5}>
        <FontAwesomeIcon
          icon={regular('circle-question')}
          size={30}
          color={'white'}
        />
      </TouchableOpacity>

      <ImageBackground
        style={{
          alignSelf: 'center',
          marginBottom: 5,
        }}
        source={require('../assets/body.png')}>
        <View style={styles.modalItemsContainer}>
          <Text
            style={{
              color: 'gray',
              fontSize: 20,
              fontFamily: 'Satoshi-Bold',
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            ───────
          </Text>
          <TouchableOpacity
            onPress={() => {
              setSettings(false);
              setLoading(true);
              setTimeout(() => {
                setMyPills(true);
                setLoading(false);
              }, 150);
            }}
            activeOpacity={0.5}
            style={styles.modalC}>
            <View style={styles.modalA}>
              <FontAwesomeIcon
                icon={solid('capsules')}
                size={20}
                color={'#2CA6FF'}
                style={{marginRight: 15, marginLeft: 15}}
              />
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Satoshi-Bold',
                  fontSize: 15,
                }}>
                My Pills
              </Text>
            </View>
          </TouchableOpacity>
          <Divider width={0.4} color={'gray'} />
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.modalC}
            onPress={() => {
              setSettings(false);
              setLoading(true);
              setTimeout(() => {
                setMe(true);
                setLoading(false);
              }, 150);
            }}>
            <View style={styles.modalA}>
              <FontAwesomeIcon
                icon={regular('user')}
                size={20}
                color={'black'}
                style={{marginRight: 15, marginLeft: 15}}
              />
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Satoshi-Bold',
                  fontSize: 15,
                }}>
                Me
              </Text>
            </View>
          </TouchableOpacity>
          <Divider width={0.4} color={'gray'} />
          <TouchableOpacity
            onPress={() => {
              setSettings(false);
              setLoading(true);
              setTimeout(() => {
                setDeleteAllPills(true);
                setLoading(false);
              }, 150);
            }}
            activeOpacity={0.5}
            style={styles.modalC}>
            <View style={styles.modalA}>
              <FontAwesomeIcon
                icon={solid('trash')}
                size={20}
                color={'red'}
                style={{marginRight: 15, marginLeft: 15}}
              />
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Satoshi-Bold',
                  fontSize: 15,
                }}>
                Delete Pill Records
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  modalItemsContainer: {
    width: 400,
    padding: 16,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
  modalC: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  modalA: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
