import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';
// import { readData, readApprAndApplicTable } from "../util/dbService";
// import { Link } from 'expo-router'

const HomePage = ({navigation, route}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // let isScannerBtn = false
    const handleSubmit = () => {
        console.log('Login submitted');
    }
    
    return (
        <View>
            <View style={styles.home}>                
                <View style={styles.vendorLogoContainer}>
                   <Image
                        style={styles.vendorLogo} 
                        source={require('./../assets/archiva-home.png')} 
                    />
                    <View style={styles.navLink}>
                        {/* <Link href='/auth/login'>
                            <Text>Login Page</Text>
                        </Link> */}
                    </View>
                    {
                        route.params != undefined ?
                        <Button title="Scan" onPress={()=>{{
                            // console.log(route.params)
                            navigation.navigate('screenStack/scanner')}
                            }
                        } />
                        :
                        <Button title="Login" onPress={()=>{{
                            console.log('read', 
                            //readData()
                            // readApprAndApplicTable()
                            )
                            navigation.navigate('auth/login')}
                            }
                        } />
                    }
                    {/* <Button title="scanner" onPress={()=>{navigation.navigate('scanner')}} /> */}
                </View>

                <View style={styles.homeLine}>
                    <TouchableOpacity>
                    </TouchableOpacity>
                </View>
                <View >
                    {/* <Image 
                        style={styles.archivaLogo} 
                        source={require('../../assets/notSplash.jpg')} /> */}
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
        justifyContent: 'center',
        alignContent: 'center'
        //backgroundColor: '#F7DBB6',
        //opacity: 0.5
    },
    vendorLogo: {
        height: 250,
        width: 250,
        alignSelf: 'center',
        // marginTop: 300,
        // marginTop: '25%',
        // marginLeft: 80,
        // marginLeft: '20%',
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

export default HomePage