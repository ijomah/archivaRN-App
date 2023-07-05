import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export default PreDropDown = () => {
    const itemTitles = ["Front Cover", "Back Cover", 
                    "Survey Plan", "Receipts", "title document",
                    "Vetting and Recommendation", "Electrical drawing",
                    "Structural drawing", "Architectural drawing", 
                    "Mechanical drawing", "Application form", "Query"
                ]
    const [inputSelect, setInputSelect] = useState();
    const [documentTitles, setDocumentTilte] = useState(itemTitles);

    return(
        <View>
            <View style={styles.inputDocsTitle}>
                <Text>Document Title:</Text>
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
                <TextInput
                    style={styles.input}
                    placeholder="Document's Identity"
                    value={documentTitle}
                    onChangeText={setDocumentTitle} 
                />
            </View>
            <View style={Styles.inputSelect}>
            <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
		        return item
                }}
            />  
            </View>
        </View>
    )
}