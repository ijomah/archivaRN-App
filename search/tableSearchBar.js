import React, {useState} from "react";
import { View, StyleSheet, TextInput } from "react-native";
import MyTextInput from "../unitParts/reuseTextInput";

export default function TableSearchBar({onFilterData}) {
    const [txt, setTxt] = useState({
        searchInput: ''
    });


    const searchData = (key, stringVal) => {
        console.log('str', txt.searchInput)
        setTxt({
            ...txt,
            [key]: stringVal
        })
        onFilterData(txt.searchInput);
    }
    
    return (
        <View style={styles.appliName}>
           <MyTextInput 
                        // inputErr={errCheck.applicationName}
                        inputConfig={{
                            placeholder:"Search ...",
                            onChangeText:searchData.bind(this, 'searchInput')
                        }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    appliName: {
        alignSelf: 'center',
    }
})