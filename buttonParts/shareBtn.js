import React from "react";
import { TouchableOpacity, View } from "react-native";

function ShareBtn() {
    const shareScannedImage = (shareUrl) => {
        if ( Sharing.isAvailableAsync() ) {
            Sharing.shareAsync(shareUrl, {
                dialogTitle: 'Share this File'
                // mimeType: 
            });
            ToastAndroid.show('Sharing file', ToastAndroid.SHORT)
        } else {
            ToastAndroid.show('Sharing not available in this device', ToastAndroid.SHORT)
        }
    }
    return(
        <TouchableOpacity>
            <Feather name="share-2" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default ShareBtn;