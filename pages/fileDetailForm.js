import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, SafeAreaView } from 'react-native';
import MyTextInput from "../unitParts/reuseTextInput";
import { ScrollView } from "react-native";



const FileDetailForm = ({date, onShowDate, setFileDetForm, errCheck, submitFileDetForm, navigation}) => {
    
    return (
        <SafeAreaView 
            style={{
                // flex:1,
                // height: 700, 
                // borderWidth: 2, borderColor: 'red', 
                // marginTop: 40, 
                // borderStyle: 'solid', width: 350, borderTopLeftRadius: 70,
                // borderBottomRightRadius: 80,
                // alignSelf: 'center',
                // conentContainerStyle: {justifyContent: 'center'}
            }}
        >
            <ScrollView
                style={{
                    // flex:1,
                    // height: 700, 
                    borderWidth: 2, borderColor: 'red', 
                    // marginTop: 40, 
                    // borderStyle: 'solid', 
                    width: 350, 
                    borderTopLeftRadius: 70,
                    // borderBottomRightRadius: 80,
                    alignSelf: 'center',
                    // conentContainerStyle: {justifyContent: 'center'}
                }}
            >
                <View style={styles.formPage}>
                    {/* <Text style={{fontSize: 20, fontWeight:500, marginBottom: 20}}>Registration Form</Text> */}
                    <View style={styles.appliNo}>
                        <MyTextInput 
                            label="Application Number:"
                            inputErr={errCheck.applicationNumber}
                            inputConfig={{
                                placeholder:"Application Number",
//                                keyboardType:"phone-pad",
                                onChangeText: setFileDetForm.bind(this, 'applicationNumber')
                            }}
                        />
                    </View>
                    {/* <View style={styles.appliName}>
                        <MyTextInput 
                            label="Applicant Name:" 
                            inputErr={errCheck.applicationName}
                            inputConfig={{
                                placeholder:"Applicant Name",
                                onChangeText:setFileDetForm.bind(this, 'applicationName')
                            }}
                        />
                    </View> */}
                    <View style={styles.appliName}>
                        <MyTextInput 
                            label="First Name:" 
                            inputErr={errCheck.fName}
                            inputConfig={{
                                placeholder:"First name",
                                onChangeText:setFileDetForm.bind(this, 'fName')
                            }}
                        />
                    </View>
                    <View style={styles.appliName}>
                        <MyTextInput 
                            label="Last Name:" 
                            inputErr={errCheck.lName}
                            inputConfig={{
                                placeholder:"Last Name",
                                onChangeText:setFileDetForm.bind(this, 'lName')
                            }}
                        />
                    </View>
                    <View style={styles.phoneNumber}>
                        <MyTextInput 
                            label="DCB Number:"
                            inputErr={errCheck.dcbNumber} 
                            inputConfig={{
                                placeholder:"DCB Nunmber:",
  //                              keyboardType:"phone-pad",
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
                                    value: date.toLocaleDateString(),
                                    placeholder:"Approval Date:",
                                    onChangeText:setFileDetForm.bind(this, 'approvalDate')
                                }}
                            />
                            <TouchableOpacity 
                                style={styles.dateBtn} 
                                onPress={onShowDate}
                            >
                                <Text>Date picker!</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.areaName}>
                            <MyTextInput 
                                label="Approval DO:"
                                inputErr={errCheck.approvalDo}
                                style={styles.areaInput}
                                inputConfig={{
                                    placeholder:"Approval DO:",
                                    keyboardType:"default",
                                    onChangeText:setFileDetForm.bind(this, 'approvalDo')
                                }}
                            />
                        </View>

                        {/* <View style={styles.appliName}>
                            <MyTextInput 
                                label= 'Date file was Opened:'
                                inputErr={errCheck.fileYear}
                                style={styles.input}
                                inputConfig={{
                                    value: date.toLocaleDateString(),
                                    placeholder:"File Year:",
                                    onChangeText: setFileDetForm.bind(this, 'fileYear')
                                }}
                            />
                            <TouchableOpacity 
                                style={styles.dateBtn} 
                                onPress={onShowDate}
                            >
                                <Text>Date picker!</Text>
                            </TouchableOpacity>
                        </View> */}

                        {/* <View style={styles.state}>
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
                        </View> */}

    {/* Address things                     */}
                        
                    <View>
                        <View style={styles.houseNumber}>
                            <MyTextInput 
                                style={styles.houseInput}
                                label="House Number:"
                                inputErr={errCheck.houseNo}
                                inputConfig={{
                                    placeholder:"House Number:",
                                    keyboardType:"phone-pad",
                                    onChangeText:setFileDetForm.bind(this, 'houseNo')
                                }}
                            />
                        </View>

                        <View style={styles.streetName}>
                            <MyTextInput 
                                label="Street Name:"
                                inputErr={errCheck.streetName}
                                keyboardType="default"
                                style={styles.StreetInput}
                                inputConfig={{
                                    placeholder:"Street Name:",
                                    onChangeText:setFileDetForm.bind(this, 'streetName')
                                }}
                            />
                        </View>

                        <View style={styles.areaName}>
                            <MyTextInput 
                                label="Area Name:"
                                inputErr={errCheck.areaName}
                                style={styles.areaInput}
                                inputConfig={{
                                    placeholder:"Area Name:",
                                    keyboardType:"default",
                                    onChangeText:setFileDetForm.bind(this, 'areaName')
                                }}
                            />
                        </View>

                        <View style={styles.state}>
                            <MyTextInput 
                                label="State:"
                                inputErr={errCheck.state}
                                style={styles.stateInput}
                                inputConfig={{
                                    placeholder:"State:",
                                    keyboardType:"default",
                                    onChangeText:setFileDetForm.bind(this, 'state')
                                }}
                            />
                        </View>

                        <View style={styles.country}>
                            <MyTextInput 
                                label="Country:"
                                inputErr={errCheck.country}
                                style={styles.countryInput}
                                inputConfig={{
                                    placeholder:"Country:",
                                    onChangeText:setFileDetForm.bind(this, 'country')
                                }}
                            />
                        </View>

                        <View style={styles.countryCode}>
                            <MyTextInput 
                                label="Zip Code:"
                                inputErr={errCheck.zipCode}
                                style={styles.countryCodeInput}
                                inputConfig={{
                                    placeholder:"Zip Code:",
                                    keyboardType:"number-pad",
                                    onChangeText:setFileDetForm.bind(this, 'zipCode')
                                }}
                            />
                        </View>
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
        </SafeAreaView>
    )
}

export default FileDetailForm

styles = StyleSheet.create({
    formPage: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
      marginTop: '5%'
        
    },
    dateBtn: {
        height:23, 
        marginBottom:3, 
        alignSelf:'flex-end', 
        alignItems:'center', 
        width:100, 
        backgroundColor:'#5CBFAB'
    },
    input: {

    },
    appliName: {
        // backgroundColor: 'red',
    },

    btn: {
        marginTop: '2%',
        color: 'red'
    }
    // applicationNo: {

    // }
})