import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default MenuBox = () => {
    return (
        <View>
            <Text>
                Menu
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </Text>
            <View style={styles.MenuBox}>
                <View>
                    <Text>Light/Dark Mode</Text>
                    <Text>
                        Dark Mode
                        <FontAwesomeIcon icon="fa-solid fa-moon" />
                    </Text>
                    
                    <Text>
                        Light Mode
                        <FontAwesomeIcon icon="fa-regular fa-sun" />
                    </Text>
                    
                </View>
                
                <Text>
                    User Name
                    <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                </Text>
                <Text>
                    Check Submission Log
                    <FontAwesomeIcon icon="fa-solid fa-file-import" />
                </Text>
                <Text>
                    File Manager
                    <FontAwesomeIcon icon="fa-regular fa-folder-open" />
                </Text>
                <Text>
                    Settings
                    <FontAwesomeIcon icon="fa-solid fa-gear" />
                </Text>
                <Text>
                    Logout
                    <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                </Text>
            </View>
        </View>
    )
}