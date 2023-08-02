import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { DocumentScanner } from 'react-native-document-scanner-plugin';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Link, Stack } from 'expo-router';
import { LinearGradient } from 'react-native-svg';

import  PreDropDown from './pages/preDropDown';
import FileComponents from './pages/filePartsToScan';
import HomePage from './pages/home';
import ImageHeader from '../proj/tinyParts/headerLogo';
// import FormPage from './proj/pages/form';
// in App.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserXmark, faRightToBracket, faListOl } from '@fortawesome/free-solid-svg-icons';
import { 
  faIdCard, 
  faFile } from '@fortawesome/free-regular-svg-icons';
import ScanPreview from './scanPart/scanPreview';



library.add(faFile, faUserXmark, faRightToBracket, faListOl, faIdCard)


export default function App() {
  const [titlesOfDocs, setTitlesOfDocs] = useState([]);
  
  const passDocsTitleForScanning = (titlesDocsArr) => {
    setTitlesOfDocs([...titlesOfDocs, titlesDocsArr]);
    // return titlesDocsArr;
  }
 
 
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Home',
          headerTitle: () => <ImageHeader />,
          headerTitleAlign: 'center'
          // headerBackground:  () => <ImageHeader />,
        }} 
      />
      {/* <LinearGradient
        colors={['blue', 'red']}
        style={styles.linearGrad}
      /> */}

      {/* <LinearGradient 
        colors={['red', 'green']}
        style={styles.linearGrad}
      > */}
        <ImageBackground 
          style={styles.imgBg} 
          source={require('../assets/bgpixel.jpg')} 
          resizeMode='cover'
          imageStyle={styles.bgImgStyle}
        >
        
        <View style={styles.homePg}>
          {/* <HomePage /> */}
          <ScanPreview />
          {/* <Link href="/pages/home">Go Home</Link> */}
        </View>
      {/* <View>
        <PreDropDown onPassDocsTitle={passDocsTitleForScanning} />
    
      </View> */}
      {/* <View>
        <FileComponents docsName={titlesOfDocs} />
        <FormPage />
      </View> */}

        </ImageBackground>
      {/* </LinearGradient> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5CBFAB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgBg: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // opacity: 0.3
  },

  bgImgStyle: {
    opacity: 0.3
  },

  // linearGrad: {
  //   // flex: 1
  // },

  buttonContainer: {
    backgroundColor: 'steelblue',
    height: '7%',
    width: '95%',
    padding: 10,
    borderRadius: 20
  },

  prevBox: {
    backgroundColor: 'skyblue',
    padding: 3,
    borderRadius: 5,
    width: '10%',
  }
});
