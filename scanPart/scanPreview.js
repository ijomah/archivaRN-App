import React, {useEffect, useState} from "react";
import { StyleSheet, ToastAndroid, Text, View, Image, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { AntDesign, Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import { useSelector, useDispatch } from "react-redux";
import CardApi from "../unitParts/cardApi";
import { addDocTitleWithImgUri } from "../redux/slice"
import { storeData } from "../util/dbService";
import DeleteBtn from "../buttonParts/deleteBtn";

export default ScanPreview = ({navigation}) => {
    const titleForDocFromStore = useSelector((state) => 
        (state
            .titleReducer
            .titlesDataFromStore
            .titles
        )
    );
    //Note titleImgDataFromStore is having doc form details in addition
    prevImgFromStore = useSelector((state) => 
        (state
            .titleReducer
            .titleImgDataFromStore
            .titleWithImgUri
        )
    );
    


    const dispatch = useDispatch();
   const [prevImg, setPrevImg] = useState([]);
    // console.log('new prev', prevImg)

    const setImgForPreview = () => {
        const imgForPrev = []
        // This is the  data nature of 
        //imgTitleObjFromStore = {
        //     value: 'someDataString', 
        //     label: 'someDataString', 
        //     scannedImgUri: ['someUriString']  
        // }
        // I am adding parentValue property so one can 
        //identify the parent data object
        for ( const imgTitleObjFromStore of prevImgFromStore) {
            // console.log(imgTitleObjFromStore)
            const dataObjToArr = Object.values(imgTitleObjFromStore);
            // console.log('converted', dataObjToArr);
            
            dataObjToArr.forEach((datum, index) => {
                // console.log(typeof(datum));
                if (typeof(datum) === 'string' || typeof(datum) === 'number') {
                    dataObjToArr.splice(index, 1);
                } else if (typeof(datum) === 'object') {
                    imgForPrev.push(datum);
                }
            })
        }
        // return imgForPrev;
        // console.log('for prevARR', imgForPrev);
        setPrevImg((prevImg) => ([prevImg, imgForPrev].flat()));
    }

//  const sendScannedImgToStore = (pixAddressArr) => {
//     const docDataForStore = {
        //     ...titleForDocFromStore, 
        //     scannedImgUri: pixAddressArr
        // }
//     // setScannedImage([...scannedImage, docDataForStore])
//     // console.log('for store', docDataForStore);
//     dispatch(addDocTitleWithImgUri(docDataForStore))
//   }
 
    useEffect(() => {
        const dbFetch = async () => {
            //let dbFetchRes = await storeData();
            // console.log(dbFetchRes);
            
        };
        // console.log('from prev useEff:', );
        setImgForPreview()
    }, [prevImgFromStore])


    const renderImgs = ({item}) => {
        // console.log(item.uri.length)
        
        if (item != undefined && item.uri != null) {
            return (
                
                <View style={{margin: 5,}} >
                    <CardApi prevImgObj={item} />
                     {/* <TouchableHighlight 
                            onPress={shareScannedImage}
                        >
                        <Feather name="share-2" size={24} color="black" /></TouchableHighlight>
                     <Image style={{width: 50, height: 50}} source={{uri: item.uri}} /> */}
                </View>
            )
        }
    }

    // const uploadScannedImg = () => {

    //     if (prevImgFromStore.length === 1) {
    //         FileSystem
                //.uploadAsync('http://localhost:3000/api/v1/files/single',
    //             prevImgFromStore[0],
    //             {
    //                 uploadType: FileSystem.FileSystemUploadType.MULTIPART,
    //                 fieldName: '',
    //                 httpMethod: 'POST'
    //             }
    //         )
    //         // apiPostCalls('', 
    //         //     {
    //         //         method: 'POST', 
    //         //         body:  JSON.stringify(prevImgFromStore)
    //         //     }
    //         // )
    //     } else if (prevImgFromStore.length > 1) {
    //         //imgURid => imgUri
    //         for (imgURid of prevImgFromStore) {
    //             FileSystem.uploadAsync('http://localhost:3000/api/v1/files/multiple',
    //                 imgURid,
    //                 {
    //                     uploadType: FileSystem.FileSystemUploadType.MULTIPART,
    //                     fieldName: '',
    //                     httpMethod: 'POST',
    //                 }
    //             )
    //         }
            
    //         // apiPostCalls('http://localhost:3000/api/v1/files/multiple',
    //         //     {
    //         //         method: 'POST',
    //         //         body: JSON.stringify(prevImgFromStore)
    //         //     }
    //         // )
    //     }
    //     console.log('I need to upload ScannedImages')
    //     ToastAndroid.show('Uploading..., please wait!', ToastAndroid.SHORT)
    // }

    // const downloadScannedImg = () => {
    //     FileSystem.downloadAsync('http://localhost:3000/api/v1/files/single',
    //         FileSystem.documentDirectory + 'FILENAME.PNG'
    //     )
    //     .then(({uri}) => {
    //         ToastAndroid.show(`Finished downloading, ${uri}`, ToastAndroid.LONG)
    //         console.log('Downloading done!', uri)
    //     })
    //     .catch(error =>  console.log(error))
        
    // }

    const goToDocTypePage = () => {
        navigation.navigate('screenStack/documentType')
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
                    style={styles.deleteBtnStyle}
                >
                    {/* <DeleteBtn localArr={prevImg} dataTag={prevImg[0].imgId} /> */}

                    <Text>
                        Delete
                        {' '}
                        <AntDesign name="delete" size={24} color="black" />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    // onPress={uploadScannedImg} 
                    style={styles.uploaderStyle}>
                    <Text>Upload
                        {' '}<AntDesign name="clouduploado" size={24} color="black" />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    //onPress={
                //    ()=>shareScannedImage(prevImgObj.uri)
                    //}
                >
                    <AntDesign name="sharealt" size={24} color="black" />
                </TouchableOpacity>

                    {/* <TouchableOpacity 
                        style={styles.downloadBtnStyle}
                    //    onPress={downloadScannedImg}
                    >
                        <Text>Download{' '}
                            <AntDesign name="clouddownloado" size={24} color="black" />
                        </Text>
                    </TouchableOpacity> */}
            
                    <TouchableOpacity 
                        onPress={goToDocTypePage} 
                        style={styles.goToBtnStyle}
                    >
                    <Text>Sorting Page
                    {/* <FontAwesome5 name="edit" size={24} color="black" /> */}
                    </Text>
                    </TouchableOpacity>
            </View>
            <View style={{height: 690,}}>
                {prevImg.length > 1 && prevImg != undefined ? 
                    (
                        <View style={styles.preview}>
                            <FlatList 
                                data={prevImg}
                                renderItem={renderImgs}
                                keyExtractor={item => item.imgId}
                                // style={{backgroundColor: 'green',}}
                            />
                        </View>
                    ) : 
                    (
                        <View>
                            {prevImg.length === 1 && prevImg[0] === null ?
                                <CardApi uri={prevImg[0]} />
                                // <TouchableHighlight onPress={shareScannedImage}><Feather name="share-2" size={24} color="black" /></TouchableHighlight>
                                : ''
                            }
                            {/* <Image style={{width: 150, height: 150}} source={{uri: prevImgFromStore[0]}} /> */}
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
    preview: {
        // flex: 0.5,
        // backgroundColor: 'green',
        width: 400,
        height: 700,
        alignSelf: 'center',
        marginLeft: 9
    },
    goToBtnStyle: {
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