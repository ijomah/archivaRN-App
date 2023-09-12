import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, Text, StyleSheet, TouchableHighlight, FlatList, TouchableOpacity } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { ALLDOCTITLES, ALLFILEINFO } from "../../util/const";
// import { useRouter } from "expo-router";

export default function FileComponents() {
    const [docsName, setDocsName] = useState([]);
    // const routing = useRouter();

    
    // getStoreDocs()
    useEffect(() => {
        const getStoreDocs = async () => {
            try {
                const titlesUnserialized =  await AsyncStorage.getItem(ALLFILEINFO) || await AsyncStorage.getItem(ALLDOCTITLES);
                // const titlesUnserialized =  await AsyncStorage.getItem(ALLDOCTITLES);
                const docsTitlesArr = JSON.parse(titlesUnserialized);
                if (docsTitlesArr !== undefined) {
                    for (titles of docsTitlesArr) {
                        setDocsName([...docsName, titles]);
                    }
                    
                    console.log(docsTitlesArr);
                }
            } catch(e) {
                console.log(e)
            }
           
        }
        getStoreDocs()
    }, [ALLFILEINFO]);
    
    console.log("filecomp props:", docsName);

    const leadToCamera = () => {
        //lead to camera page
        //Doccument title data needed to go with the navigation
        // routing.push('/scanPart/scanner');
        // routing.push('./../../scanner/scan');
    }

    // const renderStuffs = (itm) => {
    //         return (
    //             <TouchableHighlight onPress={leadToCamera}>
    //                     <View>
    //                         <Text key={itm.value}>
    //                             {itm.label}
    //                         </Text>
    //                     </View>
    //             </TouchableHighlight>
    //         )
    // }

    return (
        <ScrollView contentContainerStyle={styles.fileCompContainer} 
            // style={}
        >
            {/* <View>
                <Image source={require('../../assets/splash1.jpg')} />
            </View> */}
            <View>
                <Text>SCAN FILE COMPONENTS</Text>
            </View>
                {/* <FlatList 
                    data={docsName}
                    renderItem={renderStuffs}
                /> */}
                <View style={styles.pressable}>
                    {docsName.map((datum) => {
                        return (
                            <TouchableHighlight 
                                key={datum.value}
                                style={{borderColor: '#F7DBB6', borderWidth: 2, width: 100, alignItems: 'center', borderRadius: 20}} 
                                onPress={leadToCamera}>
                            <View>
                                <Text>
                                    {datum.label}
                                </Text>
                            </View>
                            </TouchableHighlight>
                        )
                    })}
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    fileCompContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
        
    },

    pressable: {
        alignItems: 'center',
        backgroundColor: 'skyblue'
    }
})