import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {regular, solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Divider} from 'react-native-elements';

const Me = ({setMe}) => {
  const [edit, setEdit] = useState<boolean>(false);
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
          {edit ? (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  padding: 16,
                  backgroundColor: 'black',
                  borderRadius: 15,
                  marginRight: 15,
                }}>
                <Text
                  style={{
                    color: 'white',

                    fontFamily: 'Satoshi-Bold',
                  }}>
                  Save Changes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setEdit(false)}
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
                  Discard
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setEdit(true)}>
                <FontAwesomeIcon
                  icon={regular('pen-to-square')}
                  size={24}
                  style={{marginRight: 15}}
                  color={'#000000'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setMe(false)}
                activeOpacity={0.5}>
                <FontAwesomeIcon
                  icon={solid('xmark')}
                  style={{}}
                  size={30}
                  color={'black'}
                />
              </TouchableOpacity>
            </>
          )}
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
          <View style={styles.listContainer}>
            <Text style={styles.infoTxt}>Fullname: </Text>
            {edit ? (
              <TextInput autoFocus style={styles.textField} />
            ) : (
              <Text style={styles.infoTxtR}>Igbudu Chibuzor Moses</Text>
            )}
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.infoTxt}> Date of birth: </Text>
            {edit ? (
              <TextInput style={styles.textField} />
            ) : (
              <Text style={styles.infoTxtR}>May 1, 2002</Text>
            )}
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.infoTxt}>Gender: </Text>
            {edit ? (
              <TextInput style={styles.textField} />
            ) : (
              <Text style={styles.infoTxtR}>Male</Text>
            )}
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.infoTxt}>BMI: </Text>
            {edit ? (
              <TextInput style={styles.textField} />
            ) : (
              <Text style={styles.infoTxtR}>28</Text>
            )}
          </View>
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
  },
  infoTxtR: {fontFamily: 'Satoshi-Regular', fontSize: 18, color: 'gray'},
  textField: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Satoshi-Bold',
    flex: 1,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
    paddingStart: 16,
    paddingEnd: 16,
    marginLeft: 5,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
});
