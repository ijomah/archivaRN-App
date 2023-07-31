// import { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { DocumentScanner } from 'react-native-document-scanner-plugin';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { IMAGESYOUSCANNED } from '../util/const';

// export default function ScanComponent() {
//     const [scannedImage, setScannedImage] = useState();

//     const scanningDocument = async () => {
//       // start the document scanner
//       const { scannedImages } = await DocumentScanner.scanDocument({
//         letUserAdjustCrop: false,
//         croppedImageQuality: 80,
//         maxNumDocuments: 20
//       })
    
//       // get back an array with scanned image file paths
//       if (scannedImages.length > 0) {
//         // set the img src, so we can view the first scanned image
//         setScannedImage(scannedImages[0])
//       }
//     }

//     useEffect(() => {
//       // call scanDocument on load
//       scanningDocument()
//     }, []);
//     return (
//       <View style={styles.container}>
        
//         <Image
//         resizeMode="contain"
//         style={{ width: '100%', height: '90%' }}
//         source={{ uri: scannedImage }}
//       />
//         <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.prevBox}>
//           <FontAwesomeIcon icon="fa-regular fa-file" sty />
//           <Text style={styles.text}>2</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   buttonContainer: {
//     backgroundColor: 'steelblue',
//     height: '7%',
//     width: '95%',
//     padding: 10,
//     borderRadius: 20
//   },

//   prevBox: {
//     backgroundColor: 'skyblue',
//     padding: 3,
//     borderRadius: 5,
//     width: '10%',
//   }
// });


import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
