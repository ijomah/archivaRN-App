import { useState } from "react";
import { Text, SafeAreaView, StyleSheet, Image, View } from "react-native";

export default function ScansToSave() {
    const [imgscanned, setImgScanned] = useState();

    return (
        <SafeAreaView>
            <View>
                <Image source={{uri: ''}} />
            </View>
        </SafeAreaView>
    )
}