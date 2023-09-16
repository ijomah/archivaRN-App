import React, { useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, ToastAndroid, ScrollView } from 'react-native';
// import { ScrollView } from "react-native-gesture-handler";

//import {apiCalls} from "../../apiCalls";
// import Card from "../unitParts/card";
import ScanChoiceModal from "../modal/scanningChoiceModal";
import CardApi from "../unitParts/cardApi";
// import { dynamicColors } from "../util/Colors";
// import  * as FileSystem  from "expo-file-system"


function DashboardPage({navigation}) {
    let docItmList = [
        // {id: 200, file: 'Certificate', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        // {id: 21, file: 'Receipt', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        // {id: 800, file: 'Invoice', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        // {id: 40, file: 'My Picture', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        // {id: 98, file: 'Important Sheet', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        // {id: 650, file: 'Light Bill', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]}
    ]

    const [documentList, setDocumentList] = useState(docItmList);
    const [isModalVisible, setIsModalVisible] = useState(false);
     
    const getData = () => {
        //newly commented
        // FileSystem.downloadAsync('http://localhost:3000/api/v1/files/single',
        //     FileSystem.documentDirectory + 'filename.png'
        // )
        // .then(({uri}) => {
        //     ToastAndroid.show(`Downloading: ${uri}`, ToastAndroid.LONG)
        //     console.log('Downloading: here is ', uri)
        // })

        //old commented
        // apiCalls('http://localhost:3000/api/v1/files/single')
        // .then(data => {
        //     console.log(data);
        //     setDocumentList(...documentList, data)
        // })
    }

    const resetModal = (boolVal) => {
        console.log('dashboard', boolVal);
        setIsModalVisible(boolVal)
        // navigation.navigate('/modal/documentType')
    }
    return (
        <View>
            
            <View style={styles.btnAdjust}>
                <View>
                    {/* This has to make an api call to retrieve
                    document titles only and categories */}
                    {/* <Button 
                        title='Tap to view'
                        color='#5C8FAB'
                        onPress={getData}
                    /> */}
                    <Button 
                        title='Scan Document'
                        color='#5C8FAB'
                        onPress={() => navigation.navigate('screenStack/documentType')}
                    />
                </View>

                <View>
                    <Button 
                        title='Scan file'
                        onPress={() =>{
                            navigation.navigate('screenStack/fileType')
                        //    setIsModalVisible(true)
                        }
                        }
                    />
                </View>
            </View>
            <Text style={{fontSize: 18, alignContent: 'center'}}>Categories of Files in your Cabinet</Text>            
            <ScrollView style={styles.AprovalPage}>
                {/* <Text>You have no file in your Cabinet yet!</Text> */}            
                <CardApi />
            </ScrollView>
            
                {/* Display data from the api call */}
{/* newly commented */}
                {/* <ScanChoiceModal modalVisible={isModalVisible} onResetModal={resetModal} navigation={navigation} /> */}

{/* newly commented */}
                {/* <View>
                    <Card 
                        flatListData={docItmList}
                    />    
                </View> */}

                
            {/* image preview or an icon should be in this card's children */}
            
        </View>
    )
}


export default DashboardPage;

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