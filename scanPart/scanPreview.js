import React, {useEffect, useState} from "react";
import { StyleSheet, ToastAndroid, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput, FlatList, TouchableHighlight } from 'react-native';
import * as Sharing from 'expo-sharing';
import { AntDesign, Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IMAGESYOUSCANNED } from "../../util/const";
import { dynamicColors } from "../../util/Colors";
//import {apiPostCalls} from "../../apiCalls";
import * as FileSystem from 'expo-file-system';


export default PreviewPart = () => {
    const [prevImg, setPrevImg] = useState([]);
    
    const getStoreImg = async () => {
        try {
            const imgUnserialized =  await AsyncStorage.getItem(IMAGESYOUSCANNED);
            const imgYouScannedArr = JSON.parse(imgUnserialized);
            if (imgYouScannedArr !== undefined) {
                setPrevImg([...prevImg, imgYouScannedArr]);
                console.log('from preview', imgYouScannedArr);
            }
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => getStoreImg, [prevImg])

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

    const renderImgs = (imgUri) => {
        return (
            <View >
                <TouchableHighlight onPress={shareScannedImage}><Feather name="share-2" size={24} color="black" /></TouchableHighlight>
                <Image style={{width: 150, height: 150}} source={{uri: imgUri}} />
            </View>
        )
    }

    const uploadScannedImg = () => {

        if (prevImg.length === 1) {
            FileSystem.uploadAsync('http://localhost:3000/api/v1/files/single',
                prevImg[0],
                {
                    uploadType: FileSystem.FileSystemUploadType.MULTIPART,
                    fieldName: '',
                    httpMethod: 'POST'
                }
            )
            // apiPostCalls('', 
            //     {
            //         method: 'POST', 
            //         body:  JSON.stringify(prevImg)
            //     }
            // )
        } else if (prevImg.length > 1) {
            //imgURid => imgUri
            for (imgURid of prevImg) {
                FileSystem.uploadAsync('http://localhost:3000/api/v1/files/multiple',
                    imgURid,
                    {
                        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
                        fieldName: '',
                        httpMethod: 'POST',
                    }
                )
            }
            
            // apiPostCalls('http://localhost:3000/api/v1/files/multiple',
            //     {
            //         method: 'POST',
            //         body: JSON.stringify(prevImg)
            //     }
            // )
        }
        console.log('I need to upload ScannedImages')
        ToastAndroid.show('Uploading..., please wait!', ToastAndroid.SHORT)
    }

    const downloadScannedImg = () => {
        FileSystem.downloadAsync('http://localhost:3000/api/v1/files/single',
            FileSystem.documentDirectory + 'FILENAME.PNG'
        )
        .then(({uri}) => {
            ToastAndroid.show(`Finished downloading, ${uri}`, ToastAndroid.LONG)
            console.log('Downloading done!', uri)
        })
        .catch(error =>  console.log(error))
        
    }
    return (
        <View style={{height: 780}}>
            <View style={styles.btnContainer}>
                {/* <TouchableOpacity>
                    <Text>Back {' '}
                        <AntDesign name="leftcircleo" size={24} color="black" />
                    </Text>
                </TouchableOpacity> */}

                <TouchableOpacity 
                    //onPress={deleteScanImg} 
                    style={styles.deleteBtnStyle}>
                    <Text>
                        Delete
                        {' '}
                        <AntDesign name="delete" size={24} color="black" />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={uploadScannedImg} 
                    style={styles.uploaderStyle}>
                    <Text>Upload
                        {' '}<AntDesign name="clouduploado" size={24} color="black" />
                    </Text>
                </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.downloadBtnStyle}
                        onPress={downloadScannedImg}>
                        <Text>Download{' '}
                            <AntDesign name="clouddownloado" size={24} color="black" />
                        </Text>
                    </TouchableOpacity>
            
                    <TouchableOpacity 
                        //onPress={editScannedImg} 
                        style={styles.editBtnStyle}
                    >
                    <Text>Edit {' '}
                    <FontAwesome5 name="edit" size={24} color="black" />
                    </Text>
                    </TouchableOpacity>
            </View>
            <View style={{height: 690}}>
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
                            {prevImg.length === 1 ?
                                <TouchableHighlight onPress={shareScannedImage}><Feather name="share-2" size={24} color="black" /></TouchableHighlight>
                                : ''
                            }
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
        
        
    },

    editBtnStyle: {
        width: 100,
        height: 50,
        alignItems: 'center',
        //flex: 0.3,
        // borderStyle: 'solid',
        // borderWidth: 2,
        // borderRadius: 10,
        // borderColor: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]
    },

    deleteBtnStyle: {
        // flex: 1,
        // backgroundColor: 'steelblue',
        width: 100,
        height: 50,
        alignItems: 'center',
        // borderStyle: 'solid',
        // borderWidth: 2,
        // borderRadius: 10,
        // // margin: 4,
        // borderColor: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]
    },

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

    downloadBtnStyle: {
        width: 100,
        height: 50,
        alignItems: 'center',
    }
})