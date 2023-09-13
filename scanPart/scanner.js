import React, { useState, useEffect } from 'react';
import { StyleSheet, ToastAndroid, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { DocumentScanner } from 'react-native-document-scanner-plugin';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import ItemsCounter from '../../proj/tinyParts/counter';


// import { IMAGESYOUSCANNED } from '../../util/const';

//import ScannedImgCounter from '../../proj/tinyParts/counter;'

export default function ScannerComp() {
  const [scannedImage, setScannedImage] = useState();
  

  const saveToStore = async (imgFromScanner) => {
    try {
      // await AsyncStorage.setItem(IMAGESYOUSCANNED, JSON.stringify(imgFromScanner))
    } catch(e) {
      console.log('ERR from saving to asyncStore:', e);
    }
  }

  const scanningDocument = async () => {
    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument({
      letUserAdjustCrop: false,
      croppedImageQuality: 80,
      maxNumDocuments: 20
    })
  
    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages)
      // ToastAndroid.show(scannedImages[0], ToastAndroid.LONG);
      saveToStore(scannedImages);
    }
    // To see the scannedImg items on the state
    console.log(scannedImages);
    
  }

  

  // const gotoPreview = () => {
  //   saveToStore(scannedImage);
  //   routing.push('/scanPart/scanPreview');
  // }
  useEffect(() => {
    // call scanDocument on load
    scanningDocument();
    
  }, []);
  return (
    // <View style={{flex: 1, top: 10}}>
      // <View style={styles.container}>
        // {/* <View style={styles.imgCountStyle}> */}
          // {/* <ScannedImgCounter 
          //   numberOfScannedImg={scannedImage.length}
          // /> */}
        // {/* </View> */}
        
        <Image
        resizeMode="contain"
        style={{ width: '100%', height: '100%' }}
        source={{ uri: scannedImage }}
        />

        
        // {/* <TouchableOpacity 
        //   onPress={gotoPreview}
        //   style={styles.buttonContainer}>
        //     <FontAwesomeIcon style={{marginTop: 3}} color='white' icon="fa-regular fa-file" size={25} />
        //     <ItemsCounter 
              // noOfItems={scannedImage.length}
        //     />        
        // </TouchableOpacity>

        // <Button 
        //   title='Scan'
        //   color='#5C8FAB'
        //   style={styles.scannerBtn}
        //   onPress={scanningDocument}
        // /> */}
      //  {/* </View> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: '#F7DBB6',
    top: 520,
    width: '50%',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 17,
    borderRadius: 50
  },

  buttonContainer: {
    height: '50%',
    width: '30%',
    borderRadius: 5,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    backgroundColor: '#5C8FAB'
  },

  // prevBox: {
  //   backgroundColor: 'skyblue',
  //   width: 20,
  //   height: 35,
  //   padding: 3,
  //   borderRadius: 5,
  //   width: '10%',
  // },

  scannerBtn: {
    
  }
});
