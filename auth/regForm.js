import React, { useState } from "react";
import { StyleSheet, Pressable, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';

import { PickDate } from "../unitParts/date";

import MyTextInput from "../unitParts/reuseTextInput";

const RegForm = ({date, onShowDate, setApplyNo, submitForm, errInData}) => {
    
    return (
        <SafeAreaView style={{conentContainerStyle: {justifyContent: 'center'}}}>
        <ScrollView>
            <View style={styles.formPage}>
                <Text style={{fontSize: 20, fontWeight:500, marginBottom: 20}}>Registration Form</Text>
                <View style={styles.appliNo}>
                    <MyTextInput 
                        label="First Name:"
                        inputErr={errInData.fname}
                        inputConfig={{
                            placeholder:"First Name",
                            onChangeText: setApplyNo.bind(this, 'fName')
                        }}
                    />
                </View>
                <View style={styles.appliName}>
                    <MyTextInput 
                        label="Last Name:" 
                        inputErr={errInData.lname}
                        inputConfig={{
                            placeholder:"Last Name",
                            onChangeText:setApplyNo.bind(this, 'lName')
                        }}
                    />
                </View>
                <View style={styles.appliName}>
                    <MyTextInput 
                        label="email:" 
                        inputErr={errInData.lname}
                        inputConfig={{
                            placeholder:"email",
                            onChangeText:setApplyNo.bind(this, 'email')
                        }}
                    />
                </View>
                <View style={styles.appliName}>
                    <MyTextInput 
                        label="password:" 
                        inputErr={errInData.lname}
                        inputConfig={{
                            placeholder:"password",
                            secureTextEntry: true,
                            onChangeText:setApplyNo.bind(this, 'password')
                        }}
                    />
                </View>
                <View style={styles.phoneNumber}>
                    <MyTextInput 
                        label="Phone Number:"
                        inputErr={errInData.phoneNo} 
                        inputConfig={{
                            placeholder:"Phone Nunmber:",
                            keyboardType:"phone-pad",
                            onChangeText:setApplyNo.bind(this, 'phoneNo')
                        }}
                    />
                </View>

                <View>
                    <View style={styles.houseNumber}>
                        <MyTextInput 
                            style={styles.houseInput}
                            label="House Number:"
                            inputErr={errInData.houseNo}
                            inputConfig={{
                                placeholder:"House Number:",
                                keyboardType:"phone-pad",
                                onChangeText:setApplyNo.bind(this, 'houseNo')
                            }}
                        />
                    </View>

                    <View style={styles.streetName}>
                        <MyTextInput 
                            label="Street Name:"
                            inputErr={errInData.streetName}
                            keyboardType="default"
                            style={styles.StreetInput}
                            inputConfig={{
                                placeholder:"Street Name:",
                                onChangeText:setApplyNo.bind(this, 'streetName')
                            }}
                        />
                    </View>

                    <View style={styles.areaName}>
                        <MyTextInput 
                            label="Area Name:"
                            inputErr={errInData.areaName}
                            style={styles.areaInput}
                            inputConfig={{
                                placeholder:"Area Name:",
                                keyboardType:"default",
                                onChangeText:setApplyNo.bind(this, 'areaName')
                            }}
                        />
                    </View>

                    <View style={styles.state}>
                        <MyTextInput 
                            label="State:"
                            inputErr={errInData.state}
                            style={styles.stateInput}
                            inputConfig={{
                                placeholder:"State:",
                                keyboardType:"default",
                                onChangeText:setApplyNo.bind(this, 'state')
                            }}
                        />
                    </View>

                    <View style={styles.country}>
                        <MyTextInput 
                            label="Country:"
                            inputErr={errInData.country}
                            style={styles.countryInput}
                            inputConfig={{
                                placeholder:"Country:",
                                onChangeText:setApplyNo.bind(this, 'country')
                            }}
                        />
                    </View>

                    <View style={styles.countryCode}>
                        <MyTextInput 
                            label="Zip Code:"
                            inputErr={errInData.countryCode}
                            style={styles.countryCodeInput}
                            inputConfig={{
                                placeholder:"Zip Code:",
                                keyboardType:"number-pad",
                                onChangeText:setApplyNo.bind(this, 'zipCode')
                            }}
                        />
                    </View>
                </View>
                
                <View 
                    // style={styles.appliName}
                    >
                        <Pressable onPress={onShowDate}>
                            <MyTextInput 
                                label= 'Date file was Opened:'
                                inputErr={errInData.fileYear}
                                // style={styles.input}
                                style={{width:50}}
                                inputConfig={{
                                    placeholder:"File Year:",
                                    value: date.toLocaleDateString(),
                                    onChangeText: setApplyNo.bind(this, 'fileYear')
                                }}
                            />         
                        </Pressable>               
                        {/* <TouchableOpacity style={{height:23, marginBottom:3, alignSelf:'flex-end', alignItems:'center', width:100, backgroundColor:'#5CBFAB'}} >
                            <Text>Date picker!</Text>
                        </TouchableOpacity> */}
                    </View>
                {/* Ability to add additional input field by the user
                Use a fontawesome icon to give the use this ability */}
                <View>
                    <Button 
                        onPress={submitForm}
                        title="Submit"
                        color='#5CBFAB'
                    />
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default RegForm

styles = StyleSheet.create({
    formPage: {
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        // backgroundColor: 'red'
        
    },
    appliNo: {

    },
    input: {

    },
    appliName: {

    },
    // applicationNo: {

    // }
})