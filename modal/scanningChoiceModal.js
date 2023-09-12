import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScanChoiceModal = ({modalVisible, onResetModal, navigation}) => {
  const modalNav = useNavigation();

  const handleModal = (pathStr) =>{
    onResetModal(!modalVisible)
    console.log('From scanModal', modalVisible)
    // if ( pathStr === '/modal/documentType') {
    //   modalNav.navigate('/modal/documentType')
    // } else if (pathStr === '/modal/fileType') {
    //   modalNav.navigate('/modal/fileType')
    // } else 
    if (pathStr === '/modal/documentType' ) {
      modalNav.navigate(pathStr)
    } else if (pathStr === '/modal/fileType') {
      navigation.navigate(pathStr)
    }
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          onResetModal(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Do you want to scan Document or File?</Text>
            <View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => handleModal('/modal/documentType')}
              >
                      <Text style={styles.textStyle}>Scan Document?</Text>
              </Pressable>
            </View>
            
            <View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => handleModal('/modal/fileType')}
              >
                      <Text style={styles.textStyle}>Scan File?</Text>   
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    // marginTop: 100,
    backgroundColor: '#FFEDD6',
    opacity: 0.8

  },
  modalView: {
    width: 400,
    height: 700,
    // zIndex: 2,
    
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ScanChoiceModal;