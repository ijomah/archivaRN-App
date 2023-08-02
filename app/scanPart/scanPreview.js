import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IMAGESYOUSCANNED } from "../../util/const";
import { dynamicColors } from "../../util/Colors";

export default PreviewPart = () => {
    const [prevImg, setPrevImg] = useState([]);
    
    const getStoreImg = async () => {
        try {
            const imgUnserialized =  await AsyncStorage.getItem(IMAGESYOUSCANNED);
            const imgYouScannedArr = JSON.parse(imgUnserialized);
            if (imgYouScannedArr !== undefined) {
                setPrevImg([...prevImg, imgYouScannedArr]);
                console.log(imgYouScannedArr);
            }
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => getStoreImg, [])

    const renderImgs = (imgUri) => {
        return (
            <Image style={{width: 150, height: 150}} source={{uri: imgUri}} />
        )
    }
    return (
        <View>
            <View style={styles.btnContainer}>
                <TouchableOpacity>
                    <Text>Back {' '}
                        <AntDesign name="leftcircleo" size={24} color="black" />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={deleteScanImg} style={syles.deleteBtnStyle}>
                    <Text>
                        Delete
                        {' '}
                        <AntDesign name="delete" size={24} color="black" />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={uploadScannedImg} style={styles.uploaderStyle}>
                    <Text>Upload
                        {' '}<AntDesign name="clouduploado" size={24} color="black" />
                    </Text>
                </TouchableOpacity>
                    {/* <View>
                        <Text>Download</Text>
                        <Text>
                            <Ionicons name="download" size={24} color="black" />
                        </Text>
                    </View> */}
            
                    <TouchableOpacity onPress={editScannedImg} style={editBtnStyle}>
                    <Text>Edit {' '}
                    <FontAwesome5 name="edit" size={24} color="black" />
                    </Text>
                    </TouchableOpacity>
                </View>
            <View>
                {prevImg.length > 1 ? 
                    (
                        <View style={styles.preview}>
                            <FlatList 
                                data={prevImg}
                                render={renderImgs}
                            />
                        </View>
                    ) : 
                    (
                        <View>
                            <Image style={{width: 150, height: 150}} source={{uri: prevImg[0]}} />
                        </View>
                    )
                }
            </View>
           
                
            
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        flex: 0.4
    },

    editBtnStyle: {
        flex: 1,
        borderStyle: 'solid',
        borderWidth: 50,
        borderColor: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]
    },

    deleteBtnStyle: {
        flex: 1,
        borderStyle: 'solid',
        borderWidth: 50,
        borderColor: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]
    },

    uploaderStyle: {
        flex: 1,
        borderStyle: 'solid',
        borderWidth: 50,
        borderColor: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]
    }
})