import { View, Image, Text, TouchableOpacity } from "react-native";
import Card from "../unitParts/card";
import { dynamicColors } from "../util/Colors";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { readApprAndApplicTable, readData } from "../util/dbService";
import SearchBarComponent from "../search/searchBar";
import { filterSearchVal } from "../util/filtering";
// import FileManDataShape from "../models/fileManDataShape";



export default function FileManager() {
    const navigation = useNavigation();
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
        // const dbInfo = readApprAndApplicTable();
        // console.log('file Manager', dbInfo);
        const dataForLabelDisplay = [];
        let dataForLength = [];
        fileManDataFromStore.forEach((element) => {
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

    return (
            <>
                {/* <TableSearchBar
                    onFilterData={filterSearchVal} 
                /> */}
                <Card 
                    // flatListData={titleFromStore}
                    // dataForCounter={dataForLength}
                    navigation={navigation}
                />   
            </>
            // <View>
            //     <Text>hi</Text>
            // </View>     
    )
}