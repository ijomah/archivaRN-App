import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default FormPage = () => {
    return (
        <View>
            <View style={styles.formPage}>
                <View style={styles.appliNo}>
                    <Text>File Number:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Application Nunmber:"
                        // value={applicationNo}
                        // onChangeText={setApplyNo}
                    />
                </View>
                <View style={styles.appliName}>
                    <Text>File Type:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Application Nunmber:"
                        // value={applicationNo}
                        // onChangeText={setApplyNo}
                    />
                </View>
                <View style={styles.appliName}>
                    <Text>File Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Application Nunmber:"
                        // value={applicationNo}
                        // onChangeText={setApplyNo}
                    />
                </View>
                
                <View style={styles.appliName}>
                    <Text>File Description:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Application Nunmber:"
                        // value={applicationNo}
                        // onChangeText={setApplyNo}
                    />
                </View>
                <View style={styles.appliName}>
                    <Text>Year file was Opened:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Application Nunmber:"
                        // value={applicationNo}
                        // onChangeText={setApplyNo}
                    />
                </View>
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