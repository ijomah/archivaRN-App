import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput } from 'react-native';

export default LogoutPage = () => {
    const [logout, setLogout] = useState();
    
    const handleSubmit = () => {
        console.log('Logout triggered');
    }
    return (
        <View>
            <View style={styles.logoutForm}>  
                <View style={styles.logoutBtn}>
                    <TouchableOpacity>
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}