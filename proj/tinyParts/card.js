import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default Card = () => {
    return (
        <View>
            <View style={styles.card}>
                <View>
                    <Text>Head title</Text>
                </View>
                <View >
                    <Text>Body</Text>
                </View>
            </View>
        </View>
    )
}
