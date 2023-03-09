import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Pressable,
  Button,
} from 'react-native';
import notifee, {
  AuthorizationStatus,
  EventType,
  Notification,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';

import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Notifications from '../Notifications';
import moment from 'moment';

const Test = () => {
  const [date, setDate] = useState(new Date());
  const [reminder, setReminder] = useState('');
  const [open, setOpen] = useState(false);

  const saveReminder = async () => {
    Notifications.scheduleNotification({reminder, date: date});
  };
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,

        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a reminder"
        onChangeText={text => setReminder(text)}
        placeholderTextColor="black"
      />
      <Pressable
        onPress={() => setOpen(true)}
        style={[styles.input, {marginTop: 0}]}>
        <Text>{date ? date.toString() : 'Enter time'}</Text>
      </Pressable>

      <Button title="Save" onPress={saveReminder} />

      <Pressable style={{padding: 20}}></Pressable>

      <DateTimePickerModal
        isVisible={open}
        mode="datetime"
        onConfirm={d => {
          setDate(d);
          console.log(d);
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      />
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    paddingBottom: 10,
  },
  input: {
    height: 40,
    margin: 25,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
  },
});
