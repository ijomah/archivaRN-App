import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


function FileManagerFingerPrintAuth() {
    const navigateFromFileManager = useNavigation();
    return (
        // fix a conditional here
        <SafeAreaView>
            {
            <>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="fingerprint" size={24} color="black" />
                </TouchableOpacity>
                <View>
                    <MaterialCommunityIcons name="fingerprint-off" size={24} color="black" />
                </View>
            </>
            }   
        </SafeAreaView>
    )
}

export default FileManagerFingerPrintAuth;