import { View, Image, Text, TouchableOpacity } from "react-native";
import Card from "../../proj/tinyParts/card";
import { dynamicColors } from "../../util/Colors";


export default function FileManager() {
    let fileItmList = [
        {id: 200, file: 'Vendor Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 2, file: 'Patient Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 80000, file: 'Staff Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 4, file: 'Admin Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 9, file: 'Lab   Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]},
        {id: 650, file: 'General Files', colour: dynamicColors[Math.floor(Math.random()*dynamicColors.length)]}
    ]
    return (
            <Card 
                flatListData={fileItmList}
            />        
    )
}