import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Button, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const MyTextInput = ({label, inputErr, inputConfig}) => {
    // console.log('from custom input', inputConfig)

    return (
        // <View>
        //     <Text>{label}</Text>
        //     <TextInput style={styles.input} {...inputConfig} />
        // </View>
        <SafeAreaView style={{flex: 0.0001, flexDirection:'row'}}>
            <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>{label}</Text>
                        <TextInput {...inputConfig}
                            style={styles.input}
                            // placeholder="joe@mail.com"
                            // value={email}
                            // onChangeText={handleChangeEmail} 
                            // //autoComplete=""
                            // cursorColor='#FFEDD6'
                        />
                    </View>
                    {inputErr === undefined? '' :
                        <TouchableOpacity style={{justifyContent: 'center',}}>
                            {inputErr && 
                                <MaterialIcons 
                                    name="error-outline" 
                                    size={32} 
                                    color="red" 
                                    style={{marginTop: 20}}
                                />   
                            }
                            {/* {!inputErr &&
                                <MaterialCommunityIcons 
                                    name="checkbox-marked-circle-outline" 
                                    size={32} 
                                    color="#5CBFAB"
                                    style={{marginTop: 20}}
                                />
                                } */}
                        </TouchableOpacity>
                    }
        </SafeAreaView>
    )
}

export default MyTextInput;

// const styles = StyleSheet.create({
//     input: {
//         borderWidth: 3,
//         borderColor: '#5CBFAB',
//         height: 45,
//         borderRadius: 10,
//         padding: 15
//     },
// })

const styles = StyleSheet.create({
    loginBox:  {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginForm: {
        // backgroundColor: '#B7E0F7',
        width: '80%',
        borderColor: '#5CBFAB',
        borderWidth: 4,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    inputContainer: {
        width: 250,
        height: 75
    },
    loginPassword: {
        width: 250,
        height: 75,
        margin: 5,
        
    },
    input: {
        borderWidth: 3,
        // borderColor: '#FFEDD6',
        borderColor: '#5CBFAB',
        height: 45,
        borderRadius: 10,
        padding: 15
    },
    inputLabel: {
        fontSize: 20,
    },
    loginHeadTxt: {
        fontSize: 30,
        height: 60
    },
    loginSubmitTxt: {
        fontSize: 20,
        textAlign: 'center'
    },
    loginBtn: {
        // borderWidth: 3,
        // borderColor: '#FFEDD6',
        width: '100%',
        borderRadius: 10,
        margin: 5,
        height: 50

    },
    loginIcon: {
        
    }
})