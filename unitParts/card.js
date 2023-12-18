import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInputComponent, TextInput, FlatList } from 'react-native';
import { useSelector } from "react-redux";

import FileManDataShape from "../models/fileManDataShape";
import ItemsCounter from './counter';
// import { dynamicColors } from "../util/Colors";
import { dynamicColors } from "../util/Colors";
import { FontAwesome5 } from '@expo/vector-icons';

function Card({navigation, onSetIsLoading, onGetFileManagerData }) {
    // const titleFromStore = useSelector((state) => state.titleReducer.titlesDataFromStore.titles)
    const fileManDataFromStore = useSelector((state) => state
        .titleReducer
        .fileManagerDetFromStore
        .detailsForFileManager
    )

    const [filteredTitles, setFilteredTitles ] = useState([]);
    const [refreshMe, setRefreshMe] = useState(false)
    // const [itemNumber, setItemNumber] = useState(0)
    const extractTitles = () => {
        const listOfDocTitle = [];
        fileManDataFromStore[0].forEach((docDatum) => {
            let newDocDatum = new FileManDataShape(
                docDatum.file_no,
                docDatum.file_name, 
                fileManDataFromStore[0].length
            )
            listOfDocTitle.push(newDocDatum.docTitle);
        })
        return listOfDocTitle
    }

    const filterExtractedTitles = () => {
        const titlesToFilter = extractTitles();
        let titlesFiltered = titlesToFilter.filter((tit, ind) => {
            return titlesToFilter.indexOf(tit) === ind;
        })
        // setFilteredTitles(titlesFiltered);
        return titlesFiltered;
    }
    

    // const countImgObj = (itm) => {
    //     let counting = 0;
    //     for( let key5 in itm ) {
    //         if (typeof(Number(key5)) === 'number' && typeof(itm[key5]) === 'object') {
    //             ++counting
    //         }
    //     }
    //     return counting
    // }

   
    
    

    const sortAllData = () => {
        let docTitleWithCount = [];
        const filteredList = filterExtractedTitles()
        let noOfFiles = 0;
        // let docTitleForCard 
        // let item = null;
        filteredList.forEach((titleDatum) => {
            noOfFiles = 0
            fileManDataFromStore[0].forEach((itmDatum) => {
                // console.log('card data', titleDatum)
                let newItmDatum = new FileManDataShape(
                    itmDatum.file_no,
                    itmDatum.file_name, 
                    fileManDataFromStore[0].length
                )
                
                if(titleDatum === newItmDatum.docTitle) {
                    item = titleDatum;                
                    ++noOfFiles;
                    // console.log('item1 :',item, noOfFiles );
                }
                if(fileManDataFromStore[0].indexOf(itmDatum) === (fileManDataFromStore[0].length - 1)) {
                    console.log('item2 :', item, noOfFiles);
                    let docId = 0
                    docTitleWithCount.push({
                        count: noOfFiles,
                        docIds: ++docId,
                        docTitle: item
                    })
                }
            })
        })
        setFilteredTitles(docTitleWithCount)
        return docTitleWithCount;
    }

    const refresher = () => {
        onSetIsLoading(true);
        setTimeout(() => {
            onSetIsLoading(false);
        }, 2000)
        onGetFileManagerData();
    }
    
    const itemsToRender = ({item, index}) => {
        return (
            <TouchableOpacity 
                // key={item.value}
                style={[styles.card, {borderColor: dynamicColors[3],}]}
                onPress={() => navigation.navigate('table', {label: item.docTitle})}  
            >
                <View>
                    <Text style={styles.cardHead}>{item.docTitle}</Text>
                </View>
                <View>
                    <FontAwesome5 
                        name="file-image"  
                        size={30} 
                        // color="#AB906D" 
                        color={item.colour}
                    />
                </View>
                <View>
                        {/* <View style={styles.counter}>  */}
                            {/* <Text style={{fontSize: 20, width: '200%', fontWeight: 400}}>
                                {numberOfItems === 0? '' : numberOfItems }
                            </Text> */}
                            <ItemsCounter numberOfItems={item.count} />
                </View>
            </TouchableOpacity>
        )
    }

     useEffect(()=>{
        sortAllData()
    }, [])
    return (
        <SafeAreaView style={styles.fileListStyle}>
            <FlatList 
                data={filteredTitles}
                renderItem={itemsToRender}
                extraData={filterExtractedTitles}
                keyExtractor={item => item.docIds}
                numColumns= '3'
                onRefresh={refresher}
                refreshing={refreshMe}
            />  
        </SafeAreaView>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        width: 110,
        height: 110,
        borderWidth: 2,
        borderStyle: 'solid',
        // borderColor: '#' + Math.floor(Math.random()*16777215).toString(16),
        borderRadius: 20,
        color: 'white',
        padding: 5,
        margin: 10,
        alignItems: 'center'
    },
    cardHead: {
        fontSize: 18,
        // fontWeight: 300,
        textAlign: 'center'
    },

    ItemsCounterStyling: {
        // alignSelf: 'center',
        // width: 100
    },

    fileListStyle: {
        alignSelf: 'center'
    }
})
