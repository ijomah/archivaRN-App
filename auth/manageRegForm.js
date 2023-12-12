import React, {useState} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import RegForm from './regForm';
import { storeData } from '../util/dbService';
import { useNavigation } from '@react-navigation/native';
import { isInputValid } from '../unitParts/errFunc';
// import { saveData } from '../api/genApi';
import axios from 'axios';
import { readUserTable } from '../util/dbService';
import { BACKEND_URL } from '../api/apiEnv';

export default function ManageRegForm() {
    const [userForm, setUserForm] = useState({
        userKey: Math.random().toString(35).substring(1),
        // label: '',
        // value: '',
    })
    const [errForRegInput, setErrForRegInput] = useState({});

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const setApplyNo = (valIdentifier, typedVal) => {
        // console.log('identifier-val', valIdentifier, typedVal)
        setUserForm({...userForm, [valIdentifier]: typedVal})
        // console.log('state part', userForm)
    }

    const submitForm = async () => {
        // await storeData(userForm);
        if(!isInputValid(userForm).isErr) {

            return setErrForRegInput(isInputValid(userForm).errObj);
         }
        //  '/api/v1/register'
        // saveData(userForm);
        axios.post(BACKEND_URL+'/api/v1/register',
            userForm
        ).then((postRes) => {
            console.log('axios post reg(userId)', postRes.data[0]);
            console.log('looking', {...postRes.data[0], date: new Date()})
            storeData({...postRes.data[0], date: new Date().toISOString()})
        })
        .catch((error) => {
            console.log('axios post regErr', error);
        })
        // dispatch(addRegFormTo(userForm));
        
        // navigation.navigate('auth/login')
        Alert.alert(
            'Form', 
            'Form Submitted!',
            [{  
                text: 'Ok',
                // onPress: navigation.navigate('auth/login')
            }]
            )

            readUserTable().then((dat) => {
                console.log('Checking local db id', dat);
               let phoneDbId = dat.rows._array[0].dbUser_id
            console.log('phoneDbId', phoneDbId)
            })
    }
    
    return (
        <View>
            <RegForm 
                setApplyNo={setApplyNo} 
                submitForm={submitForm}
                errInData={errForRegInput}
                />
        </View>
    )
}