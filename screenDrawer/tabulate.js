import React, {useContext, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView, Text, SafeAreaView } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-reanimated-table';
import { useState } from 'react';
import SearchBarComponent from '../search/searchBar';
import LocalAuth from '../auth/localAuth';
import { FileManAuthContext } from "../contextStore/authContextApi";
import FileManTableDataShape from '../models/fileManTableDataShape';
import { places } from '../util/data';
import { readApprAndApplicTable, readScannerRes } from "../util/dbService";
import { useSelector } from 'react-redux';

export default function Tablescore(props) {
    const contextAuth = useContext(FileManAuthContext);
    
    //Note titleImgDataFromStore is having doc form details in addition
    const titleAndImgWithFormDet = useSelector((state) => state.titleReducer.titleImgDataFromStore.titleWithImgUri);
    // const docFormData = useSelector((state) => state.titleReducer.commonToDocAndFileFormFromStore.docFormForApplicAndApproval);
    
    const [scanResInDb,  setScanResInDb] = useState([]);
    const isLogIn = contextAuth.isAuth;
    const {tableHeadDet, tableBodyDet, navigation, route} = props

    // const getFromDb = async () => {
    //     let applicantDet = [];
    //     //let apprAndApplicInDb = [];
    //     //let imgDetInDb = [];
    //     //const dbDataApprAndApplic = await readApprAndApplicTable();
    //     //console.log('readApprAndApplicTable', dbDataApprAndApplic);
    //     //const dbDataImgDet = await readScannerRes();
    //     //console.log('readScanner', dbDataImgDet.rows._array);
        
    //     dbDataApprAndApplic.rows._array.forEach((oneRow) => {
    //         // apprAndApplicInDb.push(oneRow)
    //         delete oneRow.applic_id;
    //         delete oneRow.applic_do;
    //         delete oneRow.approv_id;
    //         delete oneRow.approv_date;
    //         delete oneRow.approv_type;
            

    //         dbDataImgDet.rows._array.forEach((rowInDb) => {
    //             // imgDetInDb.push(rowInDb)
    //             oneRow.uri = rowInDb.img_urls;
    //             //oneRow.docValue = rowInDb.doc_value;
    //             //oneRow.imgId = rowInDb.img_id;
    //             //oneRow.dbId = rowInDb.id;
    //             applicantDet.push(oneRow);
    //         });

    //     });

    //     setScanResInDb(applicantDet);

    //     // cominedDbData = Object.assign(
    //     //     {},
    //     //     dbDataApprAndApplic.rows._array,
    //     //     dbDataImgDet.rows._array
    //     // );

    //     console.log('applicant Details from local state', scanResInDb)
    // }

    
    // console.log('table', titleAndImgWithFormDet)

    if (tableHeadDet === undefined && tableBodyDet === undefined) {
        const val = {
            tableHead: ['S/N', 'FILE NAME', 'FILE NUMBER', 'DCB', 'OUTPUT'],
            widthArr: [30, 150, 150, 150, 100]
        }
            const [tableVal, setTableVal] = useState(val);
            
            

            const state = {...tableVal};
            const tableData = [];

            const formedObjArr = [];
            const objValue = []
            //Reshape your data to suite the component
            titleAndImgWithFormDet.forEach((datum) => {
                
                if (datum.value === props.route.params.value) {
                    objValue.push(datum.value)
                    for (let key1 in datum) {
                        if (typeof(datum[key1]) === 'object') {
                            var wellFormedData = new FileManTableDataShape(
                                Number(key1)+1, 
                                datum.applicationName, 
                                datum.applicationNumber,
                                datum.approvalDate,
                                datum[key1].uri
                            );
                            formedObjArr.push(wellFormedData)
                        }
                    }
                }
            })    

            let counterForTableData = 0
            formedObjArr.forEach((element) =>{
                // console.log('newINfo', element);
                
                const rowInfo = Object.values(element);
                // console.log('newINfo', rowInfo);
                //shift the 1st ele, 
                counterForTableData += 1;
                rowInfo.shift();
                rowInfo.unshift(counterForTableData);
                tableData.push(rowInfo);
            })
            

            // for (let i = 0; i < 30; i += 1) {
            //   const rowData = [];
            //   for (let j = 0; j < 5; j += 1) {
            //     rowData.push(`${i}${j}`);
            //   }
            //   tableData.push(rowData);
            // }   

            const alertIndex = (index) => {
                Alert.alert(`This is row ${index + 1}`);
              }
              
            const element = (data, index) => {
                // console.log(typeof(data), data)
                return (
                    <TouchableOpacity 
                        onPress={
                            () => {
                                navigation.navigate(
                                    'screenStack/docPreview', 
                                    {
                                        docValue: objValue[0],
                                        imgUrl: data
                                    }
                                )
                            }
                        }
                    >
                    <View style={styles.btn}>
                        <Text 
                            style={styles.btnText}
                        >
                            PREVIEW
                        </Text>
                    </View>
                    </TouchableOpacity>
                )
            }

            // useEffect(() => {
            //     getFromDb();
            // }, []);
            
            return (
        <>
          {isLogIn? 
                <SafeAreaView>
                   

                {/* file data display table */}
                <View style={styles.container}>
                <Text 
                    style={{alignSelf: 'center', fontSize: 20, fontWeight: 500}}
                >{props.route.params.label}{''} Files</Text>
                <SearchBarComponent 
                   tableDataArr={titleAndImgWithFormDet} 
                />
                <ScrollView horizontal={true} >
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: 'lightyellow'}}>
                    <Row 
                        data={state.tableHead} 
                        widthArr={state.widthArr} 
                        style={styles.header} 
                        textStyle={styles.text}
                    />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                        {
                        tableData.map((rowData, index) => (
                            // <Row
                            //     key={index}
                            //     data={rowData}
                            //     widthArr={state.widthArr}
                            //     style={[styles.row, {backgroundColor: '#F7F6E7'}]}
                            //     textStyle={styles.text}
                            // />
                            <TableWrapper key={index} style={styles.tableWrapperRow}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell 
                                            width={state.widthArr[cellIndex]} 
                                            //height={20} 
                                            flex={1} 
                                            key={cellIndex} 
                                            data={
                                                cellIndex === 4? 
                                                        element(cellData, index) 
                                                    :   cellData
                                            } 
                                            textStyle={styles.text} 
                                        />
                                    ))
                                }
                            </TableWrapper>
                        ))
                        }
                    </Table>
                    </ScrollView>
                </View>
                </ScrollView>
            </View>

                </SafeAreaView>
                :  
                // local file manager auth 
                    <LocalAuth /> 
                }      
        </> 
            )
    } else {
         
            return (
            <View style={styles.container}>
                <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 500}}
                >Admin Files</Text>
                {/* <SearchBarComponent 
                    
                /> */}
                <ScrollView horizontal={true} >
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: 'lightyellow'}}>
                    <Row 
                        data={tableHeadDet.tableHead} 
                        widthArr={tableHeadDet.widthArr} 
                        style={styles.header} 
                        textStyle={styles.text}
                    />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                        {
                        tableBodyDet.tableData.map((rowData, index) => (
                            <Row
                            key={index}
                            data={rowData}
                            widthArr={tableBodyDet.widthArr}
                            style={[styles.row, {backgroundColor: '#F7F6E7'}]}
                            textStyle={styles.text}
                            />
                        ))
                        }
                    </Table>
                    </ScrollView>
                </View>
                </ScrollView>
            </View>
            )
    }

}
        const styles = StyleSheet.create({
        container: { padding: 16, paddingTop: 30, height: 780, },
        header: { height: 50, backgroundColor: 'steelblue'},
        text: { textAlign: 'center', fontWeight: '400'},
        dataWrapper: { marginTop: -1 },
        row: { height: 40, 
            backgroundColor: '#E7E6E1' 
            // backgroundColor: 'red',
        },
        tableWrapperRow: { 
            flexDirection: 'row', 
            backgroundColor: '#FFF1C1' 
        },
        btn: { 
            width: 68, 
            height: 18, 
            backgroundColor: '#78B7BB',  
            borderRadius: 2,
            alignSelf: 'center'
        },
        btnText: { 
            textAlign: 'center', 
            color: '#fff', 
            textDecorationLine: 'underline',
            fontSize: 12 
        }
        });    