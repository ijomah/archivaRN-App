import React from "react";
import { TouchableOpacity, View } from "react-native";

function UploadBtn() {
    return(
        <TouchableOpacity style={styles.uploaderStyle}>
            <AntDesign name="clouduploado" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default UploadBtn;

const styles = StyleSheet.create({
    uploaderStyle: {
        // flex: 0.1,
        width: 100,
        height: 50,
        alignItems: 'center',
        // borderStyle: 'solid',
        // borderWidth: 2,
        // borderRadius: 10,
        // borderColor: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]
    },
})