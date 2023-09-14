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
            state.titleWithImgUri.splice(state.titleWithImgUri.indexOf(action.payload.value), 1)
        },
        removeFileTitleWithImgUri: (state, action) => {
            state.titleWithImgUri.splice(state.titleWithImgUri.indexOf(action.payload.value), 1)
        },
    }
})

export const { addDocTitleWithImgUri, addFileTitleWithImgUri, removeDocTitleWithImgUri, removeFileTitleWithImgUri} = titleImgSlice.actions
export const { addDocTitle, addFileTitle, removeDocTitle, removeFileTitle } = titleSlice.actions;

const mergedReducer = combineReducers({
    titlesDataFromStore: titleSlice.reducer,
    titleImgDataFromStore: titleImgSlice.reducer
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