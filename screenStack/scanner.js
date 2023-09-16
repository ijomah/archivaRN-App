import React, { useEffect } from 'react';

import { Image, ToastAndroid, FlatList, SafeAreaView } from 'react-native';

import DocumentScanner from 'react-native-document-scanner-plugin';

import { useDispatch, useSelector } from 'react-redux';
import { addDocTitleWithImgUri } from '../redux/slice';



export default function Scanner({ route }) {
  // const [scannedImage, setScannedImage] = useState([]);
  const readtitleWithImgUriFromStore = useSelector((state)=> state.titleReducer.titleImgDataFromStore.titleWithImgUri);
  const dispatch = useDispatch(); 
  let imgUriArr = [];
  
  const scanDocument = async () => {
    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument({
      letUserAdjustCrop: false,
      croppedImageQuality: 80,
      maxNumDocuments: 10
    })
  
    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // loop and set the img src, so we can view the first scanned image
      scannedImages.forEach((imgUri) => {
        imgUriArr.push(imgUri)
        // setScannedImage([...scannedImage, imgUri])
      })
      // setScannedImage([...scannedImage, ...scannedImages])
      // sendScannedImgToStore(scannedImages)
      // set the img src, so we can view the first scanned image
      // setScannedImage(scannedImages[0])
    }
    
  }
  

  useEffect(() => {
    // call scanDocument on load
    scanDocument()
    sendScannedImgToStore(imgUriArr);
  }, []);


  

  const sendScannedImgToStore = (pixAddress) => {
    const titleForFile = route.params;
    const docDataForStore = {...titleForFile, scannedImgUri: pixAddress}
    // console.log('for store', docDataForStore);
    dispatch(addDocTitleWithImgUri(docDataForStore))
  }
 

  

  const renderImg = ({item}) => {
    if (item.scannedImgUri.length > 0) {
      item.scannedImgUri.forEach((pixUri) => {
        return (
          <Image
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
            source={{ uri: pixUri }}
          />
        )
      })
    } 
    //simplifying the code reason for commenting
    // else if ( item.scannedImgUri === undefined) {
    //   return ToastAndroid.show('You scanned Nothing', ToastAndroid.LONG)
    // }
  }

  return (
    <SafeAreaView>
      <FlatList
        data={readtitleWithImgUriFromStore} 
        renderItem={renderImg}
        keyExtractor={item => item.value }
      />
    </SafeAreaView>
  )
}