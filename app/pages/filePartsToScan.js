import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableHighlight } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ALLDOCTITLES } from "../../util/const";
import { useRouter } from "expo-router";

export default function FileComponents() {
    const [docsName, setDocsName] = useState([{}]);
    const routing = useRouter();

    const getStoreDocs = async () => {
        try {
            const titlesUnserialized =  await AsyncStorage.getItem(ALLDOCTITLES);
            const docsTitlesArr = JSON.parse(titlesUnserialized);
            if (docsTitlesArr !== undefined) {
                setDocsName([...docsName, docsTitlesArr]);
                console.log(docsTitlesArr);
            }
        } catch(e) {
            console.log(e)
        }
       
    }

    useEffect(getStoreDocs, []);
    console.log("filecomp props:", docsName);
    const leadToCamera = () => {
        //lead to camera page
        //Doccument title data needed to go with the navigation
        routing.push('./../scanPart/scanner');
    }
    return (
        <View style={styles.fileCompContainer}>
            {/* <View>
                <Image source={require('../../assets/splash1.jpg')} />
            </View> */}
            {/* <View>
                <Text>SCAN FILE COMPONENTS</Text>
            </View> */}
            <View>
                <Text>{docsName.map(
                            (itm) => {
                                console.log("itm from Filecomp", itm)
                                itm.map((datum) => {
                                    return (
                                        <TouchableHighlight
                                            onPress={leadToCamera}
                                        >
                                            {/* <Link href='/scanPart/beforeScan'> */}
                                                <View>
                                                    <Text 
                                                        key={datum.value}
                                                    >
                                                        {datum.label}
                                                    </Text>
                                                </View>
                                            {/* </Link> */}
                                        </TouchableHighlight>
                                    )
                                })
                            
                        })}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fileCompContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
        
    }
})