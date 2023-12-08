import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function LoadingIndicator() {
    return (
        <View 
            style={{
                // backgroundColor: 'red',
            }}>
            <ActivityIndicator
                size="large" 
                color="#5CBFAB"
                style={{
                    // flex: 1, 
                    marginTop: 50,
                    // backgroundColor: 'red',
                    // height: 400
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}
            />
        </View>
    )
}