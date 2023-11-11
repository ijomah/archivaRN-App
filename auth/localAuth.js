import React from "react";
import { View, Text, Button } from "react-native";

export default function LocalAuth({verifyUserBiometric}) {
    return (
        <View>
            <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 500}}
            >File Manager Verification</Text>
            <Button 
                style={{width: 50, height: 50}}
                onPress={verifyUserBiometric}
                title="verify"
            />
        </View>
    )
}