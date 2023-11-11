import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { removeImgUriOnly } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

function DeleteBtn({localArr, imgIdInObj}) {
    const dataFromStoreForDelete = useSelector((state) => 
    (state
        .titleReducer
        .titleImgDataFromStore
        .titleWithImgUri
    )
);
    const dispatch = useDispatch();

    // if (quantityOfItemToDelete === undefined || quantityOfItemToDelete === 0) {
    //     dataArr.splice(indexToStartDelete)
    // }
    // Object.values(ele).forEach((datum, index) => {
    //     if(typeof(datum) === 'object' && datum.imgId === imgIdInObj) {
            
    //     }
    // })
    const deleteItem = () => {
        //Delete from store(redux slice) code
        dataFromStoreForDelete.forEach((ele, index) => {
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

        // //Delete from local array
        // localArr.forEach((deletable, index) => {
        //     if(deletable.imgId === imgIdInObj) {
        //         localArr.splice(index, 1)
        //     }
        
        // // return dataArr.splice(indexToStartDelete, quantityOfItemToDelete);
        // // dispatch(removeImgUriOnly(prevImgObj))
        // })
    }
    return(
        <TouchableOpacity onPress={deleteItem} style={styles.deleteBtnStyle}>
            <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default DeleteBtn;

const styles = StyleSheet.create({
    // deleteBtnStyle: {
    //     // flex: 1,
    //     // backgroundColor: 'steelblue',
    //     width: 100,
    //     height: 50,
    //     alignItems: 'center',
    //     // borderStyle: 'solid',
    //     // borderWidth: 2,
    //     // borderRadius: 10,
    //     // // margin: 4,
    //     // borderColor: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]
    // },
})