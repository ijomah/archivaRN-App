import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { store } from './redux/store';

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
import FileComponents from './screenStack/partsToScan';

const Stack = createNativeStackNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 110, height: 50 }}
      source={require('./assets/logoheading.png')}
    />
  );
}

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen 
            name='screenStack/home' 
            component={HomePage} 
            options={{ 
              title: 'Home',
              headerTitleAlign: 'center',
              headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          
          <Stack.Screen 
            name='auth/login' 
            component={LoginPage} 
            options={{title: 'Login',
              headerTitleAlign: 'center',
              headerTitle: (props) => <LogoTitle {...props} />
          }}
          />
          <Stack.Screen 
            name='screenDrawer/myDrawer' 
            component={MyDrawer} 
            options={{
                title: 'Dashboard',
                headerShown: false,
                headerTitleAlign: 'center',
                headerTitle: (props) => <LogoTitle {...props} />
            }} 
          />
          <Stack.Screen 
            name='screenStack/documentType'
            component={DocumentType}
            options={{title: 'Document Type',
              headerTitleAlign: 'center',
              headerTitle: (props) => <LogoTitle {...props} />
          }}
          />
          <Stack.Screen 
            name='screenStack/fileType'
            component={FileType}
            options={{title: 'File Type',
              headerTitleAlign: 'center',
              headerTitle: (props) => <LogoTitle {...props} />
          }}
          />
          <Stack.Screen 
            name='screenStack/partsToScan'
            component={FileComponents}
            options={{title: 'File Type',
              headerTitleAlign: 'center',
              headerTitle: (props) => <LogoTitle {...props} />
          }}
          />
          <Stack.Screen 
            name='screenStack/scanner' 
            component={Scanner} 
            options={{title: 'Scanner',
              headerTitleAlign: 'center',
              headerTitle: (props) => <LogoTitle {...props} />
          }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}