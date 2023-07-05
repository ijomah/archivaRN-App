import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput } from 'react-native';

export default Counter = () => {
    const [count, setCount] = useState();
    return (
        <View>
            <View style={styles.counter}>
                <Text>{'2'}</Text>
                <Text>
                    <FontAwesomeIcon icon="fa-solid fa-list-ol" />
                </Text>
            </View>
        </View>
    )
}