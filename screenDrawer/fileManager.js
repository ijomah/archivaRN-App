import React, { useEffect, useState, useContext } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Card from "../unitParts/card";
import { dynamicColors } from "../util/Colors";
import { useSelector, useDispatch} from "react-redux";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { readApprAndApplicTable, readUserTable } from "../util/dbService";
import SearchBarComponent from "../search/searchBar";
import { filterSearchVal } from "../util/filtering";
import {dataForStore, shapingImgData, makeStoreData} from "../api/apiDataForStore";

import LoadingIndicator from "../unitParts/loadingOverlay";
import { downloadScannedImg, downloadManyScannedImg } from "../util/downloadFile";
import { addFileManagerDet } from "../redux/slice";
import { BACKEND_URL } from "../api/apiEnv";
import { UserIdContext } from "../contextStore/userIdContext";


export default function FileManager() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const dbUserId = useContext(UserIdContext)
    //let fileItmList = [
        //     {valueId: 200, label: 'Vendor Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        //     {valueId: 29, label: 'Patient Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        //     {valueId: 800, label: 'Staff Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        //     {valueId: 40, label: 'Admin Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        //     {valueId: 92, label: 'Lab   Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        //     {valueId: 650, label: 'General Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]}
        // ]
    // let fileItmList = [
    //         {valueId: 200, label: 'Vendor Files', colour: dynamicColors[3], totalCount: 200},
    //         {valueId: 29, label: 'Patient Files', colour: dynamicColors[3], totalCount: 223},
    //         {valueId: 800, label: 'Staff Files', colour: dynamicColors[3], totalCount: 343},
    //         {valueId: 40, label: 'Admin Files', colour: dynamicColors[3], totalCount: 453},
    //         {valueId: 92, label: 'Lab   Files', colour: dynamicColors[3], totalCount: 341},
    //         {valueId: 650, label: 'General Files', colour: dynamicColors[3], totalCount: 785}
    //     ]
    const apidataFromFileManagerSlice = useSelector((state) => state
        .titleReducer
        .fileManagerDetFromStore
        .detailsForFileManager
    )

        // const fileItemList = useSelector((state) => state.titleReducer.fileManagerDetFromStore.detailsForFileManager)
        // const titleFromStore = useSelector((state) => state.titleReducer.titlesDataFromStore.titles)
        fileManDataFromStore = useSelector((state) => 
            (state
                .titleReducer
                .titleImgDataFromStore
                .titleWithImgUri
            )
        );
        const [isLoading, setIsLoading] = useState(true);
       
        const [imageData, setImageData] = useState([])
        const [fileManagerDataFromApi, setFileManagerDataFromApi] = useState(null)
        // let dbUserId 
        // readUserTable().then((dbId) => {
        //     setDbUserId(dbId.rows._array[0].dbuser_id)
        //     // dbUserId = dbId.rows._array[0].dbuser_id 
        // })  
        // console.log('file Manager', + ' '+ 'or ', dbUserId);

        const dataForLabelDisplay = [];
        let dataForLength = [];
        apidataFromFileManagerSlice.forEach((element) => {
            for (let key in element) {
                if(typeof(element[key]) === 'object') {
                    for (const key4 in element[key]) {
                        if (key4 === 'imgId') {
                            let imgIdSliced = element[key][key4].slice(element[key][key4].indexOf('-')+1);
                            if (imgIdSliced === element.value ) {
                                dataForLength.push(element[key]);
                                dataForLabelDisplay.push(element.value);
                            }
                        }
                    }
                    

                }
            }
        })
//
    const getFileManagerData = async () => {
        const resp = await axios
            .get(BACKEND_URL+`/api/v1/documents/${dbUserId}`
                // BACKEND_URL.live+`/api/v1/documents/${dbUserId}`
            )
            
        setTimeout( async () => {
            const docDataFromApi = dataForStore(resp.data);
            setFileManagerDataFromApi(docDataFromApi);
            try {
                const imgResp = await Promise.all(docDataFromApi.map(oneDoc => axios
                    .get(
                        BACKEND_URL+`/api/v1/files/${Number(oneDoc.fileId)}`
                        // BACKEND_URL+`https://archiver-4de6.onrender.com/api/v1/files/${Number(docDataFromApi.fileId)}`
                    )
                ))
                // .then(axios.spread((...data) => console.log('spread data', data)));
                // .then(([{data: img1}, {data: img2}, {data: img3}, {data: img4}]) => {
                //     console.log('img4', {img1, img2, img3, img4})
                //     setImageData(Object.values({img1, img2, img3, img4}));
                // })
                loopFxn(imgResp);
                        // console.log('imgResp', imgResp.length)
                        console.log('imgResp2', imgResp[2].data)
                   
            } catch(error) {
                console.log('Promise all err', error);
            }
            // })
        }, 100);
        
        const loopFxn = (imgArrayData) => {
            let imgDataForState = []
            for(let idx = 0; idx < imgArrayData.length; ++idx) {
                if(imgArrayData[idx].data.length > 0) {
                    imgDataForState.push(imgArrayData[idx].data)
                }
            }
            setImageData(imgDataForState)
        }
    //    const docDataFromApi = dataForStore(resp.data)
    //    const imgResp = await axios
    //         .get(
    //             `http://192.168.39.16:3000/api/v1/files/${Number(docDataFromApi.fileId)}`
    //             // `https://archiver-4de6.onrender.com/api/v1/files/${Number(docDataFromApi.fileId)}`
    //         )
        // const imageDataArrFromApi = imgResp.data
       
       setTimeout(() => {
            console.log('imageData1 ', imageData, imageData.length)
            downloadManyScannedImg(imageData).then((uriArray) => {
                // if(imgRes)
                console.log('download img res', uriArray)
                // const formedImgObj = 
                shapingImgData(imageData, uriArray);
                // formFullData(fileManagerDataFromApi, formedImgObj);
            })
            .catch((error) => {
                console.log('img download error', error);
            });
       }, 800)
        
        //    const imgDataFromApi = 
        // setIsLoading(false)
    }

    const formFullData = (param1, param2) => {
        dispatch(addFileManagerDet(Object.assign({}, param1, param2)));
    }

    useEffect(() => {
        getFileManagerData()
        
    }, [])
    return (
            <>
                {/* <TableSearchBar
                    onFilterData={filterSearchVal} 
                /> */}
                {
                    isLoading?
                        <LoadingIndicator />
                        :
                        <Card 
                            flatListData={apidataFromFileManagerSlice}
                            dataForCounter={dataForLength}
                            navigation={navigation}
                        />
                }
                   
            </>
            // <View>
            //     <Text>hi</Text>
            // </View>     
    )
}