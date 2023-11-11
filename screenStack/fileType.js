// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, TextInput, Button, ToastAndroid } from 'react-native';
import { MultiSelect } from "react-native-element-dropdown";
import { useDispatch } from 'react-redux';
import { addFileTitle } from '../redux/slice';
// import { ALLFILEINFO } from "../../util/const";



export default function FileType({navigation}) {
    // Add your logics
    const fileTypeArr = [
        {label: 'Patient', value: Math.random().toString(25).substring(10)},
        {label: 'Admin', value: Math.random().toString(19).substring(9)},
        {label: 'Vendor', value: Math.random().toString(20).substring(8)},
        {label: 'General', value: Math.random().toString(20).substring(10)},
        {label: 'Laboratory', value: Math.random().toString(23).substring(9)},
        {label: 'Staff', value: Math.random().toString(26).substring(9)},
        {label: 'Contract', value: Math.random().toString(27).substring(8)},
        {label: 'Business', value: Math.random().toString(24).substring(7)},
        {label: 'Customer', value: Math.random().toString(22).substring(6)},
        {label: 'Inventory', value: Math.random().toString(20).substring(7)}
    ]

    const [arrOfDocsTitle, setArrOfDocsTitle] = useState([])
    const [selected, setSelected] = useState([]);
    const [fileInfo, setFileInfo] = useState();
    const [selectedArrOfObj, setSelectedArrOfObj] = useState([{}])

    const dispatch = useDispatch();

    const saveToStorage = async (selectedFileInfo) => {
      for (const oneFileInfo of selectedFileInfo) {
        dispatch(addFileTitle(oneFileInfo))
      }
    }
    
    const getSelectedDocTitlesObjIntoArr = () => {
      const arrOfTitles = [];
      for (var obj of fileTypeArr) {
        for (var thg of selected) {
          if (obj.value === thg) {
            arrOfTitles.push(obj)
          }
        }
      }
      return arrOfTitles;
    }

    const getAllDocTitlesArr = () => {
      const selectedDocsTitlesArr = getSelectedDocTitlesObjIntoArr();
      const combinedDocsTitlesArr = [...selectedDocsTitlesArr, ...arrOfDocsTitle];
    // //   props.onPassDocsTitle(combinedDocsTitlesArr);
      saveToStorage(combinedDocsTitlesArr);
    //   console.log('doc titles: ', combinedDocsTitlesArr)
      navigation.push('screenStack/partsToScan');
    }
    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.selecetedTextStyle}>{item.label}</Text>
                {/* <FontAwesomeIcon 
                    icon="fa-regular fa-id-card"
                    color="skyblue" 
                    size={15}
                /> */}
                {/* <AntDesign name="delete" size={15} color="Skyblue" /> */}
            </View>
        );
    };

    
    const changeTitleTextToObj = (text) => {
      setFileInfo(text);
    }

    const submitDocTitles = () => {
      let titleObj = {
        label: fileInfo,
        value: Math.random().toString(36).substring(7)
      }
      // console.log("Current target", arrOfDocsTitle, "titleObj3", titleObj)
      // console.log("Current target", arrOfDocsTitle, "titleObjSubmit2", documentTitle)
      setArrOfDocsTitle([...arrOfDocsTitle, titleObj]);
      // arrOfDocsTitle.push(titleObj);
      // console.log("Arr", arrOfDocsTitle)
      setFileInfo(' ')
      
    }

    const deleteTitleBox = (removeVAL) => {
      //get the index of the exact item
      // pass it to the splice method
      const arrOfDocsTitleToRemoveFrom = [...arrOfDocsTitle]
      const indexOfItemTodelete = arrOfDocsTitleToRemoveFrom.findIndex(titleItm => titleItm.label === removeVAL.label );
      arrOfDocsTitleToRemoveFrom.splice(indexOfItemTodelete, 1);
      setArrOfDocsTitle(arrOfDocsTitleToRemoveFrom);
      // console.log('deleting', arrOfDocsTitleToRemoveFrom)
      ToastAndroid.show('Deleted', ToastAndroid.SHORT)
    }

    return(
        <SafeAreaView style={styles.dropdownPages}>
            <Button 
              title='Scan without Sorting' 
              onPress={()=> {
                
                // navigation.reset({
                //   index: 0,
                //   routes: [{name: 'screenStack/home', params: {isScannerBtn: true}}
                //   ]
                // })
                // console.log('I am New here before: ', navigation.getState())
                navigation.push('screenStack/scanWithCamera')
                } 
                }
            />
            <View>
                <Text style={styles.docsTitle}> Select File Title:</Text>
                {/* As docs title is typed and submitted, the array
                is populated. The SelectDropdown comp picks from that
                array.
                PROCESS AND STEP
                As the selects teh docs title from the dropdropdown, it normally
                leads them to the camera page for scanning. This means that the 
                title have to go the db with docs. On next visit, the itemTitle 
                array need to come from the db by https call then. So he can have the
                list of previews itemtitle again.
                in the docs title and submit. They get into 
                the array.
                */}
                {/* <TextInput
                    style={styles.input}
                    placeholder="Document's Identity"
                    value={documentTitle}
                    onChangeText={setDocumentTitle} 
                /> */}
            </View> 
            <ScrollView>
            <MultiSelect 
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selecetedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={fileTypeArr}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                value={selected}
                activeColor="#F7DBB6"
                search
                searchPlaceholder="Search..."
                onChange={item => {
                    setSelected(item);
                }}
                renderLeftIcon={() => ( 
                    // <FontAwesomeIcon 
                    //     icon="fa-regular fa-id-card"
                    //     color="steelblue" 
                    //     size={20}
                    // />
                    <></>
                )}
                onChangeText={(datum) => console.log("onchangeTxt:", datum) }
                onConfirmSelectItem={(datum) => console.log("onConfirmSelect", datum)}
                renderItem={renderItem}
                renderSelectedItem={(item,unselect) => (
                    <TouchableOpacity onPress={
                        () => unselect && unselect(item)
                    }>
                        <View style={styles.selectedStyle}>
                            <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            {/* <FontAwesomeIcon 
                                color="steelblue"
                                icon="fa-solid fa-user-xmark" 
                                size={15}
                            /> */}
                            <AntDesign name="delete" size={15} color="steelblue" />
                        </View>
                        
                    </TouchableOpacity>
                )}
            />

            {/* From input box */}
            
              <View> 
                {arrOfDocsTitle.map(itm => {
                  return(
                      <TouchableOpacity onPress={(itm) => deleteTitleBox(itm)} key={itm.value} style={styles.selectedStyle}>
                        <Text style={styles.textSelectedStyle}>{itm.label}</Text>
                        {/* <FontAwesomeIcon 
                                color="steelblue"
                                icon="fa-solid fa-user-xmark" 
                                size={15}
                            /> */}
                            <AntDesign name="delete" size={15} color="steelblue" />
                      </TouchableOpacity>
                  )
                })}
              </View>
            
          </ScrollView>

            {/* <View style={styles.space}></View> */}
            <View style={styles.inputSelect}>
                <Text style={styles.inputDocsTitle}>Enter a Name or Title for your File</Text>
                <TextInput 
                  style={styles.docsTitleTextInput}
                  value={fileInfo}
                  onChangeText={changeTitleTextToObj}
                  onSubmitEditing={submitDocTitles}
                  placeholder="Eg: car paper, Employee agreement"                  
                  cursorColor={'#5C8FAB'}
                  placeholderTextColor= "#5C8FAB"
                />
                {/* <View> */}
                  {/* <Text>{selected}</Text> */}
                  {/* <Link href='/partsToScan'> */}
                    <Button 
                      title='Submit'
                      onPress={getAllDocTitlesArr}
                    />
                  {/* </Link> */}
                {/* </View> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  dropdownPages: {
    flex: 1,
    backgroundColor: 'transparent',
    color: 'blue',
    justifyContent: 'center',
    
  },  
  // container: { 
  //     padding: 16,
  //    },
    dropdown: {
      height: 50,
      width: 410,
      backgroundColor: '#B7E0F7',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      
      elevation: 2,
    },
    docsTitle: {
      padding: 5,    
    },
    inputDocsTitle: {
      padding: 5,
      borderColor: 'transparent',
      width: 400,
      color: 'black'
    },
    // space: {
    //   // width: 5,
    //   //height: 200
    // },
    inputSelect: {
      position: "relative",
      // zIndex: 0,
      // top: 605
      marginBottom: 5
    },
    docsTitleTextInput: {
      borderColor: '#5C8FAB',
      borderWidth: 3,
      height: 50,
      backgroundColor: '#B7E0F7',
      fontSize: 16,
      borderRadius: 10,
      padding: 5
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 14,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    // icon: {
    //   marginRight: 5,
    // },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    selectedStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
      backgroundColor: 'white',
      shadowColor: '#000',
      marginTop: 8,
      marginRight: 12,
      paddingHorizontal: 12,
      paddingVertical: 8,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
      borderColor: '#5C8FAB',
      borderWidth: 2
    },
    textSelectedStyle: {
      marginRight: 5,
      fontSize: 16,
    },
  });