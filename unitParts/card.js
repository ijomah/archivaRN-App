import React, {useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInputComponent, TextInput, FlatList } from 'react-native';
import { useSelector } from "react-redux";

import FileManDataShape from "../models/fileManDataShape";
import ItemsCounter from './counter';
// import { dynamicColors } from "../util/Colors";
import { dynamicColors } from "../util/Colors";
import { FontAwesome5 } from '@expo/vector-icons';

function Card({navigation}) {
    // const titleFromStore = useSelector((state) => state.titleReducer.titlesDataFromStore.titles)
    const fileManDataFromStore = useSelector((state) => state
        .titleReducer
        .fileManagerDetFromStore
        .detailsForFileManager
    )

    // const [itemNumber, setItemNumber] = useState(0)
    const listOfDocTitle = [];
    fileManDataFromStore.forEach((docDatum) => {
        listOfDocTitle.push(docDatum.docTitle);
    })

    
    const countImgObj = (itm) => {
        let counting = 0;
        for( let key5 in itm ) {
            if (typeof(Number(key5)) === 'number' && typeof(itm[key5]) === 'object') {
                ++counting
            }
        }
        return counting
    }
    
    let dataForCounter = [];
    
    const itemsToRender = ({item, index}) => {
        
        // let itemNumber = countImgObj(item);
        // let docTitle = item.docTitle;

       
            // for (let key in item) {
                
            //     if(typeof(item[key]) === 'object') {
                
            //         for (const key4 in item[key]) {
            //             if (key4 === 'imgId') {
            //                 let imgIdSliced = item[key][key4].slice(item[key][key4].indexOf('-')+1);
            //                 if (imgIdSliced === item.value ) {
                                
            //                     dataForCounter.push(item[key]);
                                
            //                 }
            //             }
            //         }
                    

            //     }
            // }
        // console.log('item :', item);
        listOfDocTitle.forEach((titleDatum) => {
            fileManDataFromStore.forEach((itmDatum) => {
                if(titleDatum === itmDatum.docTitle) {
                    let presentTitle = itmDatum.docTitle;
                    for (let key in item) {
                
                        if(typeof(item[key]) === 'object') {
                        
                            for (const key4 in item[key]) {
                                if (key4 === 'imgId') {
                                    let imgIdSliced = item[key][key4].slice(item[key][key4].indexOf('-')+1);
                                    if (imgIdSliced === item.value ) {
                                        
                                        dataForCounter.push(item[key]);
                                        
                                    }
                                }
                            }
                            
        
                        }
                    }

                    return (
                        <TouchableOpacity 
                            key={item.value}
                            style={[styles.card, {borderColor: dynamicColors[3],}]}
                            onPress={() => navigation.navigate('table', {value: itmDatum.value, label: itmDatum.docTitle})}  
                        >
                            <View>
                                <Text style={styles.cardHead}>{presentTitle}</Text>
                            </View>
                            <View>
                                <FontAwesome5 
                                    name="file-image"  
                                    size={40} 
                                    // color="#AB906D" 
                                    color={item.colour}
                                />
                            </View>
                            <View>
                                    {/* <View style={styles.counter}>  */}
                                        {/* <Text style={{fontSize: 20, width: '200%', fontWeight: 400}}>
                                            {numberOfItems === 0? '' : numberOfItems }
                                        </Text> */}
                                        <ItemsCounter numberOfItems={countImgObj(item)} />
                            </View>
                        </TouchableOpacity>
                    )
                }
            })
        })
        // return (
        //     <TouchableOpacity 
        //         key={item.value}
        //         style={[styles.card, {borderColor: dynamicColors[3],}]}
        //         onPress={() => navigation.navigate('table', {value: item.value, label: item.docTitle})}  
        //     >
        //         <View>
        //             <Text style={styles.cardHead}>{item.docTitle}</Text>
        //         </View>
        //         <View>
        //             <FontAwesome5 
        //                 name="file-image"  
        //                 size={40} 
        //                 // color="#AB906D" 
        //                 color={item.colour}
        //             />
        //         </View>
        //         <View>
        //                 {/* <View style={styles.counter}>  */}
        //                     {/* <Text style={{fontSize: 20, width: '200%', fontWeight: 400}}>
        //                         {numberOfItems === 0? '' : numberOfItems }
        //                     </Text> */}
        //                     <ItemsCounter numberOfItems={countImgObj(item)} />
        //         </View>
        //     </TouchableOpacity>
        // )
    }
    return (
        <SafeAreaView style={styles.fileListStyle}>
            <FlatList 
                data={fileManDataFromStore}
                renderItem={itemsToRender}
                keyExtractor={item => item.value}
                numColumns= '3'
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
