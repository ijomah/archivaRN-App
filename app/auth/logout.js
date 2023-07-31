import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput, Button } from 'react-native';
import { router } from 'expo-router';

export default LogoutPage = () => {
    const [logout, setLogout] = useState();
    
    const handleSubmit = () => {
        console.log('Logout triggered');
        router.replace('/login');
    }
    return (
        <View>
            <View style={styles.logoutForm}>  
                <TouchableOpacity onPress={handleSubmit}>
                    <View style={styles.logoutBtn}>
                        <Button
                            title="Log out"
                            color='#AB906D'
                        />
                        <Text>Log Out</Text>
                    
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}