import React, {useEffect, useState} from "react";
import { Image } from "expo-image";
import { useSelector } from "react-redux";
import FileManPreviewDataShape from "../models/fileManPreviewDataShape";
import { 
    SafeAreaView, 
    StyleSheet, 
    View, 
    Text, 
    Button,
    FlatList,
    TouchableOpacity,
    ToastAndroid
} from "react-native";
import { downloadScannedImg, downloadManyScannedImg } from "../util/downloadFile";
import { saveDownloadedFileAsync } from "../util/saveDownloadedFile";
import { shapingImgData } from "../api/apiDataForStore";
import LoadingIndicator from "../unitParts/loadingOverlay";


function DocPreview({route}) {
    const apidataFromFileManagerSlice = useSelector((state) => state
        .titleReducer
        .fileManagerDetFromStore
        .detailsForFileManager
    )

    const apiImgIdsFromStore = useSelector((state) => state
        .titleReducer
        .imgIdsFromApi
        .imgIdsFromApi
    )


    const [infoForPrev, setInfoForPreiew] = useState({})

    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    // const imgDataFromTable = route.params.imgUrl.slice(route.params.imgUrl.lastIndexOf('/')+1)
    //route.params.slice(uri.lastIndexOf('/')+1)
    const [imgUriDownload, setImgUriDownload] = useState([]);
    const [refresh, setRefresh] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
//    console.log(imgDataFromTable);

    const downloadOneItem = (imageInfo) => {
        //put logic
        const downloadedFile = downloadScannedImg(imageInfo);
        saveDownloadedFileAsync(downloadedFile);
    }
    
    const downloadManyImg = () => {
        downloadManyScannedImg(apiImgIdsFromStore[0]).then((uriArray) => {
            // if(imgRes)
            console.log('download img res', uriArray)
            const formedImgObj = shapingImgData(apiImgIdsFromStore[0], uriArray);
            // formFullData(fileManagerDataFromApi, formedImgObj);
            saveDownloadedFileAsync(uriArray);
            setImgUriDownload(formedImgObj)
            setIsLoading(false);
        })
        .catch((error) => {
            console.log('img download error', error);
            ToastAndroid.show('Error getting data ... Pull to refresh!', 5000);
            setRefresh(false);
        });
        
    }

    
    const formFullData = (param1, param2) => {
        dispatch(addFileManagerDet(Object.assign({}, param1, param2)));
        setIsLoading(false)
    }

    const getDataForPrev = () => {
        let dataForDisplay;
        apidataFromFileManagerSlice[0].forEach((datum, index) => {
            
                // for(const keyVal of Object.values(datum)) {
                //     if(typeof(keyVal) === 'object') {
                //         imgDataFromTable.push(keyVal);
                //     }
                // }
            dataForDisplay = new FileManPreviewDataShape(
                datum.f_name,
                datum.l_name,
                datum.applic_no,
                datum.approv_type,
                datum.dcb_no,
                datum.approv_do,
                datum.approv_date,
                datum.house_no,
                datum.street_name,
                datum.area_name,
                datum.state
                // route.params.imgUrl
            ) 
        })
        // console.log('dfd', dataForDisplay)
        setInfoForPreiew(dataForDisplay);
    }

    const renderImage = ({item}) => {
        return (
            <TouchableOpacity
                // onPress={() => downloadOneItem(item.imageId)}
            >
                <Image 
                            style={styles.vendorLogo} 
                            source={{uri:item.imgUri}} 
                            resizeMethod="scale"
                            // placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            // blurRadius={0}
                        />
            </TouchableOpacity>
        )
    }

    const refresher = () => {
        setRefresh(true)
        setTimeout(()=> {
            setRefresh(false)
        }, 2000);
        getDataForPrev();
        downloadManyImg();
    }
    
    useEffect(() => {
        getDataForPrev();
        downloadManyImg();

    }, [apidataFromFileManagerSlice])

    return (
        <SafeAreaView>
             <Text 
                    style={{
                        alignSelf: 'center', 
                        fontSize: 20, 
                        fontWeight: 500,
                        marginTop: 7
                    }}
                >Preview</Text>
            <View style={
                // styles.imgPreviewerStyle, 
                {
                    height: 700, 
                    borderWidth: 2, 
                    borderColor: 'red', 
                    // marginTop: 7, 
                    marginTop: '3%',
                    borderStyle: 'solid', 
                    width: 370, 
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    padding: 10,
                    alignSelf: 'center',
                    conentContainerStyle: {
                        justifyContent: 'center'
                    }
                }
            }
            >
            <View style={styles.formPage}>
                <View style={styles.appliName}>
                    <Text>
                        Applicant Name: {' '} {infoForPrev.applicantName}
                    </Text> 
                </View>
                <View style={styles.appliName}>
                    <Text>
                        File Number: {' '} {infoForPrev.applicationNo}
                    </Text> 
                </View>

                <View style={styles.houseNumber}>                        
                    <Text style={styles.houseInput}>    
                       Approval Type: {' '} {infoForPrev.approvalType}
                    </Text>
                </View>

                <View style={styles.appliNo}>
                    <Text>
                        Application Number: {' '} {infoForPrev.applicationNo}
                    </Text>
                </View>

                <View style={styles.areaName}>
                        <Text style={styles.areaInput}>
                            Approval DO: {' '} {infoForPrev.approvingDo}
                        </Text> 
                    </View>
{/* 
                <View style={styles.phoneNumber}>
                    <Text>
                        DCB Number:
                    </Text>
                </View> */}
                

                    <View style={styles.streetName}>
                        <Text style={styles.StreetInput}>
                            Date Approved: {' '} {infoForPrev.approvedDate}
                        </Text>
                    </View>

                    <View style={styles.state}>
                        <Text style={styles.stateInput}>
                            Application Address: {' '} {infoForPrev.applicationAddress}
                        </Text>
                    </View>
                    {isLoading? <LoadingIndicator />
                    :
                    <FlatList 
                        data={imgUriDownload}
                        renderItem={renderImage}
                        // keyExtractor={(index)=> index.toString()}
                        horizontal={true}
                        onRefresh={refresher}
                        refreshing={refresh}
                    />
                    }
                    
                    {/* <Image 
                        style={styles.vendorLogo} 
                        source={{uri:infoForPrev.imgUri}} 
                        resizeMethod="scale"
                        // placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                        // blurRadius={0}
                    /> */}
                </View>
            </View>
            <Button
                title="DownLoad Item"
                //onPress={downloadManyImg}
                //onPress={getFromDb}
            />
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    formPage: {

        // marginTop: 7,
        marginTop: '2%'
    },
    vendorLogo: {
        // alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 520,
        width: 330,
        borderRadius: 20,
        // marginTop: 10
        marginTop: '3%'
    },

    navLink: {
        backgroundColor: '#B7E0F7',
        width: 90,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FFEDD6',
        padding: 2,
    },
    archivaLogo: {
        height: 100,
        width: 100,
        marginLeft: 300,
        marginTop: 116,
        borderWidth: 3,
        borderColor: 'skyblue',
        borderRadius: 20
    }
})

export default DocPreview;