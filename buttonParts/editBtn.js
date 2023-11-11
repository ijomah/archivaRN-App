import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome5 } from '@expo/vector-icons';

function EditBtn({imgIdInObj, onStartEdit}) {
    const dataFromStoreForEdit = useSelector((state) => 
        (state
            .titleReducer
            .titleImgDataFromStore
            .titleWithImgUri
        )
    );

    const startEdit = () => {
        dataFromStoreForEdit.forEach((ele, index) => {
            if (ele.value === imgIdInObj.slice(2)){
                for(let key in ele) {
                    if(typeof(ele[key]) === 'object') {
                        if(ele[key].imgId === imgIdInObj) {
                            delete ele[key]
                        }
                    }
                }       
            }
        })

        onStartEdit(false)
    }
    return(
        <TouchableOpacity 
            onPress={startEdit} 
            style={styles.editBtnStyle}
        >
            <FontAwesome5 name="edit" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default EditBtn;

const styles = StyleSheet.create({
    editBtnStyle: {
        width: 100,
        height: 50,
        alignItems: 'center',
        //flex: 0.3,
        // borderStyle: 'solid',
        // borderWidth: 2,
        // borderRadius: 10,
        // borderColor: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]
    },
})