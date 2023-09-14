// import { 
//     ALLDOCTITLES, ALLFILEINFO,
//     DeleteDropDownDocTitles, MarkScannedPage, 
//     RequestDocFailed, RequestDocPending, RequestDocSuccess,
//     SelectAllDocTitlesDropDown, SubmitSelectedDocTitle, SubmitSelectedFileTitle,
//     SaveScannedPage, ScanPage, SelectAllDocTitlesInput, SelectTitleFromTitleList,
//     SendDocFailed, SendDocSuccess, SendDocPending, ShareScannedPage, 
//     TypedInputDocTitle, UnselectAllDocTitlesInput, UnselectAllDocTitlesDropDown
// } from "./constant";

// //Submit doc titles
// export const SubmitAllDocTitles = (docTitleObj) => {
//     return {type: SelectAllDocTitlesDropDown, payload: docTitleObj}
// }

// export const UnselectAllDocTitlesDrop = (unselectedTitleObj) => {
//     return {
//         type: UnselectAllDocTitlesDropDown, payload: unselectedTitleObj
//     }
// }

// export const DeleteDropDownDocInfo = (tappedDropDownDocTitles) => {
//     return {
//         type: DeleteDropDownDocTitles, payload: tappedDropDownDocTitles
//     }
// }

// //Typed Input
// export const TypedInputDocInfo = (inputDocInfo) => {
//     return {
//         type: TypedInputDocTitle, payload: inputDocInfo
//     }
// }