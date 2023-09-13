import React from "react";
import { createReducer } from "@reduxjs/toolkit";

import { 
    ALLDOCTITLES, ALLFILEINFO,
    DeleteDropDownDocTitles, MarkScannedPage, 
    RequestDocFailed, RequestDocPending, RequestDocSuccess,
    SelectAllDocTitlesDropDown, SubmitSelectedDocTitle, SubmitSelectedFileTitle,  
    SaveScannedPage, ScanPage, SelectAllDocTitlesInput, SelectTitleFromTitleList,
    SendDocFailed, SendDocSuccess, SendDocPending, ShareScannedPage, 
    TypedInputDocTitle, UnselectAllDocTitlesInput, UnselectAllDocTitlesDropDown
} from "./constant";

const submitSelectedDocTitleReducer = createReducer([], (builder) => {
 builder
 // I am considering only the submitted selected doc titles from dropdown & input
 //Ignoring other action-types cos I dont want a re-render from them by React.
    .addCase(SubmitSelectedDocTitle, (state, action) =>{
        state.push(action.payload)
    })
})