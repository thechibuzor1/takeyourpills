import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function NotificationBar(prop) {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        icon={solid('prescription-bottle')}
        style={styles.logo}
        size={30}
        color={'green'}
      />
      <Text style={styles.text}>{prop.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    zIndex: 999,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 15,
    height: 60,
  },
  logo: {
    marginLeft: 30,
  },
  text: {
    color: 'black',
    marginLeft: 10,
    marginRight: 30,
    fontFamily: 'Satoshi-Bold',
    fontSize: 18,
  },
});
