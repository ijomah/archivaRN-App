import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import { useDispatch } from 'react-redux';
import { addDocFormTo } from '../redux/slice';


import FileDetailForm from './fileDetailForm';
import { insertToApprAndApplicTable } from '../util/dbService';
import { isInputValid } from '../unitParts/errFunc';

export default function ManageFileDetail({navigation}) {
    const dispatch = useDispatch();
    const [errForInput, setErrForInput] = useState({});   
    const [fileDetail, setFileDetail] = useState({
        applicationAddress: "",
        applicationName: "",
        applicationNumber: "",
        approvalDO: "",
        approvalDate: "",
        approvalType: "",
        dcbNumber: "",
        
        // id: Math.random().toString(25).substring(7),
        // applicationAddress: null || " ",
        // applicationName: null || " ",
        // applicationNumber: null || " ",
        // approvalDO: null || " ",
        // approvalDate: null || " ",
        // approvalType: null || " ",
        // dcbNumber: null || " ",
    });

    const setFileDetForm = (fileIdentifier, typedFileDetail) => {
        // console.log('identifier-val', valIdentifier, typedVal)
        let updatedFormData = {
            ...fileDetail,
            applicTag: Math.random().toString(25).substring(7), 
            [fileIdentifier]: typedFileDetail
        }
        setFileDetail(updatedFormData);
        // console.log('state part', fileDetail)
    }

    // const clearInput = React.useCallback(() => onchangeText(''), []);

    const submitFileDetForm = async (isBool) => {
        // const res = await insertToApprAndApplicTable(fileDetail)
        // console.log('sent to db', isInputValid(fileDetail).errObj);
        
        

        if(!isInputValid(fileDetail).isErr) {

           return setErrForInput(isInputValid(fileDetail).errObj);
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
    }
    
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

