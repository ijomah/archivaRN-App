import React, {useEffect, useState} from "react";
import { StyleSheet, ToastAndroid, Text, View, Image, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { AntDesign, Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import { CommonActions } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import CardApi from "../unitParts/cardApi";
import { addDocTitleWithImgUri, removeDocTitleWithImgUri, removeAllDocTitleWithImgUri } from "../redux/slice"
import { storeData } from "../util/dbService";
import DeleteBtn from "../buttonParts/deleteBtn";
import { BACKEND_URL } from "../api/apiEnv";

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
    // const [serverRes, setServerRes] = useState(null);
   const [prevImg, setPrevImg] = useState([]);
   let itemValueToDelete = []
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
    }, [])


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

    const  deleteThis = (deletableItem) => {
        prevImgFromStore.forEach((itemToDelete) => {

        })
        dispatch(removeDocTitleWithImgUri(deletableItem))
    }

    const uploadScannedImg = async () => {
        // console.log('copy', prevImgFromStore)
            for (const oneBigObj of prevImgFromStore) {
                for (const objkeys in oneBigObj) {
                    if (typeof(oneBigObj[objkeys]) === 'object') {
                        let imgUriForServer = oneBigObj[objkeys].uri;
                        let imgId = oneBigObj[objkeys].imgId;
                        let noImg = delete oneBigObj[objkeys];
                        // console.log('xpected deleted uri: ', oneBigObj[objkeys]);
                        try {
                            //api url from render
                            // https://archiver-4de6.onrender.com/api/v1/files
                            //ip for localhost - 127.0.0.1  -- http://192.168.249.176:3000/api/v1/files                            
                            await FileSystem
                                .uploadAsync(BACKEND_URL+'/api/v1/files',
                                    imgUriForServer,
                                    {
                                        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
                                        headers: {},
                                        fieldName: 'photo',
                                        httpMethod: 'PATCH',
                                        parameters: {"imgId":imgId, "data":JSON.stringify(oneBigObj) }
                                        // parameters: JSON.stringify(oneBigObj)
                                    }
                            )
                            // setServerRes(serverResp)
                            console.log('res from me: good');
                            // console.log('res from server: ', serverRes);
                        } catch (error) {
                            console.log('err from try', error);
                        }
                    }
                }
                
            }

        ToastAndroid.show('Uploading..., please wait!', ToastAndroid.SHORT)
       //Empty the store at this point
    //    if(serverRes.status === 200) {
            // dispatch(removeAllDocTitleWithImgUri(0))
            // goto dashboard after uploading
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        // {name: 'home'},
                        // {name: 'auth/login'},
                        {name: 'screenDrawer/myDrawer'},
                        // {name: 'screenStack/docPreview'}
                    ]
                })
            )
        // } else {
            //do somethg
        // }

    }

    // const deleteScanImg = (deleteItm) => dispatch(deleteScanImg(deleteItm))

  

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
                     onPress={() => deleteThis(prevImgObj)}
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
                    onPress={uploadScannedImg} 
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
                                // keyExtractor={item => item.imgId}
                                // style={{backgroundColor: 'green',}}
                            />
                        </View>
                    ) : 
                    (
                        <View>
                            {prevImg.length === 1 && prevImg[0] !== null ?
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