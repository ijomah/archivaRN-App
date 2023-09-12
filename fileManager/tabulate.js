import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-reanimated-table';
import { useState } from 'react';

export default function Tablescore(props) {
    const {tableHeadDet, tableBodyDet}  = props
    if (tableHeadDet === undefined && tableBodyDet === undefined) {
        const val = {
            tableHead: ['S/N', 'FILE NAME', 'FILE NUMBER', 'DCB', 'OUTPUT'],
            widthArr: [30, 100, 100, 100, 100]
        }
            const [tableVal, setTableVal] = useState(val);
            

            const state = {...tableVal};
            const tableData = [];
            for (let i = 0; i < 30; i += 1) {
              const rowData = [];
              for (let j = 0; j < 5; j += 1) {
                rowData.push(`${i}${j}`);
              }
              tableData.push(rowData);
            }   
            return (
            <View style={styles.container}>
                <ScrollView horizontal={true} >
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: 'lightyellow'}}>
                    <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                        {
                        tableData.map((rowData, index) => (
                            <Row
                            key={index}
                            data={rowData}
                            widthArr={state.widthArr}
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
    } else {
         
            return (
            <View style={styles.container}>
                <ScrollView horizontal={true} >
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: 'lightyellow'}}>
                    <Row data={tableHeadDet.tableHead} widthArr={tableHeadDet.widthArr} style={styles.header} textStyle={styles.text}/>
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
        container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
        header: { height: 50, backgroundColor: 'steelblue'},
        text: { textAlign: 'center', fontWeight: '400'},
        dataWrapper: { marginTop: -1 },
        row: { height: 40, backgroundColor: '#E7E6E1' }
        });    