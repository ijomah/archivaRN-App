import React, {useEffect, useState} from "react";
import { Image } from "expo-image";
import { useSelector } from "react-redux";
import FileManPreviewDataShape from "../models/fileManPreviewDataShape";
import { 
    SafeAreaView, 
    StyleSheet, 
    ScrollView, 
    View, 
    Text, 
    Button 
} from "react-native";


function DocPreview({route}) {
    prevImgDataFromStore = useSelector((state) => 
    (state
        .titleReducer
        .titleImgDataFromStore
        .titleWithImgUri
    )
);

    const [infoForPrev, setInfoForPreiew] = useState({})

    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const imgDataFromTable = route.params.imgUrl.slice(route.params.imgUrl.lastIndexOf('/')+1)
    //route.params.slice(uri.lastIndexOf('/')+1)
//    console.log(imgDataFromTable);

    const downloadItem = () => {
        //put logic
    }

    const getDataForPrev = () => {
        let dataForDisplay;
        prevImgDataFromStore.forEach((datum, index) => {
            for (const key2 in datum) {
                if(typeof(datum[key2]) === 'object') {
                   for (const key3 in datum[key2]) {
                        if(datum[key2][key3].length > 100) {
                            let imgUriSlice = datum[key2][key3]
                                .slice(datum[key2][key3].lastIndexOf('/')+1)
                            if(imgUriSlice === imgDataFromTable) {
                                dataForDisplay = new FileManPreviewDataShape(
                                    datum.applicationName,
                                    datum.applicationNumber,
                                    datum.approvalType,
                                    datum.applicationNumber,
                                    datum.approvalDO,
                                    datum.approvalDate,
                                    datum.applicationAddress,
                                    route.params.imgUrl
                                )
                            }
                        }
                   }
                }
            }
            
        })
        // console.log('dfd', dataForDisplay)
        setInfoForPreiew(dataForDisplay);
    }
    
    useEffect(() => {
        getDataForPrev();

    }, [prevImgDataFromStore])

    return (
        <SafeAreaView>
             <Text 
                    style={{
                        alignSelf: 'center', 
                        fontSize: 20, 
                        fontWeight: 500,
                        marginTop: 7
                    }}
                >Preview</Text>
            <ScrollView style={
                // styles.imgPreviewerStyle, 
                {
                    height: 700, 
                    borderWidth: 2, 
                    borderColor: 'red', 
                    marginTop: 7, 
                    borderStyle: 'solid', 
                    width: 370, 
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    padding: 10,
                    alignSelf: 'center',
                    conentContainerStyle: {
                        justifyContent: 'center'
                    }
                }
            }
            >
            <View style={styles.formPage}>
                <View style={styles.appliName}>
                    <Text>
                        Applicant Name: {' '} {infoForPrev.applicantName}
                    </Text> 
                </View>
                <View style={styles.appliName}>
                    <Text>
                        File Number: {' '} {infoForPrev.applicationNo}
                    </Text> 
                </View>

                <View style={styles.houseNumber}>                        
                    <Text style={styles.houseInput}>    
                       Approval Type: {' '} {infoForPrev.approvalType}
                    </Text>
                </View>

                <View style={styles.appliNo}>
                    <Text>
                        Application Number: {' '} {infoForPrev.applicationNo}
                    </Text>
                </View>

                <View style={styles.areaName}>
                        <Text style={styles.areaInput}>
                            Approval DO: {' '} {infoForPrev.approvingDo}
                        </Text> 
                    </View>
{/* 
                <View style={styles.phoneNumber}>
                    <Text>
                        DCB Number:
                    </Text>
                </View> */}
                

                    <View style={styles.streetName}>
                        <Text style={styles.StreetInput}>
                            Date Approved: {' '} {infoForPrev.approvedDate}
                        </Text>
                    </View>

                    <View style={styles.state}>
                        <Text style={styles.stateInput}>
                            Application Address: {' '} {infoForPrev.applicationAddress}
                        </Text>
                    </View>
                    <Image 
                        style={styles.vendorLogo} 
                        source={{uri:infoForPrev.imgUri}} 
                        resizeMethod="scale"
                        // placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                        // blurRadius={0}
                    />
                </View>
            </ScrollView>
            <Button
                title="DownLoad Item"
                // onPress={downloadItem}
                //onPress={getFromDb}
            />
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    formPage: {

        marginTop: 7,
    },
    vendorLogo: {
        // alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 520,
        width: 330,
        borderRadius: 20,
        marginTop: 10
    },

    navLink: {
        backgroundColor: '#B7E0F7',
        width: 90,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FFEDD6',
        padding: 2,
    },
    archivaLogo: {
        height: 100,
        width: 100,
        marginLeft: 300,
        marginTop: 116,
        borderWidth: 3,
        borderColor: 'skyblue',
        borderRadius: 20
    }
})

export default DocPreview;