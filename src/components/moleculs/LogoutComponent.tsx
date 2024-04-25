import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useAuthLogout from '../../utils/authenticationUtils/authLogout';
import {authStyle} from '../../utils/authenticationUtils/authStyles';
import GradientText from '../atoms/GradientText';
const LogoutComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const logout = useAuthLogout();

  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <LinearGradient
        colors={['#e9be27', '#de9b52', '#d7856d', '#e3ab3f']}
        style={{
          height: StatusBar.currentHeight,
        }}
      />
      <View style={authStyle.container}>
        <View style={authStyle.topImageContainer}>
          <Image
            source={require('../../assets/images/topVector.png')}
            style={authStyle.topImage}
          />
        </View>
        <View style={styles.pressableView}>
          <GradientText style={authStyle.goodByeText}>Good Bye</GradientText>
          <Pressable onPress={() => setModalVisible(true)}>
            <Image
              source={require('../../assets/icons/goodbye.png')}
              style={styles.goodebyeImg}
            />
          </Pressable>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to log out?
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  source={require('../../assets/icons/cancel.png')}
                  style={{width: 60, height: 60}}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setModalVisible(!modalVisible);
                  logout();
                }}>
                <Image
                  source={require('../../assets/icons/logout.png')}
                  style={{width: 60, height: 60}}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  pressableView: {
    flex: 1,
    paddingVertical: 18,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  goodebyeImg: {
    width: 200,
    height: 200,
    marginTop: 250,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#ffff',
    borderRadius: 20,
    padding: 45,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 30,
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default LogoutComponent;
