import React from "react";
import { View, Image, Text, StyleSheet, TouchableHighlight } from "react-native";

export default function FileComponents(props) {
    console.log("filecomp props:", props);
    const leadToCamera = () => {
        //lead to camera page
        //Doccument title dataneed to go with the navigation
    }
    return (
        <View style={styles.fileCompContainer}>
            {/* <View>
                <Image source={require('../../assets/splash1.jpg')} />
            </View> */}
            {/* <View>
                <Text>SCAN FILE COMPONENTS</Text>
            </View> */}
            <View>
                <Text>{props.docsName.map(
                            (itm) => {
                                console.log("itm from Filecomp", itm)
                                itm.map((datum) => {
                                    return (
                                        <TouchableHighlight
                                            onPress={leadToCamera}
                                        >
                                            <View>
                                                <Text 
                                                    key={datum.value}
                                                >
                                                    {datum.label}
                                                </Text>
                                            </View>
                                        </TouchableHighlight>
                                    )
                                })
                            
                        })}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fileCompContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
        
    }
})