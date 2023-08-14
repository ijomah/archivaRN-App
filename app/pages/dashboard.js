import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, ToastAndroid } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Link, useRouter } from "expo-router";
//import {apiCalls} from "../../apiCalls";
import Card from "../../proj/tinyParts/card";
import ScanChoiceModal from "../modal/scanningChoiceModal";
import { dynamicColors } from "../../util/Colors";
import  * as FileSystem  from "expo-file-system"

export default DashboardPage = () => {
    let docItmList = [
        {id: 200, file: 'Certificate', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 21, file: 'Receipt', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 800, file: 'Invoice', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 40, file: 'My Picture', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 98, file: 'Important Sheet', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 650, file: 'Light Bill', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]}
    ]

    const [documentList, setDocumentList] = useState(docItmList);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const router = useRouter();
    const getData = () => {
        FileSystem.downloadAsync('http://localhost:3000/api/v1/files/single',
            FileSystem.documentDirectory + 'filename.png'
        )
        .then(({uri}) => {
            ToastAndroid.show(`Downloading: ${uri}`, ToastAndroid.LONG)
            console.log('Downloading: here is ', uri)
        })
        // apiCalls('http://localhost:3000/api/v1/files/single')
        // .then(data => {
        //     console.log(data);
        //     setDocumentList(...documentList, data)
        // })
    }

    const resetModal = (boolVal) => {
        console.log('dashboard', boolVal);
        setIsModalVisible(boolVal)
    }
    return (
        <View>
            
            <View style={styles.btnAdjust}>
                <View>
                    {/* This has to make an api call to retrieve
                    document titles only and categories */}
                    <Button 
                        title='Tap to view'
                        color='#5C8FAB'
                        onPress={getData}
                    />
                </View>

                <View>
                    <Button 
                        title='Scan file'
                        onPress={() =>setIsModalVisible(true)}
                    />
                </View>
            </View>

            <View style={styles.AprovalPage}>
                {/* <Text>You have no file in your Cabinet yet!</Text> */}            
                <Text style={{fontSize: 18}}>Categories of Files in your Cabinet</Text>
            </View>
            
                {/* Display data from the api call */}

                <ScanChoiceModal modalVisible={isModalVisible} setModalVisible={resetModal} />

                <View>
                    <Card 
                        flatListData={docItmList}
                    />    
                </View>

                
            {/* image preview or an icon should be in this card's children */}
            
        </View>
    )
}

const styles = StyleSheet.create({
    AprovalPage: {
        // backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16)
        alignSelf: 'center',
        marginTop: 10,
    },

    btnAdjust: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }

})