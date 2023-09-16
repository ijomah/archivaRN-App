import React from "react";
import { Image, View, Text } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

function CardApi() {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: 380, backgroundColor: 'white', paddingVertical: 14, borderRadius: 10}}>
            <View>
                <Image 
                    style={{width: 120, height: 120, borderRadius: 10}}
                    source={require('./../assets/bgpixel.jpg')} />
            </View>
            <View style={{justifyContent: 'space-between', alignContent: 'center'}}>
                <View style={{}}>
                    <Text>{'Scanned_file_' + new Date().getTime() + '.jpg' + ' '}</Text>
                    <Text>{new Date().toDateString()}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: "space-between", width: 150}}>
                    <AntDesign name="sharealt" size={24} color="black" />
                    <FontAwesome name="edit" size={24} color="black" />
                    <AntDesign name="delete" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}

export default CardApi;