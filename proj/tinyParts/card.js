import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput, FlatList } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ItemsCounter from './counter';
import { dynamicColors } from "../../util/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

export default Card = () => {
    let itmList = [
        {id: 1, file: 'Vendor Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 2, file: 'Patient Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 3, file: 'Staff Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 4, file: 'Admin Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 5, file: 'Lab   Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 6, file: 'General Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]}
    ]

    const itmsToRender = ({item}) => {
        return (
            <View 
                key={item.id}
                style={[styles.card, {backgroundColor: item.colour}]}  
            >
                <View>
                    <Text style={styles.cardHead}>{item.file}</Text>
                </View>
                <View>
                    {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> */}
                </View>
                <View>
                        <Text style={styles.ItemsCounterStyling}>
                            <ItemsCounter numberOfItems={"10"} />
                        </Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.fileListStyle}>
            <FlatList 
                data={itmList}
                renderItem={itmsToRender}
                numColumns={2}
                keyExtractor={itmList.id}
                
            />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 140,
        //backgroundColor: dynamicColors[Math.floor(Math.random()*dynamicColors.length)],
        // borderBottomWidth: 4,
        // borderStyle: 'solid',
        // borderColor: dynamicColors[Math.floor(Math.random()*dynamicColors.length)],
        // borderColor: '#' + Math.floor(Math.random()*16777215).toString(16),
        borderRadius: 20,
        // opacity: 0.8,
        color: 'white',
        padding: 5,
        margin: 10,

        // alignSelf: 'center',
        // alignItems: 'center'
    },
    cardHead: {
        fontSize: 32,
        fontWeight: 500,
        textAlign: 'center'
    },

    ItemsCounterStyling: {
        alignSelf: 'center'
    },

    fileListStyle: {
        alignSelf: 'center'
    }
})
