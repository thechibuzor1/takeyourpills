import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Modal,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useEffect, useMemo, useState, useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Divider} from 'react-native-elements';
import {solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro';

const Settings = () => {
  return (
    <View style={styles.modalContainer}>
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
          <TouchableOpacity activeOpacity={0.5} style={styles.modalC}>
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
          <TouchableOpacity activeOpacity={0.5} style={styles.modalC}>
            <View style={styles.modalA}>
              <FontAwesomeIcon
                icon={solid('pen')}
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
                Edit My Info
              </Text>
            </View>
          </TouchableOpacity>
          <Divider width={0.4} color={'gray'} />
          <TouchableOpacity activeOpacity={0.5} style={styles.modalC}>
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
    marginBottom: 15,
  },
  modalA: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
