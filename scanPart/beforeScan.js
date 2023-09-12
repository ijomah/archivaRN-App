import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default SnapShot = () => {
    return (
        <View>
            <View style={styles.snapShot}>
                <View>
                    <Text>menuComponent</Text>
                </View>
                <View>
                    <Image>logo</Image>
                </View>
                <View style={styles.textTitle}>
                    <Text>
                        Scan {{documentTitle}}
                    </Text>
                </View>
                <View style={styles.text}>
                    <Text>
                        Please scan each page carefully in a well lite environment.
                    </Text>
                </View>
                <Image source={'./asset/...'} alt="Photo camera image" />
                <View>
                    <TouchableOpacity>
                        <Text>Scan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text>{'Receit.png'}</Text>
                <Text>Scanned</Text>
            </View>
        </View>
    )
}