import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity, ToastAndroid, TextInput } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';
import DeleteBtn from "../buttonParts/deleteBtn";
import EditBtn from "../buttonParts/editBtn";

function CardApi({prevImgObj}) {
    const [hasValue, setHasValue] = useState(true) 
    const [inputText, setInputText] = useState('')
    const textValue = prevImgObj.imgName;
    

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
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: 380, backgroundColor: 'white', paddingVertical: 14, borderRadius: 10}}>
            <View>
                    <Image 
                        style={{width: 70, height: 90, borderRadius: 10}}
                        source={prevImgObj.uri === undefined ? require('./../assets/bgpixel.jpg') : {uri: prevImgObj.uri}} />
            </View>
            <View style={{justifyContent: 'space-between', alignContent: 'center'}}>
                <View style={{}}>
                    {hasValue? 
                    <Text id="forEdit">{textValue + ' '}</Text> 
                    :
                    <TextInput 
                        onEndEditing={(txt) => setInputText(txt)}
                        value={inputText}
                    />
                    }
                    

                    <Text>{new Date().toDateString()}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: "space-between", width: 150}}>
                    <TouchableOpacity onPress={()=>shareScannedImage(prevImgObj.uri)}>
                        <AntDesign name="sharealt" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <EditBtn 
                            imgIdInObj={prevImgObj.imgId}
                            onStartEdit={setHasValue}
                         />
                    </TouchableOpacity>

                    {/* <TouchableOpacity 
                    // onPress={uploadScannedImg} 
                        //style={styles.uploaderStyle}
                    >
                        <AntDesign name="clouduploado" size={24} color="black" />
                </TouchableOpacity> */}
                    <DeleteBtn imgIdInObj={prevImgObj.imgId} />
                    {/* <TouchableOpacity>
                        <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    )
}

export default CardApi;