import React from "react";
import { View, Text, SafeAreaView, Button, TextInput } from "react-native";

const MyTextInput = ({label, inputConfig}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={styles.input} {...inputConfig} />
        </View>
    )
}

export default MyTextInput;

const styles = StyleSheet.create({
    input: {
        borderWidth: 3,
        borderColor: '#5CBFAB',
        height: 45,
        borderRadius: 10,
        padding: 15
    },
})