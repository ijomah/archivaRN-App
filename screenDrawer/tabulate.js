import React, {useContext, useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView, Text, SafeAreaView } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-reanimated-table';
import SearchBarComponent from '../search/searchBar';
import LocalAuth from '../auth/localAuth';
import { FileManAuthContext } from "../contextStore/authContextApi";
import FileManTableDataShape from '../models/fileManTableDataShape';
import { places } from '../util/data';
import { readApprAndApplicTable, readScannerRes } from "../util/dbService";
import { useSelector } from 'react-redux';
import TableSearchBar from '../search/tableSearchBar';

export default function Tablescore(props) {
    const contextAuth = useContext(FileManAuthContext);
    const apidataFromFileManagerSlice = useSelector((state) => state
        .titleReducer
        .fileManagerDetFromStore
        .detailsForFileManager
    )

    // const [filteredTableArr,  setfilteredTableArr] = useState([]);
    const isLogIn = contextAuth.isAuth;
    const {tableHeadDet, tableBodyDet, navigation, route} = props

    

    if (tableHeadDet === undefined && tableBodyDet === undefined) {
        const val = {
            tableHead: ['S/N', 'FILE NAME', 'FILE NUMBER', 'DCB', 'OUTPUT'],
            widthArr: [30, 150, 150, 150, 100]
        }
            const [tableVal, setTableVal] = useState(val);
            
            

            const state = {...tableVal};
            let tableData = [];

            const formedObjArr = [];
            // const objValue = []
            // const reShapeStoreData = () => {
            //     apidataFromFileManagerSlice[0].forEach((dot) => {

            //     })
            // }
            //Reshape your data to suite the component
            apidataFromFileManagerSlice[0].forEach((datum) => {
                let i = 0;
                if (datum.file_name === route.params.label) {
                    // objValue.push(datum.value)
                    // for (let key1 in datum) {
                        // if (typeof(datum[key1]) === 'object') {
                            var wellFormedData = new FileManTableDataShape(
                                `${i+=1}`, 
                                datum.f_name,
                                datum.l_name, 
                                datum.applic_no,                
                                datum.applic_dob,
                                datum.file_no
                            );
                            formedObjArr.push(wellFormedData)
                        // }
                    // }
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
            
            const filterTableVal = (searchString) => {
                // console.log('filter', searchString)
                let filtered = [...tableData];
                for(let i =0; i<tableData.length; ++i) {
                    filtered = tableData.filter((value) => {
                        return value[i].toUpperCase().includes(searchString.toUpperCase())
                    //    return value[i] === searchString
                    });
                    // if(filtered.length > 0) {
                    //     console.log(filtered)
                    //     setfilteredTableArr(filtered)
                    // }
                }
                tableData = filtered;
                // return filtered;
            }

 // if (filteredTableArr.length === 0) {
            //     setfilteredTableArr(tableData)
            // }

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
                                        docValue: data
                                        // docValue: objValue[0],
                                        // imgUrl: data
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
                   
                   <TableSearchBar 
                        style={{}}
                       // onFilterData ={filterTableVal}
                    />
                    {/* file data display table */}
                    <View style={styles.container}>
                        <Text 
                            style={{alignSelf: 'center', paddingTop: 50, fontSize: 20, fontWeight: 500}}
                        >{route.params.label}{''} Files</Text>
                    
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
                                //filterTableVal.length === 0? setfilteredTableArr(tableData)
                                    //  if (filterTableVal.length === 0) 
                                    //     setfilteredTableArr(tableData)
                                    // filteredTableArr
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