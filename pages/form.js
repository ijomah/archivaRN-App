import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import MyTextInput from "../unitParts/reuseTextInput";

export default FormPage = () => {
    return (
        <View>
            <View style={styles.formPage}>
                <View style={styles.appliNo}>
                    {/* <Text>File Number:</Text> */}
                    <MyTextInput
                        style={styles.input}
                        inputConfig={{
                            placeholder:"File Nunmber:",
                            // value:{applicationNo},
                            // onChangeText:{setApplyNo}
                        }}
                        
                    />
                </View>
                <View style={styles.appliName}>
                    {/* <Text>File Type:</Text> */}
                    <MyTextInput
                        style={styles.input}
                        inputConfig={{
                            placeholder:"File Type:",
                            // value:{applicationNo},
                            // onChangeText:{setApplyNo}
                        }}
                    />
                </View>
                <View style={styles.appliName}>
                    {/* <Text>File Name:</Text> */}
                    <MyTextInput
                        style={styles.input}
                        inputConfig={{
                            placeholder:"File Name:",
                            // value:{applicationNo},
                            // onChangeText:{setApplyNo}
                        }}
                    />
                </View>
                
                <View style={styles.appliName}>
                    {/* <Text>File Description:</Text> */}
                    <MyTextInput
                        style={styles.input}
                        inputConfig={{
                            placeholder:"File Description:",
                            // value:{applicationNo},
                            // onChangeText:{setApplyNo}
                        }}
                    />
                </View>
                <View style={styles.appliName}>
                    {/* <Text>Year file was Opened:</Text> */}
                    <MyTextInput
                        style={styles.input}
                        inputConfig={{
                            placeholder:"File Year:",
                            // value:{applicationNo},
                            // onChangeText:{setApplyNo}
                        }}
                    />
                </View>
                {/* Ability to add additional input field by the user
                Use a fontawesome icon to give the use this ability */}
                <View>
                    <TouchableOpacity>
                        {/* <Text>Submit</Text> */}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

styles = StyleSheet.create({
    formPage: {

    },
    appliNo: {

    },
    input: {

    },
    appliName: {

    }
})