import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Link, useRouter } from "expo-router";
import apiCalls from "../../apiCalls";
import Card from "../../proj/tinyParts/card";
import { dynamicColors } from "../../util/Colors";

export default DashboardPage = () => {
    let docItmList = [
        {id: 200, file: 'Certificate', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 2, file: 'Receipt', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 80000, file: 'Invoice', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 4, file: 'My Picture', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 9, file: 'Important Sheet', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 650, file: 'Light Bill', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]}
    ]

    const [documentList, setDocumentList] = useState(docItmList);
    const router = useRouter();
    const getData = () => {
        apiCalls('http://localhost:3000/api/v1/files/single')
        .then(data => {
            console.log(data);
            setDocumentList(...documentList, data)
        })
    }
    return (
        <View>
            <View style={styles.AprovalPage}>
                {/* <Text>You have no file in your Cabinet yet!</Text> */}            
                <Text>Categories of Files in your Cabinet</Text>
            </View>
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
                    title='Scan a new file'
                    onPress={() => router.push('./fileType')}
                />
            </View>
            
            
                {/* Display data from the api call */}
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
    }
})