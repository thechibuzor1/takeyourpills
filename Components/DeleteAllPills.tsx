import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {d} from '../screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeleteAllPills = ({
  setDeleteAllPills,
  setFilterData,
  setShowNotif,
  setMessage,
  mainDrive,
}) => {
  function handleDelete() {
    const pillData = [];
    AsyncStorage.setItem('pillData', JSON.stringify(pillData))
      .then(() => {
        setFilterData(pillData);
        mainDrive(d.format('ddd MMM D YYYY'));
        setDeleteAllPills(false);
        setMessage('All Pills have been deleted! 🤯');
        setShowNotif(true);
      })
      .catch(err => console.log(err));
  }

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          width: 400,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            fontFamily: 'Satoshi-Bold',
            marginBottom: 10,
            marginTop: 10,
          }}>
          Delete all pill records 😧
        </Text>
        <Text
          style={{
            fontFamily: 'Satoshi-regular',
            color: 'gray',
          }}>
          Are you sure about this?
        </Text>
        <Text
          style={{
            fontFamily: 'Satoshi-regular',
            color: 'gray',
          }}>
          There's no going back once it's done...
        </Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            paddingLeft: 4,
            paddingRight: 4,
            marginTop: 8,
          }}>
          <TouchableOpacity
            onPress={handleDelete}
            activeOpacity={0.7}
            style={{
              padding: 16,
              backgroundColor: 'black',
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: 'red',

                fontFamily: 'Satoshi-Bold',
              }}>
              Yes, I'm sure 😪
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDeleteAllPills(false)}
            activeOpacity={0.7}
            style={{
              padding: 16,
              backgroundColor: 'white',
              borderRadius: 15,
              borderWidth: 1,
            }}>
            <Text
              style={{
                color: 'black',

                fontFamily: 'Satoshi-Bold',
              }}>
              No, I was feeling silly 😌
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DeleteAllPills;

const styles = StyleSheet.create({});
