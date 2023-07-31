import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Link, useRouter } from "expo-router";
import apiCalls from "../../apiCalls";
import Card from "../../proj/tinyParts/card";

export default DashboardPage = () => {
    const router = useRouter();
    const getData = () => {
        apiCalls('http://localhost:3000/api/v1/files/single')
        .then(data => console.log(data))
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
                    onPress={() => apiCalls(url)}
                />
            </View>
            <ScrollView>
                {/* Display data from the api call */}
                <View>
                    <Text>{'File categories from the api'}</Text>
                </View>
            </ScrollView>
            {/* <Link href='/fileType'> */}
                <View>
                    <Button 
                        title='Scan a new file'
                        onPress={() => router.push('./fileType')}
                    />
                </View>
            {/* </Link> */}
            {/* image preview or an icon should be in this card's children */}
            <Card />
        </View>
    )
}

const styles = StyleSheet.create({
    AprovalPage: {
        // backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16)
    }
})