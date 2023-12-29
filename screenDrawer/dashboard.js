import React, { useEffect, useState } from "react"
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, Button, ToastAndroid, ScrollView, FlatList } from 'react-native';
import  axios  from "axios";
// import { ScrollView } from "react-native-gesture-handler";
import { getDocumentInfo } from "../api/genApi";
//import {apiCalls} from "../../apiCalls";
// import Card from "../unitParts/card";
import ScanChoiceModal from "../modal/scanningChoiceModal";
import { places } from "../util/data";
import CardApi from "../unitParts/cardApi";
// import { dynamicColors } from "../util/Colors";
import  * as FileSystem  from "expo-file-system"
import { downloadScannedImg } from "../util/downloadFile";
import { useSelector } from "react-redux";
import { saveDownloadedFileAsync } from "../util/saveDownloadedFile";
import { DashboardDataShape } from "../models/shapeForDashboard";
import LoadingIndicator from "../unitParts/loadingOverlay";
import { readUserTable } from "../util/dbService";
import { BACKEND_URL } from "../api/apiEnv";

function DashboardPage({navigation, route}) {
    const apidataFromFileManagerSlice = useSelector((state) => state
        .titleReducer
        .fileManagerDetFromStore
        .detailsForFileManager
    )

    let docItmList = [
        // {id: 200, file: 'Certificate', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        // {id: 21, file: 'Receipt', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        // {id: 800, file: 'Invoice', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        // {id: 40, file: 'My Picture', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        // {id: 98, file: 'Important Sheet', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        // {id: 650, file: 'Light Bill', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]}
    ]
    
    const [userIdDb, setUserIdDb] = useState(0);
    const [documentList, setDocumentList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshComp, setRefreshComp] = useState(false);
    // const [isModalVisible, setIsModalVisible] = useState(false);
     
    //Make an api call to get applicant's name and db's id and applic_tag
    //get document label too
    //Display only applicant name, document label (ie name list of files)
    



    //you can keep the applic_tag and db's files.id for querying img table when needed
    
    const getScannedWork = async () => {
        const getImgFileInfo = getDocumentInfo(BACKEND_URL+`/api/v1/files/${id}`);
        let fullUri;
        console.log('Img info', getImgFileInfo[0].mime_type, getImgFileInfo[0].img_name)    
        if(getImgFileInfo.length > 1) {
            fullUri = await Promise.all(getImgFileInfo.map(imgName => downloadScannedImg(imgName.img_name) ));
        } else {
            fullUri = await downloadScannedImg(getImgFileInfo[0].img_name);
        }
        saveDownloadedFileAsync(fullUri);
    }
let dashboardItemArr = [];
    const getData = () => {
        
        axios.get(BACKEND_URL+'/api/v1/persons')
            .then(res => {
                // console.log('res', res.data)
                res.data.forEach((datum) => {
                    if(datum.applic_tag != null) {
                        let personApiData = new DashboardDataShape(
                            datum.file_name,
                            datum.f_name,
                            datum.l_name,
                            datum.id,
                            datum.file_no,
                            datum.applic_tag
                        )
                        dashboardItemArr.push(personApiData);
                        
                    }
                })
                setDocumentList(dashboardItemArr);            
                // console.log('api data now', documentList, );
                setIsLoading(false);
            }   
        )
        .catch((error) => {
            console.log('dash call err', error )
            ToastAndroid.show('Error getting data ... Pull to refresh!', 5000);
            setRefreshComp(false);
        });

        
        // console.log('api data local state', documentList);

        //old commented
        // apiCalls('http://localhost:3000/api/v1/files/single')
        // .then(data => {
        //     console.log(data);
        //     setDocumentList(...documentList, data)
        // })
    }

    
    const resetModal = (boolVal) => {
        console.log('dashboar', boolVal);
        setIsLoading(boolVal)
        // navigation.navigate('/modal/documentType')
    }

    const displayApiData = ({item}) => {
    // console.log('render', item)
        return (
            <View>
                <CardApi 
                    prevImgObj={item} 
                />
            </View>
        )
    }

    const refresher = () => {
        setIsLoading(true)
        setRefreshComp(true);
        setTimeout(()=>{
            setRefreshComp(false)
        }, 2000)
        getData();
    }

    
    useEffect(() => {
        getData();
        // console.log('frm persons api', getApplicDetails)
        // const resp = getDocumentInfo('url needed');
        // downloadScannedImg();
        // const dataObj = dataForStore(resp);
        // dispatch(dataObj);
    }, [])

    
    
    
    return (
        <SafeAreaView>

            <View style={styles.btnAdjust}>
                <View>
                    {/* This has to make an api call to retrieve
                    document titles only and categories */}
                    {/* <Button 
                        title='Tap to view'
                        color='#5C8FAB'
                        onPress={getData}
                    /> */}
                    <Button 
                        title="Goto Form"
                        color= 'green'
                        onPress={() => navigation.navigate('pages/manFileDetail')}
                    />

                    </View>
            </View>
            <Text 
                style={{fontSize: 18, textAlign: 'center'}}
            >
                Categories of Files in your 
                {/* {documentList[5].fName}  */}
                Cabinet
            </Text>
            {
                isLoading? 
                    <LoadingIndicator />
                :
                    <FlatList
                        style={styles.AprovalPage}
                        data={documentList}
                        renderItem={displayApiData}
                        onRefresh={refresher}
                        refreshing={isLoading}
                        // keyExtractor={(item) => item.fileId}
                    />
                
            }
           
                {/* Display data from the api call */}
{/* newly commented */}
                {/* <ScanChoiceModal modalVisible={isModalVisible} onResetModal={resetModal} navigation={navigation} /> */}

{/* newly commented */}
                {/* <View>
                    <Card 
                        flatListData={docItmList}
                    />    
                </View> */}

                
            {/* image preview or an icon should be in this card's children */}
            
        </SafeAreaView>
    )
}


export default DashboardPage;

const styles = StyleSheet.create({
    AprovalPage: {
        // backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16)
        alignSelf: 'center',
        marginTop: 5,
    },

    btnAdjust: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }

})