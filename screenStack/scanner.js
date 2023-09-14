import React, { useState, useEffect } from 'react';

import { Image, ToastAndroid } from 'react-native';

import DocumentScanner from 'react-native-document-scanner-plugin';

import { useDispatch, useSelector } from 'react-redux';
import { addDocTitleWithImgUri } from '../redux/slice';
import { FlatList } from 'react-native-gesture-handler';



export default function Scanner({ route }) {
  // const [scannedImage, setScannedImage] = useState();

  const dispatch = useDispatch();
  const readtitleWithImgUriFromStore = useSelector((state)=> state.titleReducer.titleImgDataFromStore.titleWithImgUri)

  const sendScannedImgToStore = (pixAddress) => {
    const titleForFile = route.params;
    Object.assign(titleForFile, {scannedImgUri: pixAddress})
    dispatch(addDocTitleWithImgUri(titleForFile))
  }
  

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
      // scannedImages.forEach((imgUri) => {
      //   setScannedImage(imgUri)
      // })
      sendScannedImgToStore(scannedImages)
      // set the img src, so we can view the first scanned image
      // setScannedImage(scannedImages[0]) OLD CODE
    }
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
    } else if ( item.scannedImgUri === undefined) {
      return ToastAndroid.show('You scanned Nothing', ToastAndroid.LONG)
    }
  }

  useEffect(() => {
    // call scanDocument on load
    console.log('from scanner', titleForFile);
    scanDocument()
  }, []);

  return (
    <FlatList
      data={readtitleWithImgUriFromStore} 
      renderItem={renderImg}
      keyExtractor={item => item.value }
    />
  )
}