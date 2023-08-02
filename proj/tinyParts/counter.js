import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
export default ItemsCounter = ({numberOfItems}) => {
    // const [count, setCount] = useState(0);

    // const onIncrementCount = () => {
        // setCount(count + numberOfItems)
    // }
    return (
        <View>
            <View style={styles.counter}> 
                <Text style={{fontSize: 20, width: '200%', fontWeight: 400}}>
                    {numberOfItems === 0? '' : numberOfItems }
                </Text>
                <Text>
                    {/* <FontAwesomeIcon icon="fa-solid fa-list-ol" size={40} /> */}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    counter: {
        width: 30,
        height: 30,
    }
})