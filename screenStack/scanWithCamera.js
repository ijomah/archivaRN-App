import React from "react";
// import { Camera } from 'expo-camera';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { manipulateAsync } from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
// import { useIsFocused } from "@react-navigation/native";

import { addDocTitleWithImgUri } from "../redux/slice";

import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { storeData, insertScannerRes } from "../util/dbService";

// Bring in FileSystem to persist your data
// work with FileSystem.copyAsync to persist the data

function ScanWithCamera({route, navigation}) {
  const docFormData = useSelector((state) => 
        (state
            .titleReducer
            .commonToDocAndFileFormFromStore
            .docFormForApplicAndApproval
        )
    );

    

  const [isCameraOn, setIsCameraOn] = useState(false);
  // const [showPreview, setShowPreview] = useState(false);
  // const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedPix, setCapturedPix] = useState([]);

  const dispatch = useDispatch();
  // const isFocused = useIsFocused();

  // if(isFocused) {
  //   getCameraSet();
  // }
  
  // let camera;

  // if (!permission) {
  //   // Camera permissions are still loading
  //   return <View />;
  // }

  

  // if (!permission.granted) {
  //   // Camera permissions are not granted yet
  //   return (
  //     <View style={styles.container}>
  //       <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
  //       <Button 
  //         onPress={requestPermission} 
  //         title="Grant permission" 
  //       />
  //     </View>
  //   );
  // }

  const sendScannedImgToStore = (pixAddressArr) => {
    const applicData = combineDocFormAndTitle();
    const imgArrToObj = changeImgStringToObj(pixAddressArr);

    // if (imgArrToObj.imgId)
    const docDataForStore = Object.assign({}, applicData, imgArrToObj)
    // console.log('now for store', docDataForStore);
      // {
        // value: ...,
        // label: ...,
        // '0': {
          // imgId: 2
          // imgName: uri.slice(uri.lastIndexOf('/')+1),
          // uri: uri
          // }
      //},
    // console.log('to store', docDataForStore);

    dispatch(addDocTitleWithImgUri(docDataForStore));
    // storeData(docDataForStore)
   // insertScannerRes(docDataForStore);
    // console.log('store', docDataForStore)
  }

  // const setCamera = async () => {
  //   const {status} = await Camera.requestCameraPermissionsAsync();
  //   if (status === "granted") {
  //     // const pix = await Camera.ta
  //     setIsCameraOn(true);
  //   } else {
  //     Alert.alert('Access Denied');
  //   }
  // }

  const takePic = async () => {
    // let pixUriArr = []
  //  if (!camera) return
   const {assets} = await ImagePicker.launchCameraAsync(
    {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
      // allowsMultipleSelection: true,
      // selectionLimit: 20
    }
   );

   
  // const pix = await camera.takePictureAsync();
  //  setShowPreview(true);
  //  pixUriArr.push(uri);
  let uri = '';
  //Manipulate image size
  assets.forEach((obj) => {
    uri = obj.uri
  })
  if(!!uri) {
    var resizedImage = await manipulateAsync(
      uri,
      [{ resize: { width: 200, height: 300 } }]
      // { base64: true }
    );
  }
  // console.log(resizedImage)
   setCapturedPix([...capturedPix, resizedImage.uri]);
   console.log('from take', capturedPix);
  }

  // const getCameraSet = (r) => camera = r;
  

  const savePix = () => {
    if(capturedPix.length === 0) {
      navigation.navigate('scanPart/scanPreview')
      return
    }
    sendScannedImgToStore(capturedPix)
    // console.log('from save', capturedPix)
    setCapturedPix([]);
    navigation.navigate('scanPart/scanPreview')
  }

  const retake = () => {
    //remove the last pix taken from the Array
    //pop it
    setCapturedPix((capturedPix) => {
      capturedPix.pop();
      // console.log('from retake: ', capturedPix)
      return capturedPix
    })
    // takePic();

  }

  const changeImgStringToObj = (imageUriArray) => {
    const imgForPrev = [];
            imageUriArray.forEach((uri, index) => {
                // This obj is formulated for the 
                //purpose sending to redux store and sqliteDb
                const imgUriObj = { 
                    imgId: index + 1 +'-'+ route.params.value,
                    imgName: uri.slice(uri.lastIndexOf('/')+1),
                    uri: uri
                }
                imgForPrev.push(imgUriObj)
            })
            
           return imgForPrev;
  }

  const combineDocFormAndTitle = () => {
    for(let datum of docFormData) {
      var fullApplicantDet = Object.assign({}, route.params, datum)
    }
    return fullApplicantDet
  }
  // const changeImgArrToObj = (arrOfObj, key) => {
  //   initialVal = {};
  //   arrOfObj.reduce((obj, current) => {
  //     return {
  //       ...obj,
  //       [current[key]]: current
  //     };
  //   }, initialVal)
  // }

  return (
    <View style={styles.container}>
      <View style={styles.camera}
      //  ref={getCameraSet}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={retake}
          >
          {/* put icon here. redo or retake icon */}
          <MaterialCommunityIcons name="camera-retake-outline" size={35} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.btnTake} 
            onPress={takePic}
         >
          <Feather name="camera" size={40} color="black" />
            {/* <Text style={styles.text}>Scan</Text> */}
          </TouchableOpacity>

          <TouchableOpacity 
           onPress={savePix}
            style={styles.button}
          >
            {/* put icon here. plus icon */}
            <FontAwesome name="save" size={35} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ScanWithCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  // camera: {
  //   flex: 1,
  // },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    // alignItems: 'stretch',
    justifyContent: 'space-between',
    width: 400,
    backgroundColor: 'transparent',
    margin: 64,
    // backgroundColor: 'gray'
  },
  button: {
    // flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  btnTake: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
