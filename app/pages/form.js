import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default FormPage = () => {
    return (
        <View>
            <View style={styles.formPage}>
                <View style={styles.appliNo}>
                    <Text>Application Number:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Application Nunmber:"
                        // value={applicationNo}
                        // onChangeText={setApplyNo}
                    />
                </View>
                <View style={styles.appliName}>
                    <Text>Application Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Application Nunmber:"
                        // value={applicationNo}
                        // onChangeText={setApplyNo}
                    />
                </View>
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