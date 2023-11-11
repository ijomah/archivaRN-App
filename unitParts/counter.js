import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput } from 'react-native';
//import icon for file here
function ItemsCounter({numberOfItems}) {
    // const [count, setCount] = useState(0);

    // const onIncrementCount = () => {
        // setCount(count + numberOfItems)
    // }
    return (
            <View style={styles.counter}> 
                <Text style={{fontSize: 20, textAlign: 'auto', width: '200%', fontWeight: 400}}>
                    {numberOfItems === 0? '' : numberOfItems }
                </Text>
                <Text>
                    {/* <FontAwesomeIcon icon="fa-solid fa-list-ol" size={40} /> */}
                </Text>
            </View>
    )
}

export default ItemsCounter;

const styles = StyleSheet.create({
    counter: {
        width: 50,
        height: 30,
        textAlign: ''
    }
})