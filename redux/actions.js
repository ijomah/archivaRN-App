import { 
    ALLDOCTITLES, ALLFILEINFO,
    DeleteDropDownDocTitles, MarkScannedPage, 
    RequestDocFailed, RequestDocPending, RequestDocSuccess,
    SelectAllDocTitlesDropDown, submitSelectedDocTitle, 
    SaveScannedPage, ScanPage, SelectAllDocTitlesInput, SelectTitleFromTitleList,
    SendDocFailed, SendDocSuccess, SendDocPending, ShareScannedPage, 
    TypedInputDocTitle, UnselectAllDocTitlesInput, UnselectAllDocTitlesDropDown
} from "./constant";

export const SelectAllDocTitlesDrop = (docTitleObj) => {
    return {type: SelectAllDocTitlesDropDown, payload: docTitleObj}
}

export const UnselectAllDocTitlesDrop = (unselectedTitleObj) => {
    return {
        type: UnselectAllDocTitlesDropDown, payload: unselectedTitleObj
    }
}

export const DeleteDropDownDocInfo = (tappedDropDownDocTitles) => {
    return {
        type: DeleteDropDownDocTitles, payload: tappedDropDownDocTitles
    }
}

export const TypedInputDocInfo = (inputDocInfo) => {
    return {
        type: TypedInputDocTitle, payload: inputDocInfo
    }
}