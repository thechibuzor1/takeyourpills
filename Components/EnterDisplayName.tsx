import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EnterDisplayName = ({
  displayName,
  setDisplayName,
  setShowDisplayName,
  setMessage,
  setShowNotif,
}) => {
  function handleDone() {
    if (!displayName.trim()) {
      Alert.alert('Umm... 😑 ', 'Dude just put a name... 😐');
      return;
    }
    AsyncStorage.setItem('userName', JSON.stringify(displayName))
      .then(() => {
        setShowDisplayName(false);
        setMessage(`Hola! ${displayName}🥵`);
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
          What should i call you?🧐
        </Text>
        <Text
          style={{
            fontFamily: 'Satoshi-regular',
            color: 'gray',
          }}>
          set your display name.
        </Text>
        <Text
          style={{
            fontFamily: 'Satoshi-regular',
            color: 'gray',
          }}>
          It can always be changed in settings later but please keep it PG...
        </Text>

        <View>
          <TextInput
            autoFocus
            style={styles.textField}
            onChangeText={text => setDisplayName(text)}
          />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 20,
            paddingLeft: 4,
            paddingRight: 4,
            marginTop: 8,
            alignSelf: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={handleDone}
            activeOpacity={0.7}
            style={{
              padding: 16,
              backgroundColor: 'black',
              borderRadius: 15,
              alignSelf: 'flex-end',
            }}>
            <Text
              style={{
                color: 'green',

                fontFamily: 'Satoshi-Bold',
              }}>
              Confirm 😪
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EnterDisplayName;

const styles = StyleSheet.create({
  textField: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Satoshi-Bold',

    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 16,
    padding: 16,
  },
});
