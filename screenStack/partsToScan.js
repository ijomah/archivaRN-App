import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, Text, StyleSheet, TouchableHighlight, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { ALLDOCTITLES, ALLFILEINFO } from "../../util/const";
import { useSelector } from "react-redux";

export default function FileComponents({navigation}) {
    const titlesInfoArr = useSelector((state) => {
        // console.log('from State', state)
      return state.titleReducer.titlesDataFromStore.titles
    })

    
    // getStoreDocs()
    // useEffect(() => {
    //     const getStoreDocs = () => {
    //         console.log('title from redux store', titlesInfoArr);
    //     }
    //     getStoreDocs()
    // }, [titlesInfoArr]);    

    const leadToCamera = (objVal) => {
        // console.log('title from nav params', objVal);
        //lead to camera page
        //Doccument title data needed to go with the navigation
        navigation.navigate('screenStack/scanner', {
            value: objVal.value,
            docTitle: objVal.label});
    }
        
    const renderStuffs = ({item}) => {
        // console.log('title from redux store', item);
            return (
                <TouchableOpacity onPress={()=>leadToCamera(item)} 
                    style={styles.pressable} 
                >
                        {/* <View> */}
                            <Text style={styles.textSelectedStyle}>
                                {item.label}
                            </Text>
                        {/* </View> */}
                </TouchableOpacity>
            )
    }


    return (
        <SafeAreaView contentContainerStyle={styles.fileCompContainer} 
            // style={}
        >
            {/* <View>
                <Image source={require('../../assets/splash1.jpg')} />
            </View> */}
            <View>
                <Text style={{alignSelf: 'center', margin: 5, fontSize: 18, fontWeight: 400}}>SCAN FILE COMPONENTS</Text>
            </View>
                <FlatList 
                    data={titlesInfoArr}
                    renderItem={renderStuffs}
                    keyExtractor={item => item.value}
                    numColumns={2}
                    contentContainerStyle={{ alignItems: 'center'}}
                />
                {/* <View style={styles.pressable}>
                    {
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
                    }
                </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fileCompContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    pressable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        width: 150,
        margin: 5,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
  
        elevation: 2,
        borderColor: '#5C8FAB',
        borderWidth: 2
    },

    textSelectedStyle: {
        marginRight: 5,
        fontSize: 16,
      }
})