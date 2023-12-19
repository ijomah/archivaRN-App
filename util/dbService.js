import * as SQLite from 'expo-sqlite';
// async function openDatabase(pathToDatabaseFile) {
//     if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
//       await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
//     }
//     await FileSystem.downloadAsync(
//       Asset.fromModule(require(pathToDatabaseFile)).uri,
//       FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'
//     );
//     return SQLite.openDatabase('myDatabaseName.db');
// }

export const db = SQLite.openDatabase('arch.db');  //, version); 2nd parameter for 
let tableRes = db.exec([{ sql: 'DROP DATABASE archived;', args: [] }], false, (resultSet) => {
  console.log('res Pragma:', resultSet)
  return resultSet}
);
// { sql: 'PRAGMA table_list(files);', args: [] }
// console.log(tableRes)

export function dbInit() {
    // console.log('db', db);
    const promiseObj = new Promise((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql(`PRAGMA table_info(jagonbox)`
                // CREATE TABLE IF NOT EXISTS jargonbox (
                //     id INTEGER NOT NULL PRIMARY KEY,                    
                //     address TEXT,
                //     applic_no VARCHAR(25),
                //     applic_name TEXT,
                //     dcb_no VARCHAR(25),
                //     doc_name TEXT,
                //     doc_no VARCHAR(25),
                //     file_name TEXT,
                //     file_no VARCHAR(25),
                //     file_type TEXT,
                //     img_name VARCHAR(50) NOT NULL,
                //     img_url VARCHAR(225) NOT NULL,
                //     title_value VARCHAR(25),
                //     title_label TEXT
                //     )`
                //     // ,
                    // [],
                    // () => {
                    //     resolve();
                    // },
                    // (_, error) => {
                    // //  console.log(err);
                    //     reject(error)
                    // }
                )
            

                //New table to be creaated

                tx.executeSql(`CREATE TABLE IF NOT EXISTS files (
                    id INTEGER NOT NULL PRIMARY KEY,
                    file_name TEXT NOT NULL,
                    file_no INTEGER NOT NULL,
                    file_type TEXT,
                    date_created NUMERIC,
                    user_id,
                    applic_id,
                    FOREIGN KEY(applic_id) REFERENCES applications(id),
                    FOREIGN KEY(user_id) REFERENCES users(id)
                )`
                // ,
                // [],
                // () => {
                //     resolve()
                // },
                // (_, err) => {
                //     reject(err)
                // }
                );

                tx.executeSql(`CREATE TABLE IF NOT EXISTS users (
                    id INTEGER NOT NULL PRIMARY KEY,
                    user_key TEXT,
                    date_created NUMERIC
                )`
                // ,
                // [],
                // () => {
                //     resolve()
                // },
                // (_, err) => {
                //     reject(err)
                // }
                );

                tx.executeSql(`CREATE TABLE IF NOT EXISTS apidbusers (
                    id INTEGER NOT NULL PRIMARY KEY,
                    dbuser_id INTEGER,
                    date_created TEXT
                )`);

                tx.executeSql(`CREATE TABLE IF NOT EXISTS applic_addresses (
                    id INTEGER,
                    address_id INTEGER,
                    applic_id INTEGER,
                    PRIMARY KEY(applic_id, address_id),
                    FOREIGN KEY(applic_id) REFERENCES applications(id),
                    FOREIGN KEY(address_id) REFERENCES addresses(id)
                )`
                // [],
                // () => {
                //     resolve();
                // },
                // (_, err) => {
                //     reject(err)
                // }
                );

                tx.executeSql(`CREATE TABLE IF NOT EXISTS names (
                    id INTEGER NOT NULL PRIMARY KEY,
                    f_name TEXT,
                    l_name TEXT,
                    m_name TEXT,
                    applic_id INTEGER,
                    FOREIGN KEY(applic_id) REFERENCES applications(id)
                )`
                )
//Add area name here
                tx.executeSql(`CREATE TABLE IF NOT EXISTS addresses (
                    id INTEGER NOT NULL PRIMARY KEY,
                    house_no INTEGER,
                    street_name TEXT,
                    state TEXT
                )`
                // [],
                // () => {
                //     resolve();
                // },
                // (_, err) => {
                //     reject(err)
                // }
                )
        
                tx.executeSql(`CREATE TABLE IF NOT EXISTS applications (
                    id INTEGER NOT NULL PRIMARY KEY,
                    applic_tag VARCHAR(10),
                    applic_no INTEGER NOT NULL,
                    applic_name TEXT,
                    applic_dob date,
                    approv_id INTEGER,                    
                    FOREIGN KEY(approv_id) REFERENCES approvals(id)
                )` 
                //dob MEANS DATE OF BIRTH
                // () => {
                //     resolve()
                // },
                // (_, err) => {
                //     reject(err)
                // }
                );
        
                tx.executeSql(`CREATE TABLE IF NOT EXISTS approvals (
                    id INTEGER NOT NULL PRIMARY KEY,
                    approv_type TEXT,
                    approv_date INTEGER,
                    approv_do TEXT,
                    dcb_no INTEGER
                )`
                // [],
                // () => {
                //     resolve();
                // },
                // (_, err) => {
                //     reject(err);
                // }
                )
        
                tx.executeSql(`CREATE TABLE IF NOT EXISTS pixs (
                        id INTEGER NOT NULL PRIMARY KEY,
                        img_urls VARCHAR(225),
                        img_name VARCHAR(50),
                        img_id INTEGER,
                        doc_value VARCHAR(20),
                        file_id INTEGER,
                        FOREIGN KEY(file_id) REFERENCES files(id)
                    )`
                // [], img_size VARCHAR(10),
                // () => {
                //     resolve();
                // },
                // (_, err) => {
                //     reject(err)
                // }
                );
                
                tx.executeSql(`CREATE TABLE IF NOT EXISTS names (
                    id INTEGER NOT NULL PRIMARY KEY,
                    f_name TEXT,
                    l_name TEXT,
                    m_name TEXT,
                    applic_id INTEGER,
                    FOREIGN KEY(applic_id) REFERENCES applications(id)
                )`
            // [], img_size VARCHAR(10),
            // () => {
            //     resolve();
            // },
            // (_, err) => {
            //     reject(err)
            // }
            );

            tx.executeSql(`CREATE TABLE IF NOT EXISTS countries (
                id INTEGER NOT NULL PRIMARY KEY,
                country_code TEXT,
                country_Name,
                zip_code INTEGER,
                address_id INTEGER,
                FOREIGN KEY(address_id) REFERENCES addresses(id)
            )`
        // [], img_size VARCHAR(10),
        // () => {
        //     resolve();
        // },
        // (_, err) => {
        //     reject(err)
        // }
        );

                tx.executeSql(`CREATE TABLE IF NOT EXISTS documents (
                    id INTEGER NOT NULL PRIMARY KEY,
                    doc_title TEXT,
                    doc_value VARCHAR(50),
                    pix_id INTEGER,
                    FOREIGN KEY(pix_id) REFERENCES pixs(id)
                )`)
                // doc_no VARCHAR(10),
                //     img_id INTEGER,
                //     date_created NUMERIC,
                //     update_count INTEGER,
                //     date_updated NUMERIC
            },
            (err) => {
                console.log('err from transaction', err);
            },
            () => {
                console.log('Table creation, complete!');
            }
            
        )
    })    
    return promiseObj
}

// function createTables() {
//     // you need an instance of a promise object here
//     db.transaction((tx) => {
//     //Application table
//     // Approval table
//     // console.log(tx);
//         tx.executeSql(`CREATE TABLE IF NOT EXIST files (
//             files_id INTEGER NOT NULL PRIMARY KEY,
//             file_name TEXT NOT NULL,
//             file_no INTEGER NOT NULL,
//             file_type TEXT,
//             date_created NUMERIC
//         )`);

//         tx.executeSql(`CREATE TABLE IF NOT EXITS application (
//             applic_id INTEGER NOT NULL PRIMARY KEY,
//             applic_no INTEGER NOT NULL,
//             applic_name TEXT
//         )`)

//         tx.executeSql(`CREATE TABLE IF NOT EXISTS approval (
//             approv_id INTEGER NOT NULL PRIMARY KEY,
//             approv_type TEXT,
//             approv_date INTEGER,
//             approv_do TEXT,
//             dcb_no INTEGER
//         )`)

//         tx.executeSql(`CREATE TABLE IF NOT EXISTS img (
//             id INTEGER NOT NULL PRIMARY KEY,
//             img_urls VARCHAR(150) NOT NULL,
//             img_name VARCHAR(50),
//             img_size VARCHAR(10)
//         )`);

//         tx.executeSql(`CREATE TABLE IF NOT EXISTS address (
//             id INTEGER NOT NULL PRIMARY KEY,
//             house_no INTEGER,
//             street_name TEXT,
//             state TEXT,
//             country TEXT
//         )`)
//     });
// }

export const storeData = (docData) => {
    const storeDataPromise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            // for (const oneItm in docData) {
                tx.executeSql(`
                    INSERT INTO apidbusers (
                        dbuser_id, 
                        date_created
                        ) 
                    VALUES (?, ?)`,
                    [
                        docData.id,
                        docData.date
                        // docData.streetName,
                        // docData.state
                    ],
                    (_, res) => {
                        console.log('apidbusers good', res)
                        resolve(res)
                    },
                    (_, err) => {
                        console.log('apidbusers', err)
                        reject(err)
                    }
                );

//                 tx.executeSql(`
//                     INSERT INTO countries (
//                         country_code,
//                         country_name,
//                         zip_code
//                     ) VALUES (?, ?, ?)`,
//                     [
//                         docData.countryCode,
//                         docData.country,
//                         docData.fileYear
//                     ],
//                     (_, res) => {
//                         console.log(res)
//                         resolve(res)
//                     },
//                     (_, err) => {
//                         console.log(err)
//                         reject(err)
//                     }
//                 );
// //Remember to drop column applic_name here. 
// //it is now in name table
// //Relationship is many to many
//                 tx.executeSql(`
//                     INSERT INTO applications (
//                         applic_tag
//                         applic_no,
//                         applic_name,
//                         applic_dob
//                     ) VALUES (?, ?, ?)`,
//                     [
//                         docData.phoneNo,
//                         docData.value,
//                         docData.fname,
//                         docData.fileYear,
//                     ],
//                     (_, res) => {
//                         console.log(res)
//                         resolve(res)
//                     },
//                     (_, err) => {
//                         console.log(err)
//                         reject(err)
//                     }
//                 )

//                 tx.executeSql(`
//                 INSERT INTO names (f_name, l_name, m_name)
//                 VALUES (?, ?, ?)`,
//                 [
//                     docData.fName,
//                     docData.lName,
//                     docData.areaName
//                 ],
//                 (_, res) => {
//                     console.log(res)
//                     resolve(res)
//                 },
//                 (_, err) => {
//                     console.log(err)
//                     reject(err)
//                 }
//                 )
                // tx.executeSql(`INSERT INTO jargonbox (
                //         img_url,
                //         address,
                //         img_name,
                //         applic_no,
                //         applic_name,
                //         file_name,
                //         file_no,
                //         file_type
                // ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                // [
                //     docData[oneItm].uri,
                //     docData.address, 
                //     docData[oneItm].imgName, 
                //     docData.value, 
                //     docData.docTitle,
                //     docData.docTitle,
                //     docData[oneItm].imgId,
                //     docData[oneItm].imgName
                // ],
            //}
        },
        (err) => {
            console.log('err from transaction', err);
        },
        () => {
            console.log('Data insertion, complete!');
        }
        );

    })
    return storeDataPromise
}

export const insertToApprAndApplicTable = (applicData) => {
    const insertToApprAndApplicTablePromise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`INSERT INTO application (
                applic_tag,
                applic_no,
                applic_name
            ) VALUES (?, ?)`,
            [
                applicData.applicTag,
                applicData.applicationNumber,
                applicData.applicationName
            ]);

            tx.executeSql(`INSERT INTO approval (
                approv_type,
                approv_date,
                approv_do,
                dcb_no
            ) VALUES (?, ?, ?, ?)`,
            [
                applicData.approvalType,
                applicData.approvalDate,
                applicData.approvalDo,
                applicData.dcbNumber
            ],
            (_, res) => {
                console.log(res);
                resolve(res);
            },
            (_, err) => {
                console.log(err);
                reject(err);
            });
        });

    })
    return insertToApprAndApplicTablePromise;
}


export const readUserTable = () => {
    const readUserPromise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`SELECT dbuser_id FROM apidbusers WHERE ID=24`,
            //ID=10 is dev env db testing
            //ID=21, 22, 23, 24is for live db testing
            [],
            (_, res) => {
                //console.log('apidbusers Selecting, complete!');
                resolve(res);
            },
            (_, err) => {
                reject(err);
            })
        })
        
    },
    (err) => {
        console.log('err from  sele transaction', err);
    },
    () => {
        console.log('Selecting, complete!');
    }
    )
    return readUserPromise;
}

// This was for jargonBox, but will be used for experimentation
export const readData = () => {
    const readDataPromise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`SELECT 
                                file_name, 
                                applic_name, 
                                file_no, 
                                applic_dob, 
                                img_urls, 
                                applic_no, 
                                approv_date FROM 
                                    applications appl
                            JOIN approvals appr ON 
                                    appl.id = appr.id
                            JOIN files f ON 
                                    appl.id = f.id
                            JOIN pixs px ON
                                    f.id = px.id`,
                            // JOIN address,
                            // country,
                            // approval,
                            // application,
                            // image WHERE id = user_id`,
            [],
            (_, res) => {
                console.log(res)
                resolve(res);
            },
            (_, err) => {
                console.log(err)
                reject(err);
            })
        })
    });
    return readDataPromise;
}

export const minusData = (datumId) => {
    const minusDataPromise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`DELLTE from jarggonbox WHERE id = ${datumId}`,
            [],
            (_, res) => {
                resolve(res)
            },
            (_, err) => {
                reject(err)
            }
            )
        })
    })
    return minusDataPromise;
}

export const updateData = (datumId, dataToFill) => {
    const updateDataPromise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`UPDATE jargonbox 
                SET id = ${dataToFill}
                WHERE id = ${datumId}`,
            [],
            (_, res) => {
                resolve(res);
            },
            (_, err) => {
                reject(err);
            })
        })
    })
    return updateDataPromise;
}

export const insertScannerRes = (scannerResObj) => {
    const dbObj = {};

    
    const scannerResPromise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            for (const oneItem in scannerResObj) {
                // console.log('checking', scannerResObj[oneItem].uri);
                // if (scannerResObj[oneItem].uri === 'undefined' || 
                //     scannerResObj[oneItem].imgId === 'undefined' ||
                //     scannerResObj[oneItem].imgId === 'undefined'
                // )
                tx.executeSql(`INSERT INTO pixs (
                        img_urls, 
                        img_name,
                        img_id, 
                        doc_value
                    )
                    VALUES (?, ?, ?, ?)`, [
                        scannerResObj[oneItem].uri,
                        scannerResObj[oneItem].imgName,
                        scannerResObj[oneItem].imgId,
                        scannerResObj.value
                    ]
                )
            }

                tx.executeSql(`INSERT INTO document (
                    doc_title,
                    doc_value
                    ) VALUES (?, ?)`,
                    [
                        scannerResObj.docTitle,
                        scannerResObj.value,
                    ],
                    (_, res) => {
                        console.log(res);
                        resolve(res);
                    },
                    (_, err) => {
                        console.log(err);
                        reject(err);
                    }
                )
        },
        (err) => {
            console.log('err from insertScanRes', err)
        },
        () => {
            console.log('insertScanRes complete')
        })
    })
    return scannerResPromise;
}

export const readScannerRes = () => {
 const scannerResPromise = new Promise((resolve, reject) => {
    db.transaction((tx) =>{
        tx.executeSql(`SELECT * FROM pixs WHERE img_urls IS NOT NULL`,
        [],
            (_, res) => {
                resolve(res);
            },
            (_, err) => {
                reject(err);
            }
        )

        tx.executeSql(`SELECT * FROM fileS`)
    },
    (err) => {
        console.log('scanner Res err: ', err)
    },
    () => {
        console.log('read scanner res success');
    })
 })
 return scannerResPromise;
}