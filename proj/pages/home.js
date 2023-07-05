import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default HomePage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = () => {
        console.log('Login submitted');
    }
    return (
        <View>
            <View style={styles.home}>                
                <View style={styles.vendorLogo}>
                   <Image source={'./asset/...'} />
                </View>

                <View style={styles.homeLine}>
                    <TouchableOpacity>
                    </TouchableOpacity>
                </View>
                <View style={styles.archivaLogo}>
                    <Image source={'./asset/...'} />
                </View>
            </View>
        </View>
    )
}