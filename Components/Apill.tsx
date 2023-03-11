import {
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {Divider} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {regular, solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import EditPills from './EditPills';
import DeleteApill from './DeleteApill';

const Apill = ({
  setPillActive,
  data,
  setCurrentPill,
  index,
  setShowNotif,
  setMessage,
  filterData,
  mainDrive,
  setFilterData,
  setIndex,
}) => {
  const [editPill, setEditPill] = useState<boolean>(false);
  const [deleteAPill, setDeleteAPill] = useState<boolean>(false);

  return (
    <>
      <Modal
        animated
        animationType="slide"
        visible={editPill}
        transparent
        onRequestClose={() => setEditPill(false)}>
        {
          <EditPills
            setEditPill={setEditPill}
            data={data}
            index={index}
            setShowNotif={setShowNotif}
            setMessage={setMessage}
            filterData={filterData}
            mainDrive={mainDrive}
            setFilterData={setFilterData}
            setPillActive={setPillActive}
            setCurrentPill={setCurrentPill}
            setIndex={setIndex}
          />
        }
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={deleteAPill}
        transparent
        onRequestClose={() => setDeleteAPill(false)}>
        {
          <DeleteApill
            setDeleteAPill={setDeleteAPill}
            data={data}
            index={index}
            setShowNotif={setShowNotif}
            setMessage={setMessage}
            filterData={filterData}
            mainDrive={mainDrive}
            setFilterData={setFilterData}
            setPillActive={setPillActive}
            setCurrentPill={setCurrentPill}
            setIndex={setIndex}
          />
        }
      </Modal>
      <View
        key={data.id}
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
              alignItems: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => setDeleteAPill(true)}
              activeOpacity={0.7}>
              <FontAwesomeIcon
                icon={regular('trash-can')}
                size={25}
                style={{marginRight: 15}}
                color={'red'}
              />
            </TouchableOpacity>
            <View
              style={{
                alignSelf: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => setEditPill(true)}
                activeOpacity={0.7}>
                <FontAwesomeIcon
                  icon={regular('pen-to-square')}
                  size={24}
                  style={{marginRight: 15}}
                  color={'#000000'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPillActive(false);
                  setCurrentPill(null);
                  setIndex(null);
                }}
                activeOpacity={0.5}>
                <FontAwesomeIcon
                  icon={solid('xmark')}
                  style={{}}
                  size={30}
                  color={'black'}
                />
              </TouchableOpacity>
            </View>
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{paddingTop: 16}}>
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
              <Text style={{fontFamily: 'Satoshi-Regular'}}>
                {data.dosage}{' '}
              </Text>
            </Text>
            <Text style={styles.infoTxt}>
              Duration:{' '}
              <Text style={{fontFamily: 'Satoshi-Regular'}}>
                {data.duration}
              </Text>
            </Text>
            <Text style={styles.infoTxt}>
              Time in a day:{' '}
              <Text style={{fontFamily: 'Satoshi-Regular'}}>
                {data.timesPerDay}
              </Text>
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.infoTxt}>Times: </Text>
              {data.times.map((time: string) => (
                <Text key={time} style={styles.times}>
                  {time}
                </Text>
              ))}
            </View>

            <Text style={styles.infoTxt}>
              Start date:{' '}
              <Text style={{fontFamily: 'Satoshi-Regular'}}>
                {data.startDate}
              </Text>
            </Text>
            <Text style={styles.infoTxt}>
              End date:{' '}
              <Text style={{fontFamily: 'Satoshi-Regular'}}>
                {data.endDate}{' '}
              </Text>
            </Text>
            <Text style={[styles.infoTxt, {marginBottom: 30}]}>
              Instructions:{' '}
              <Text style={{fontFamily: 'Satoshi-Regular'}}>
                {data.instructions}
              </Text>
            </Text>
          </ScrollView>
        </ImageBackground>
      </View>
    </>
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
  times: {
    fontFamily: 'Satoshi-Regular',
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
    marginRight: 10,
  },
});
