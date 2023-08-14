import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Link } from 'expo-router'

export default HomePage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = () => {
        console.log('Login submitted');
    }
    return (
        <View>
            <View style={styles.home}>                
                <View style={styles.vendorLogoContainer}>
                   <Image
                        style={styles.vendorLogo} 
                        source={require('../../assets/icon.png')} 
                    />
                    <View style={styles.navLink}>
                        <Link href='/auth/login'>
                            <Text>Login Page</Text>
                        </Link>
                    </View>
                </View>

                <View style={styles.homeLine}>
                    <TouchableOpacity>
                    </TouchableOpacity>
                </View>
                <View >
                    <Image 
                        style={styles.archivaLogo} 
                        source={require('../../assets/notSplash.jpg')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        height: 780,
        width: 410,
        borderColor: '#B7E0F7',
        borderWidth: 1,
        //backgroundColor: '#F7DBB6',
        //opacity: 0.5
    },
    vendorLogo: {
        height: 250,
        width: 250,
        marginTop: 300,
        marginLeft: 80,
        borderRadius: 20
    },

    vendorLogoContainer: {
        //backgroundColor: '#5CBFAB',
        // height: 100
    },
    navLink: {
        backgroundColor: '#B7E0F7',
        width: 90,
        alignItems: 'center',
        alignSelf: 'center',
        // height: 500
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FFEDD6',
        padding: 2,
    },
    archivaLogo: {
        height: 100,
        width: 100,
        marginLeft: 300,
        marginTop: 116,
        borderWidth: 3,
        borderColor: 'skyblue',
        borderRadius: 20
    }
})