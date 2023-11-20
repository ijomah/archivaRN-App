import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import MyTextInput from "../unitParts/reuseTextInput";
import { ScrollView } from "react-native";



const FileDetailForm = ({setFileDetForm, errCheck, submitFileDetForm, navigation}) => {
    
    return (
        <ScrollView style={{
                        height: 700, 
                        borderWidth: 2, borderColor: 'red', marginTop: 40, 
                        borderStyle: 'solid', width: 350, borderTopLeftRadius: 70,
                        borderBottomRightRadius: 80,
                        alignSelf: 'center',
                        conentContainerStyle: {justifyContent: 'center'}}}
        >
            <View style={styles.formPage}>
                {/* <Text style={{fontSize: 20, fontWeight:500, marginBottom: 20}}>Registration Form</Text> */}
                <View style={styles.appliNo}>
                    <MyTextInput 
                        label="Application Number:"
                        inputErr={errCheck.applicationNumber}
                        inputConfig={{
                            placeholder:"Application Number",
                            keyboardType:"phone-pad",
                            onChangeText: setFileDetForm.bind(this, 'applicationNumber')
                        }}
                    />
                </View>
                <View style={styles.appliName}>
                    <MyTextInput 
                        label="Applicant Name:" 
                        inputErr={errCheck.applicationName}
                        inputConfig={{
                            placeholder:"Applicant Name",
                            onChangeText:setFileDetForm.bind(this, 'applicationName')
                        }}
                    />
                </View>
                <View style={styles.phoneNumber}>
                    <MyTextInput 
                        label="DCB Number:"
                        inputErr={errCheck.dcbNumber} 
                        inputConfig={{
                            placeholder:"DCB Nunmber:",
                            keyboardType:"phone-pad",
                            onChangeText:setFileDetForm.bind(this, 'dcbNumber')
                        }}
                    />
                </View>
                <View style={styles.houseNumber}>
                        {/* <Text></Text> */}
                        <MyTextInput 
                            style={styles.houseInput}
                            label="Approval Type:"
                            inputErr={errCheck.approvalType}
                            inputConfig={{
                                placeholder:"Approval Type:",                                
                                onChangeText:setFileDetForm.bind(this, 'approvalType')
                            }}
                        />
                    </View>

                    <View style={styles.streetName}>
                        <MyTextInput 
                            label="Approval Date:"
                            inputErr={errCheck.approvalDate}
                            keyboardType="default"
                            style={styles.StreetInput}
                            inputConfig={{
                                placeholder:"Approval Date:",
                                onChangeText:setFileDetForm.bind(this, 'approvalDate')
                            }}
                        />
                    </View>

                    <View style={styles.areaName}>
                        <MyTextInput 
                            label="Approval DO:"
                            inputErr={errCheck.approvalDO}
                            style={styles.areaInput}
                            inputConfig={{
                                placeholder:"Approval DO:",
                                keyboardType:"default",
                                onChangeText:setFileDetForm.bind(this, 'approvalDO')
                            }}
                        />
                    </View>

                    <View style={styles.state}>
                        <MyTextInput 
                            label="Application Address:"
                            inputErr={errCheck.applicationAddress}
                            style={styles.stateInput}
                            inputConfig={{
                                placeholder:"Application Address:",
                                keyboardType:"default",
                                onChangeText:setFileDetForm.bind(this, 'applicationAddress')
                            }}
                        />
                    </View>
                {/* Ability to add additional input field by the user
                Use a fontawesome icon to give the use this ability */}
                

                <View style={styles.btn}>
                    <Button 
                        title='Scan file'
                        color='#5CBFAB'
                        onPress={() =>{
                            submitFileDetForm(false);
                        }
                        }
                    />
{/*                 
                    <Button 
                        onPress={}
                        title="Submit"
                        color='#5CBFAB'
                    /> */}
                </View>

                <View style={styles.btn}>
                <Button 
                        style={styles.btn}
                        title='Scan Document'
                        color='#5C8FAB'
                        onPress={() => {
                            submitFileDetForm(true);
                        }
                        }
                    />
                </View>

                
            </View>
        </ScrollView>
    )
}

export default FileDetailForm

styles = StyleSheet.create({
    formPage: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        marginTop: 25
        
    },
    appliNo: {

    },
    input: {

    },
    appliName: {
        // backgroundColor: 'red',
    },

    btn: {
        marginTop: 5,
        color: 'red'
    }
    // applicationNo: {

    // }
})