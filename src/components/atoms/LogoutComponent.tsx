import React, {useState} from 'react';
import {View, Text, Modal, StyleSheet, Image, Pressable} from 'react-native';
import useAuthLogout from '../../utils/authenticationUtils/authLogout';
import {authStyle} from '../../utils/authenticationUtils/authStyles';
import GradientText from './GradientText';
import GradientStatusBar from './GradientStatusBar';

const LogoutComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const logout = useAuthLogout();

  return (
    <>
      <GradientStatusBar />
      <View style={authStyle.container}>
        <View style={authStyle.topImageContainer}>
          <Image
            source={require('../../assets/images/topVector.png')}
            style={authStyle.topImage}
          />
        </View>
        <View style={styles.pressableView}>
          <GradientText style={authStyle.goodByeText}>Good Bye</GradientText>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.pressablemodal}>
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
              Are you sure you want to Log-Out ??
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  source={require('../../assets/icons/cancel.png')}
                  style={styles.modalIcon}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setModalVisible(!modalVisible);
                  logout();
                }}>
                <Image
                  source={require('../../assets/icons/logout.png')}
                  style={styles.modalIcon}
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
  pressablemodal: {
    flexDirection: 'column',
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
    fontSize: 19,
    lineHeight: 27,
    color: '#080807',
    textAlign: 'center',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 7,
    justifyContent: 'space-between',
    width: '85%',
  },
  modalIcon: {
    width: 60,
    height: 60,
  },
});

export default LogoutComponent;
