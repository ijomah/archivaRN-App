import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput } from 'react-native';

export default ScannedImgCounter = (props) => {
    const [count, setCount] = useState();

    const saveCount = () => {
        setCount(props.numberOfScannedImg)
    }
    return (
        <View>
            <View style={styles.counter}>
                <Text>{count}</Text>
                <Text>
                    <FontAwesomeIcon icon="fa-solid fa-list-ol" />
                </Text>
            </View>
        </View>
    )
}