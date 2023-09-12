import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import MyTextInput from "../unitParts/reuseTextInput";

export default RegForm = () => {
    return (
        <View>
            <View style={styles.formPage}>
                <View style={styles.appliNo}>
                    <MyTextInput 
                        label="First Name:"
                        inputConfig={{
                            placeholder:"First Name"
                            // value={applicationNo}
                            // onChangeText={setApplyNo}
                        }}
                    />
                </View>
                <View style={styles.appliName}>
                    <MyTextInput 
                        label="Last Name:" 
                        inputConfig={{
                            placeholder:"Last Name"
                            // value={applicationNo}
                            // onChangeText={setApplyNo}
                        }}
                    />
                </View>
                <View style={styles.phoneNumber}>
                    <MyTextInput 
                        label="Phone Number:" 
                        inputConfig={{
                            placeholder:"Phone Nunmber:",
                            keyboardType:"phone-pad"
                            // value={applicationNo}
                            // onChangeText={setApplyNo}
                        }}
                    />
                </View>

                <View>
                    <View style={styles.houseNumber}>
                        <Text></Text>
                        <MyTextInput 
                            style={styles.houseInput}
                            label="House Number:"
                            inputConfig={{
                                placeholder:"House Number:",
                                // value={applicationNo}
                                // onChangeText={setApplyNo}
                            }}
                        />
                    </View>

                    <View style={styles.streetName}>
                        <MyTextInput 
                            label="Street Name:"
                            keyboardType="default"
                            style={styles.StreetInput}
                            inputConfig={{
                                placeholder:"Street Name:"
                                // value={applicationNo}
                                // onChangeText={setApplyNo}
                            }}
                        />
                    </View>

                    <View style={styles.areaName}>
                        <MyTextInput 
                            label="Area Name:"
                            style={styles.areaInput}
                            inputConfig={{
                                placeholder:"Area Name:",
                                keyboardType:"default"
                                // value={applicationNo}
                                // onChangeText={setApplyNo}
                            }}
                        />
                    </View>

                    <View style={styles.state}>
                        <TextInput 
                            label="State:"
                            style={styles.stateInput}
                            inputConfig={{
                                placeholder:"State:",
                                keyboardType:"default"
                                // value={applicationNo}
                                // onChangeText={setApplyNo}
                            }}
                        />
                    </View>

                    <View style={styles.country}>
                        <TextInput 
                            label="Country:"
                            style={styles.countryInput}
                            inputConfig={{
                                placeholder:"Country:"
                                // value={applicationNo}
                                // onChangeText={setApplyNo}
                            }}
                        />
                    </View>

                    <View style={styles.countryCode}>
                        <TextInput 
                            label="Country Code:"
                            style={styles.countryCodeInput}
                            inputConfig={{
                                placeholder:"Country Code:",
                                keyboardType:"number-pad"
                                // value={applicationNo}
                                // onChangeText={setApplyNo}
                            }}
                        />
                    </View>
                </View>
                
                
                    {/* <View style={styles.appliName}>
                        <Text>Year file was Opened:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Application Nunmber:"
                            // value={applicationNo}
                            // onChangeText={setApplyNo}
                        />
                    </View> */}
                {/* Ability to add additional input field by the user
                Use a fontawesome icon to give the use this ability */}
                <View>
                    <TouchableOpacity>
                        <Text>Submit</Text>
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