import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { DocumentScanner } from 'react-native-document-scanner-plugin';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ItemsCounter from '../../proj/tinyParts/counter';
import { useRouter } from 'expo-router';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { IMAGESYOUSCANNED } from '../../util/const';
//import ScannedImgCounter from '../../proj/tinyParts/counter;'

export default function Scanner() {
  const [scannedImage, setScannedImage] = useState();
  let routing = useRouter()

 
  const scanningDocument = async () => {
    // start the document scanner
    const { scannerImages } = await DocumentScanner.scanDocument({
      letUserAdjustCrop: false,
      croppedImageQuality: 80,
      maxNumDocuments: 20
    })
  
    // get back an array with scanned image file paths
    if (scannerImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannerImages)
    }
    // To see the scannedImg items on the state
    console.log(scannerImages);
  }

  const saveToStore = async (imgFromScanner) => {
    try {
      await AsyncStorage.setItem(IMAGESYOUSCANNED, JSON.stringify(imgFromScanner))
    } catch(e) {
      console.log('ERR from saving to asyncStore:', e);
    }
  }

  const gotoPreview = () => {
    saveToStore(scannedImage);
    routing.push('./scanPreview');
  }
  // useEffect(() => {
  //   // call scanDocument on load
  //   scanningDocument()
  // }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imgCountStyle}>
        {/* <ScannedImgCounter 
          numberOfScannedImg={scannedImage.length}
        /> */}
      </View>
      <Button 
        title='Scan'
        style={styles.scannerBtn}
        onPress={scanningDocument}
      />
      {/* <Image
      resizeMode="contain"
      style={{ width: '100%', height: '90%' }}
      source={{ uri: scannedImage }}
    /> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={gotoPreview}
          style={styles.prevBox}
        >
          <FontAwesomeIcon icon="fa-regular fa-file" size={15} />
          <ItemsCounter 
            noOfItems={scannedImage.length}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    backgroundColor: 'steelblue',
    height: '7%',
    width: '95%',
    padding: 10,
    borderRadius: 20
  },

  prevBox: {
    backgroundColor: 'skyblue',
    width: 20,
    height: 25,
    padding: 3,
    borderRadius: 5,
    width: '10%',
  },

  scannerBtn: {
    width: '30%',
    borderRadius: '50%',
    backgroundColor: 'white',
    alignSelf: 'center'
  }
});
