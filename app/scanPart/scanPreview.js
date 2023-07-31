import React, {useEffect} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInputComponent, TextInput } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default PreviewPart = () => {
    const [prevImg, setPrevImg] = useState();
    
    const getStoreImg = async () => {
        try {
            const imgUnserialized =  await AsyncStorage.getItem(IMAGESYOUSCANNED);
            const imgYouScannedArr = JSON.parse(imgUnserialized);
            if (imgYouScannedArr !== undefined) {
                setPrevImg([...prevImg, imgYouScannedArr]);
                console.log(imgYouScannedArr);
            }
        } catch(e) {
            console.log(e)
        }
    }
    useEffect(getStoreImg, [])
    return (
        <View>
            <View>
                <Text>Back</Text>
                <Text>
                    <FontAwesomeIcon icon="fa-solid fa-left-long" />
                </Text>
            </View>
            <View style={styles.preview}>
                <Image source={{uri: prevImg}} />
            </View>
            <View>
                <Text>
                    Delete
                    <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                </Text>
            </View>
            <View>
                <Text>Upload</Text>
                <Text>
                    <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-up" />
                </Text>
            </View>
            <View>
                <Text>Download</Text>
                <Text>
                    <FontAwesomeIcon icon="fa-solid fa-download" />
                </Text>
            </View>
            <View>
                <Text>Edit</Text>
                <Text>
                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                </Text>
            </View>
        </View>
    )
}