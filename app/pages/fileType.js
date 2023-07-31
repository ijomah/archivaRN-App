import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { MultiSelect } from "react-native-element-dropdown";
import { Link } from 'expo-router';
import { ALLFILEINFO } from "../../util/const";

import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import  AsyncStorage from '@react-native-async-storage/async-storage';

export default function FileType() {
    // Add your logics
    const fileTypeArr = [
        {label: 'Patient', value: '1'},
        {label: 'Admin', value: '2'},
        {label: 'Vendor', value: '3'},
        {label: 'General', value: '4'},
        {label: 'Laboratory', value: '5'},
        {label: 'Staff', value: '6'},
        {label: 'Contract', value: '7'},
        {label: 'Business', value: '8'},
        {label: 'Customer', value: '9'},
        {label: 'Inventory', value: '10'}
    ]

    const [arrOfDocsTitle, setArrOfDocsTitle] = useState([{ label: "Sample File Information", value: '200'}])
    const [selected, setSelected] = useState([]);
    const [fileInfo, setFileInfo] = useState();
    const [selectedArrOfObj, setSelectedArrOfObj] = useState([{}])

    const saveToStorage = async (selectedFileInfo) => {
      try {
        console.log('ERR from saving to asyncStore:', selectedFileInfo);
        await AsyncStorage.setItem(ALLFILEINFO, JSON.stringify(selectedFileInfo))
      } catch(e) {
        console.log('ERR from saving to asyncStore:',e);
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
    //   props.onPassDocsTitle(combinedDocsTitlesArr);
      saveToStorage(combinedDocsTitlesArr)
    }
    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.selecetedTextStyle}>{item.label}</Text>
                <FontAwesomeIcon 
                    icon="fa-regular fa-id-card"
                    color="skyblue" 
                    size={15}
                />
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

    return(
        <SafeAreaView style={styles.dropdownPages}>
            <View>
                <Text style={styles.docsTitle}>Document Titles:</Text>
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
                    <FontAwesomeIcon 
                        icon="fa-regular fa-id-card"
                        color="steelblue" 
                        size={20}
                    />
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
                            <FontAwesomeIcon 
                                color="steelblue"
                                icon="fa-solid fa-user-xmark" 
                                size={15}
                            />
                        </View>
                        
                    </TouchableOpacity>
                )}
            />

            {/* From input box */}
            <TouchableOpacity onPress={() => console.log("From input manually")}>
              <View> 
                {arrOfDocsTitle.map(itm => {
                  return(
                      <View key={itm.value} style={styles.selectedStyle}>
                        <Text style={styles.textSelectedStyle}>{itm.label}</Text>
                        <FontAwesomeIcon 
                                color="steelblue"
                                icon="fa-solid fa-user-xmark" 
                                size={15}
                            />
                      </View>
                  )
                })}
              </View>
            </TouchableOpacity>
          </ScrollView>

            <View style={styles.space}></View>
            <View style={styles.inputSelect}>
                <Text style={styles.inputDocsTitle}>Enter a Name for your Document</Text>
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
                  <Link href='/filePartsToScan'>
                    <Button 
                      title='Submit'
                      onPress={getAllDocTitlesArr}
                    />
                  </Link>
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
      width: 400,
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
    // docsTitle: {
    //   fontSize: 50,
    //   fontWeight: 900
    // },
    inputDocsTitle: {
      borderWidth: 5,
      fontWeight: 700,
      padding: 5,
      borderColor: 'transparent',
      width: 400,
      color: '#F7DBB6'
    },
    space: {
      // width: 5,
      height: 200
    },
    inputSelect: {
      position: "absolute",
      // zIndex: 0,
      top: 605
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