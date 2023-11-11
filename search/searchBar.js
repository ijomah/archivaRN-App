import React, {useState} from "react";
import { View, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function SearchBarComponent(props) {
    const [search, setSearch] = React.useState('');
    const nav = useNavigation()

    const searchWord = (txt) => {
        console.log('search:', txt)
        const filteredRes = props.tableDataArr.filter((val) => {
            //convert to uppercase both 'val' and 'txt'
            //check the nature of data from tableDataArr
            if(!!val.imgName) {
                return  txt.toUpperCase().includes(val.imgName.toUpperCase())
            } else if (!!val.label) {
                return  txt.toUpperCase().includes(val.label.toUpperCase())
            } 
        })
        setSearch(filteredRes);
    }
    
    // React.useLayoutEffect(() => {
    // nav.setOptions({
    //     headerSearchBarOptions: {
    //     onChangeText: (event) => setSearch(event.nativeEvent.text),
        
    //     },
    // });
    // }, [nav]);
    return (
        <View>
            {/* <Text>I am searching</Text> */}
            <SearchBar 
                placeholder="Search here ..."
                lightTheme
                round
                autoCorrect={false}
                onChangeText={(text) => searchWord(text) }
                value={search}
            />
        </View>
    )
}