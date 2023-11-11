import React, {useState} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import RegForm from './regForm';
import { storeData } from '../util/dbService';
import { useNavigation } from '@react-navigation/native';

export default function ManageRegForm() {
    const [userForm, setUserForm] = useState({
        // id: null,
        // label: '',
        // value: '',
    })
    const navigation = useNavigation();
    const setApplyNo = (valIdentifier, typedVal) => {
        // console.log('identifier-val', valIdentifier, typedVal)
        setUserForm({...userForm, [valIdentifier]: typedVal})
        console.log('state part', userForm)
    }

    const submitForm = async () => {
        await storeData(userForm);
        Alert.alert(
            'Form', 
            'Form Submitted!',
            [{  
                text: 'Ok',
                onPress: navigation.navigate('screenDrawer/myDrawer')
            }]
            )
    }
    
    return (
        <View>
            <RegForm setApplyNo={setApplyNo} submitForm={submitForm} />
        </View>
    )
}