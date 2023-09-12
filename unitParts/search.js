import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default Searcher = () => {
    return (
        <View>
            <View styles={styles.search}>
                <TextInput />
                    <Text>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </Text>
            </View>
        </View>
    )
}