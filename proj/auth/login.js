import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = () => {
        console.log('Login submitted');
    }
    return (
        <View>
            <View style={styles.loginForm}>
                <Text>
                    Login Form
                    <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
                </Text>
                <View style={styles.loginEmail}>
                    <Text>Email:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="joe@mail.com"
                        value={email}
                        onChangeText={setEmail} 
                    />
                </View>
                <View style={styles.loginPass}>
                    <Text>Password:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.loginBtn}>
                    <TouchableOpacity>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}