import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import { useDispatch } from 'react-redux';
import { addDocFormTo } from '../redux/slice';


import FileDetailForm from './fileDetailForm';
import { insertToApprAndApplicTable, readUserTable } from '../util/dbService';
import { isInputValid } from '../unitParts/errFunc';

export default function ManageFileDetail({navigation}) {
    const dispatch = useDispatch();
    // let phoneDbId = 
    
    // readUserTable().then((dat) => {
    //     console.log('Checking local db id', dat.rows._array.dbuser_id);
    //    const remoteDbId = dat.rows._array[0].dbuser_id;
        
    //     setphoneDbId(remoteDbId)
    //     console.log('phoneDbId', phoneDbId)
    // })
    
    const [errForInput, setErrForInput] = useState({});   
    const [fileDetail, setFileDetail] = useState({
        applicationNumber: "",
        fName: "",
        lName: "",
        fileYear: "",
        approvalDo: "",
        approvalDate: "",
        approvalType: "",
        dcbNumber: "",
        country: "", 
        houseNo: "",
        state: "",
        streetName: "",
        areaName: "",
        zipCode: ""
        // id: Math.random().toString(25).substring(7),
        // applicationAddress: null || " ",
        // applicationName: null || " ",
        // applicationNumber: null || " ",
        // approvalDO: null || " ",
        // approvalDate: null || " ",
        // approvalType: null || " ",
        // dcbNumber: null || " ",
    });
    const [phoneDbId, setPhoneDbId] = useState(0)

    const setFileDetForm = (fileIdentifier, typedFileDetail) => {
        // console.log('identifier-val', valIdentifier, typedVal)
        let updatedFormData = {
            ...fileDetail,
            applicTag: Math.random().toString(25).substring(7), 
            [fileIdentifier]: typedFileDetail
        }

        const remDbId = getPhoneDbId()
        setFileDetail({...updatedFormData, dbUserId: phoneDbId});
        console.log('state dbId', fileDetail)
    }

    // const clearInput = React.useCallback(() => onchangeText(''), []);

    const submitFileDetForm = (isBool) => {
        // const res = await insertToApprAndApplicTable(fileDetail)
        // console.log('sent to db', isInputValid(fileDetail).errObj);

        if(!isInputValid(fileDetail).isErr) {
            setErrForInput(isInputValid(fileDetail).errObj);
            // console.log('err obj in input', fileDetail);
           return 
        }

        dispatch(addDocFormTo(fileDetail));
        //clearInput();
        // console.log(JSON.parse(fileDetail))
        Alert.alert(
            'Form', 
            'Form Submitted!', 
            //Do you want to scan a document or file',
            [{  
                text: 'Ok',
                onPress: isBool? 
                                navigation.navigate('screenStack/documentType') 
                        :       navigation.navigate('screenStack/fileType')
            }]
        )
        navigation.navigate('screenStack/documentType') 
    }

    const getPhoneDbId = () => {
        let remoteDbId
            readUserTable().then((dat) => {
                console.log('Checking local db id', dat.rows._array[0].dbuser_id);
                remoteDbId= dat.rows._array[0].dbuser_id;
                
                
                setPhoneDbId(remoteDbId)
                // console.log('phoneDbId', phoneDbId)
            })
        return remoteDbId;
    }

    // useEffect(() => {
    //     readUserTable().then((dat) => {
    //         console.log('Checking local db id', dat.rows._array[0].dbuser_id);
    //        const remoteDbId = dat.rows._array[0].dbuser_id;
            
    //         // setphoneDbId(remoteDbId)
    //         console.log('phoneDbId', phoneDbId)
    //     })
    // }, [])
    
    return (
        <View>
            <FileDetailForm 
                errCheck ={errForInput}
                setFileDetForm={setFileDetForm} 
                navigation={navigation}
                submitFileDetForm={submitFileDetForm} />
        </View>
    )
}

