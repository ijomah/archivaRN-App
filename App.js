import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import FileManagerContextAuthProvider  from './contextStore/fileContextAuthWrapper';

import HomePage from './screenStack/home';
import LoginPage from './auth/login';
import MyDrawer from './screenDrawer/myDrawer';
import DocumentType from './screenStack/documentType';
import FileType from './screenStack/fileType';
// import FileComponents from './pages/partsToScan';
// import FileManager from './pages/fileManager';

import { Image, StatusBar, View } from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';
import Scanner from './screenStack/scanner';
import FileComponents from './screenStack/partsToScan';
import ScanWithCamera from './screenStack/scanWithCamera'
import scanPreview from './scanPart/scanPreview';
import ManageRegForm from './auth/manageRegForm';
import ManageFileDetail from './pages/manageFileDetForm';
import DocPreview from './screenStack/docPreview';
import { dbInit, readUserTable } from './util/dbService';
import { UserIdContext } from './contextStore/userIdContext';
// import LogoTitle from './unitParts/headerLogo';

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
 const [userDbId, setUserDbId] = useState()
  useEffect(() => {
    readUserTable().then((dbId) => {
      setUserDbId(dbId.rows._array[0].dbuser_id)
      // let dbUserId = dbId.rows._array[0].dbuser_id 
      // return dbUserId
    })
    dbInit()
      .then(() => {
        //console.log('db is ready!');
      //  console.log('db reader', readData())
      })
      .catch((err) => {
        console.log(err)
      });
 }, [])

  return (
    <FileManagerContextAuthProvider>
      <UserIdContext.Provider value={userDbId}>
      <Provider store={store}>
        <NavigationContainer>
        <StatusBar backgroundColor="#fb6161"/>
          <Stack.Navigator initialRouteName='home'>
            <Stack.Screen 
              name='screenStack/home' 
              component={HomePage} 
              options={{ 
                title: 'Home',
                headerTitleAlign: 'center',
                headerTitle: (props) => <LogoTitle {...props} /> 
              }}
            />
            
            <Stack.Screen 
              name='auth/login' 
              component={LoginPage} 
              options={{
                title: 'Login',
                headerTitleAlign: 'center',
                headerTitle: (props) => <LogoTitle {...props} />
              }}
            />
            <Stack.Screen 
              name='auth/manReg' 
              component={ManageRegForm} 
              options={{title: 'Registration Form',
                headerTitleAlign: 'center',
                headerTitle: (props) => <LogoTitle {...props} />
            }}
            />
            <Stack.Screen
              name='pages/manFileDetail'
              component={ManageFileDetail}
              options={{
                title: 'File Form',
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
              name='screenStack/docPreview'
              component={DocPreview}
              options={{title: 'Preview',
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
              name='screenStack/scanWithCamera'
              component={ScanWithCamera}
              options={{
                title: 'Scanner',

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
            <Stack.Screen 
              name='scanPart/scanPreview' 
              component={scanPreview} 
              options={{title: 'Preview',
                headerTitleAlign: 'center',
                headerTitle: (props) => <LogoTitle {...props} />
            }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      </UserIdContext.Provider>
    </FileManagerContextAuthProvider>
  )
}