import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import 'react-native-gesture-handler';

// import { Provider } from 'react-redux';
// import { store } from './redux/store';

import HomePage from './screenStack/home';
import LoginPage from './auth/login';
import MyDrawer from './screenDrawer/myDrawer';
import DocumentType from './screenStack/documentType';
import FileType from './screenStack/fileType';
// import FileComponents from './pages/partsToScan';
// import FileManager from './pages/fileManager';

import { Image, View } from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';
import Scanner from './screenStack/scanner';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    // <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen 
            name='screenStack/home' 
            component={HomePage} 
            options={{title: 'Home'}}
          />
          
          <Stack.Screen 
            name='auth/login' 
            component={LoginPage} 
            options={{title: 'Login'}}
          />
          <Stack.Screen 
            name='screenDrawer/myDrawer' 
            component={MyDrawer} 
            options={{
                title: 'Dashboard',
                headerShown: false
              }} 
          />
          <Stack.Screen 
            name='screenStack/documentType'
            component={DocumentType}
            options={{title: 'Document Type'}}
          />
          <Stack.Screen 
            name='screenStack/fileType'
            component={FileType}
            options={{title: 'File Type'}}
          />
          <Stack.Screen 
            name='screenStack/scanner' 
            component={Scanner} 
            options={{title: 'Scanner'}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    // </Provider>
  )
}