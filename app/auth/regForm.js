import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default RegForm = () => {
    return (
        <View>
            <View style={styles.formPage}>
                <View style={styles.appliNo}>
                    <Text>First Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        // value={applicationNo}
                        // onChangeText={setApplyNo}
                    />
                </View>
                <View style={styles.appliName}>
                    <Text>Last Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        // value={applicationNo}
                        // onChangeText={setApplyNo}
                    />
                </View>
                <View style={styles.phoneNumber}>
                    <Text>Phone Number:</Text>
                    <TextInput
                        style={styles.PhoneInput}
                        placeholder="Phone Nunmber:"
                        // value={applicationNo}
                        // onChangeText={setApplyNo}
                    />
                </View>

                <View>
                    <View style={styles.houseNumber}>
                        <Text>House Number:</Text>
                        <TextInput
                            style={styles.houseInput}
                            placeholder="House Number:"
                            // value={applicationNo}
                            // onChangeText={setApplyNo}
                        />
                    </View>

                    <View style={styles.streetName}>
                        <Text>Street Name:</Text>
                        <TextInput
                            style={styles.StreetInput}
                            placeholder="Street Name:"
                            // value={applicationNo}
                            // onChangeText={setApplyNo}
                        />
                    </View>

                    <View style={styles.areaName}>
                        <Text>Area Name:</Text>
                        <TextInput
                            style={styles.areaInput}
                            placeholder="Area Name:"
                            // value={applicationNo}
                            // onChangeText={setApplyNo}
                        />
                    </View>

                    <View style={styles.state}>
                        <Text>State:</Text>
                        <TextInput
                            style={styles.stateInput}
                            placeholder="State:"
                            // value={applicationNo}
                            // onChangeText={setApplyNo}
                        />
                    </View>

                    <View style={styles.country}>
                        <Text>Country:</Text>
                        <TextInput
                            style={styles.countryInput}
                            placeholder="Country:"
                            // value={applicationNo}
                            // onChangeText={setApplyNo}
                        />
                    </View>

                    <View style={styles.countryCode}>
                        <Text>Country Code:</Text>
                        <TextInput
                            style={styles.countryCodeInput}
                            placeholder="Country Code:"
                            // value={applicationNo}
                            // onChangeText={setApplyNo}
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