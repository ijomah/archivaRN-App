import React from "react";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

export default function InputError({formDataObj, label}) {
    const [errForInput, setErrForInput] = useState({});
    //create an error object
    const inputErr = {};
    // if(formObj[ppt] ===  '')
    const checkInputIsValid = () => {
        for (let ppt in formDataObj) {
            if(!formDataObj[ppt]) {
                 inputErr.ppt = label + 'is required';
                        //formObj[ppt] + ' '  + 'is required';
            }
        }
        setErrForInput(inputErr);
        //if inputErr is empty ie zero property then no error
        //This fxn also returns boolean
        return Object.keys(inputErr).length === 0
    }
    return (
        <TouchableOpacity>
            <Text>
                ${field} + {' '} + is required
            </Text>
        </TouchableOpacity>
    )
}