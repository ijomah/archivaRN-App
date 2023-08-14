import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput, FlatList } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ItemsCounter from './counter';
import { dynamicColors } from "../../util/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome5 } from '@expo/vector-icons';

export default Card = ({flatListData}) => {
   

    const itmsToRender = ({item}) => {
        return (
            <View 
                key={item.id}
                style={[styles.card, {borderColor: item.colour}]}  
            >
                <View>
                    <Text style={styles.cardHead}>{item.file}</Text>
                </View>
                <View>
                    <FontAwesome5 
                        name="file-image"  
                        size={54} 
                        // color="#AB906D" 
                        color={item.colour}
                    />
                </View>
                <View>
                        <Text style={styles.ItemsCounterStyling}>
                            <ItemsCounter numberOfItems={item.id} />
                        </Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.fileListStyle}>
            <FlatList 
                data={flatListData}
                renderItem={itmsToRender}
                numColumns={2}
                keyExtractor={flatListData.id}
            />  
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 140,
        borderWidth: 2,
        borderStyle: 'solid',
        // borderColor: '#' + Math.floor(Math.random()*16777215).toString(16),
        borderRadius: 20,
        color: 'white',
        padding: 5,
        margin: 10,
        alignItems: 'center'
    },
    cardHead: {
        fontSize: 18,
        // fontWeight: 300,
        textAlign: 'center'
    },

    ItemsCounterStyling: {
        // alignSelf: 'center',
        // width: 100
    },

    fileListStyle: {
        alignSelf: 'center'
    }
})
