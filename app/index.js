import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { DocumentScanner } from 'react-native-document-scanner-plugin';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Link } from 'expo-router';
import { LinearGradient } from 'react-native-svg';

import  PreDropDown from './pages/preDropDown';
import FileComponents from './pages/filePartsToScan';
// import FormPage from './proj/pages/form';
// in App.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { 
  faIdCard, 
  faFile } from '@fortawesome/free-regular-svg-icons';



library.add(faFile, faUserXmark, faIdCard)


export default function App() {
  const [titlesOfDocs, setTitlesOfDocs] = useState([]);
  
  const passDocsTitleForScanning = (titlesDocsArr) => {
    setTitlesOfDocs([...titlesOfDocs, titlesDocsArr]);
    // return titlesDocsArr;
  }
 
 
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['blue', 'red']}
        style={styles.linearGrad}
      />

      <LinearGradient 
        colors={['red', 'green']}
        style={styles.linearGrad}
      >
        <ImageBackground 
        style={styles.imgBg} 
        source={require('../assets/bgpixel.jpg')} 
        resizeMode='cover'
      >
        {/* <View>
          <Link href='/pages/preDropDown'>
            <Text>Document Selection Dropdown</Text>
          </Link>
        </View> */}
        
        <View style={styles.homePg}>
          <HomePage />
        </View>
      {/* <View>
        <PreDropDown onPassDocsTitle={passDocsTitleForScanning} />
    
      </View> */}
      {/* <View>
        <FileComponents docsName={titlesOfDocs} />
        <FormPage />
      </View> */}
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.prevBox}>
          <FontAwesomeIcon icon="fa-regular fa-file" />
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
      </View> */}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgBg: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%'
    // opacity: 0.7
  },

  linearGrad: {
    flex: 1
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
    padding: 3,
    borderRadius: 5,
    width: '10%',
  }
});
