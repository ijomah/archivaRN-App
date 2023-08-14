// import React from "react";
// import { View, Modal, Text, SafeAreaView, TouchableOpacity } from "react-native";
// import {Link, useRouter} from "expo-router";
// import { StatusBar } from "expo-status-bar";

// export default function ScanChoiceModal() {
//     // const routing = useRouter();
//     // const isPresent = routing.back();
//     return (
        
//             <SafeAreaView>
//                 {/* <Text>Do you want to scan Document or File?</Text> */}
//                 {/* {!isPresent && (<> */}
//                 <Modal animationType="slide" >
//                 <View style={{height: 200, top: 200, backgroundColor: 'red', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
//                     <View style={{backgroundColor: 'blue'}}>
//                         <Link href='./documentType'>Scan Document?</Link>
//                     </View>
//                     <View style={{backgroundColor: 'green'}}>
//                         <Link href='./fileType'>Scan File?</Link>
//                     </View>
//                 </View>
//                 {/* </>)} */}
//                 </Modal>    
//                 <StatusBar style="auto" />
//             </SafeAreaView>
            
        
//     )
// }

import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {Link, useRouter} from "expo-router";

const ScanChoiceModal = ({modalVisible, setModalVisible}) => {
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Do you want to scan Document or File?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
                <Link href='/modal/documentType'>
                    <Text style={styles.textStyle}>Scan Document?</Text>
                </Link>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
                <Link href='/modal/fileType'>
                    <Text style={styles.textStyle}>Scan File?</Text>
                </Link>
            </Pressable>
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
    marginTop: 22,
  },
  modalView: {
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