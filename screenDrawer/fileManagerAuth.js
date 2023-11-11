import React, {useState, useContext} from "react";
import { SafeAreaView, TouchableOpacity, View, Text, ScrollView } from "react-native";
import { hasHardwareAsync, isEnrolledAsync, authenticateAsync } from "expo-local-authentication";
import FileManager from "./fileManager";
// import { Button } from "react-native";

import LocalAuth from "../auth/localAuth";
import { FileManAuthContext } from "../contextStore/authContextApi";

const FileManagerAuth = () => {
    // const [authRes, setAuthRes] = useState(false)
    
    const authContext = useContext(FileManAuthContext);
    
    const isLoggedIn = authContext.isAuth;

    const verifyUserBiometric = async () => {
        const isCompatible = await hasHardwareAsync() 
        if(!isCompatible) {
        throw 'This device is not compatible'
        }

        const isEnrolled = await isEnrolledAsync()
        if (!isEnrolled) {
            throw 'This device is not enable for biometric capture'
        }

        var authResult = await authenticateAsync()
        if (!authResult.success) {
            throw `${authResult.error}: Authentication failed`
        }
        authContext.setIsAuth(authResult.success);
        // setAuthRes(authResult.success)
        // navigation.navigate('nestDrawer')
        // navigation.getParent('drawerNested').openDrawer();
        return 
    }
    
    return(
        <SafeAreaView>
            {
                isLoggedIn? 
                <View>
                    <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 500}}
                    >File Manager</Text>
                    
                    <FileManager /> 
                </View>
                
                :
                <LocalAuth verifyUserBiometric={verifyUserBiometric} />
            }
        </SafeAreaView>
    )
}

export default FileManagerAuth;