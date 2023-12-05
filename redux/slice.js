import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { 
    ALLDOCTITLES, ALLFILEINFO,
    DeleteDropDownDocTitles, MarkScannedPage, 
    RequestDocFailed, RequestDocPending, RequestDocSuccess,
    SelectAllDocTitlesDropDown, SubmitSelectedDocTitle, SubmitSelectedFileTitle,  
    SaveScannedPage, ScanPage, SelectAllDocTitlesInput, SelectTitleFromTitleList,
    SendDocFailed, SendDocSuccess, SendDocPending, ShareScannedPage, 
    TypedInputDocTitle, UnselectAllDocTitlesInput, UnselectAllDocTitlesDropDown
} from "./constant";


const titleSlice = createSlice({
    name: 'title',
    initialState : {
        titles: []
    },
    reducers: {
        addDocTitle: (state, action) => {
            state.titles.push(action.payload)
        },
        addFileTitle: (state, action) => {
            state.titles.push(action.payload)
        },
        removeDocTitle: (state, action) => {
            state.titles.splice(state.titles.indexOf(action.payload.value), 1)
        },
        removeFileTitle: (state, action) => {
            state.titles.slice(state.titles.indexOf(action.payload.value), 1)
        }
    }
})

const titleImgSlice = createSlice({
    name: 'titleWithScannedImgUri',
    initialState: {
        //Note titleImgDataFromStore is having doc form details in addition
        titleWithImgUri: []
    },
    reducers: {
        addFileTitleWithImgUri: (state, action) => {
            state.titleWithImgUri.push(action.payload)
        },
        addDocTitleWithImgUri: (state, action) => {
            state.titleWithImgUri.push(action.payload)
        },
        removeDocTitleWithImgUri: (state, action) => {
            state.titleWithImgUri.splice(state.titleWithImgUri.indexOf(action.payload), 1)
            // state.titleWithImgUri.splice(state.titleWithImgUri.indexOf(action.payload.value), 1)
        },
        removeAllDocTitleWithImgUri: (state, action) => {
            state.titleWithImgUri.splice(action.payload)
        },
        removeFileTitleWithImgUri: (state, action) => {
            state.titleWithImgUri.splice(state.titleWithImgUri.indexOf(action.payload), 1)
            // state.titleWithImgUri.splice(state.titleWithImgUri.indexOf(action.payload.value), 1)
        },
        removeImgUriOnly: (state, action) => {
            state.titleWithImgUri.forEach((titleWithImgUriObj)=> {
                titleWithImgUriObj.scannedImgUri.splice(titleWithImgUriObj.scannedImgUri.indexOf(action.payload.uri), 1)
            } )
            // state.titleWithImgUri.splice(state.titleWithImgUri.indexOf(action.payload.value), 1)
        }
    }
})

const docFormForApplicAndApprovalSlice = createSlice({
    name: 'applicAndApprovalDocForm',
    initialState: {
        docFormForApplicAndApproval: []
    },
    reducers: {
        addDocFormTo: (state, action) => {
            state.docFormForApplicAndApproval.push(action.payload);
        },
        removeDocFormFrom: (state, action) => {
            state.docFormForApplicAndApproval.splice(docFormForApplicAndApproval.indexOf(action.payload.value), 1);
        }
    }
})

const regFormSlice = createSlice({
    name: 'registerForm',
    initialState: {
        formForReg: []
    },
    reducers: {
        addRegFormTo: (state, action) => {
            state.formForReg.push(action.payload);
        },
        removeRegFormFrom: (state, action) => {
            state.formForReg.splice(formForReg.indexOf(action.payload.value), 1);
        }
    }
})

const fileManagerSlice = createSlice({
    name: 'fileManagerDetail',
    initialState: {
        detailsForFileManager: []
    },
    reducers: {
        // addDocTitle: (state, action) => {
        //     state.titles.push(action.payload)
        // },
        addFileManagerDet: (state, action) => {
            state.titles.push(action.payload)
        },
        // removeDocTitle: (state, action) => {
        //     state.titles.splice(state.titles.indexOf(action.payload.value), 1)
        // },
        removeFileManagerDet: (state, action) => {
            state.titles.slice(state.titles.indexOf(action.payload.value), 1)
        }
    }
})

export const { addDocFormTo, removeDocFormFrom } = docFormForApplicAndApprovalSlice.actions;
export const { addDocTitleWithImgUri, addFileTitleWithImgUri, removeDocTitleWithImgUri, removeFileTitleWithImgUri, removeImgUriOnly} = titleImgSlice.actions
export const { addDocTitle, addFileTitle, removeDocTitle, removeFileTitle } = titleSlice.actions;
export const { addFileManagerDet, removeFileManagerDet } = fileManagerSlice.actions
const mergedReducer = combineReducers({
    titlesDataFromStore: titleSlice.reducer,
    titleImgDataFromStore: titleImgSlice.reducer,
    commonToDocAndFileFormFromStore: docFormForApplicAndApprovalSlice.reducer,
    fileManagerDetFromStore: fileManagerSlice.reducer,
    registerForm: regFormSlice.reducer
})
export default mergedReducer




//Below is FROM Docs

// import { combineReducers } from "@reduxjs/toolkit";

// import { submitAllDocTitleReducer, submitAllFileTitleReducer } from "./reducer";


// export const mergedReducer = combineReducers({
//     //These are are slices of the store
//     docTitle: submitAllDocTitleReducer,
//     fileTitle: submitAllFileTitleReducer
// })