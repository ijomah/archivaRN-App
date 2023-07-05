import  {CHANGE_SEARCH_FIELD,

 REQ_PICS_PENDING, REQ_PICS_SUCCESS, REQ_PICS_FAILED,
 REQ_BRANCH_PENDING, REQ_BRANCH_SUCCESS, REQ_BRANCH_FAILED,

//  REQ_NAMES_PENDING, REQ_NAMES_SUCCESS, REQ_NAMES_FAILED,
 REQ_CATEGORY_PENDING, REQ_CATEGORY_SUCCESS, REQ_CATEGORY_FAILED,

 REQ_CATEGORYONE_PENDING, REQ_CATEGORYONE_SUCCESS, REQ_CATEGORYONE_FAILED,
 REQ_PERSONS_PENDING, REQ_PERSONS_SUCCESS, REQ_PERSONS_FAILED,

 REQ_FILES_PENDING, REQ_FILES_SUCCESS, REQ_FILES_FAILED}
 from './constant';


 export const setSearch = (text) => ({type: CHANGE_SEARCH_FIELD, payload: text})

 export const reqPics =  (url) => {
    dispatch({type: REQ_PICS_PENDING});
    api(url).then((data) => dispatch({type: REQ_PICS_SUCCESS, payload: data}))
            .catch(error => dispatch({type: REQ_PICS_FAILED, payload: error}))
 }

 export const reqPersons =  (url) => {
    dispatch({type: REQ_PERSONS_PENDING});
    api(url).then((data) => dispatch({type: REQ_PERSONS_SUCCESS, payload: data}))
            .catch(error => dispatch({type: REQ_PERSONS_FAILED, payload: error}))
 }

 export const reqbranches =  (url) => {
    dispatch({type: REQ_BRANCH_PENDING});
    api(url).then((data) => dispatch({type: REQ_BRANCH_SUCCESS, payload: data}))
            .catch(error => dispatch({type: REQ_BRANCH_FAILED, payload: error}))
 }

 export const reqCategory =  (url) => {
    dispatch({type: REQ_CATEGORY_PENDING});
    api(url).then((data) => dispatch({type: REQ_CATEGORY_SUCCESS, payload: data}))
            .catch(error => dispatch({type: REQ_CATEGORY_FAILED, payload: error}))
 }

 export const reqCategoryOne =  (url) => {
    dispatch({type: REQ_CATEGORYONE_PENDING});
    api(url).then((data) => dispatch({type: REQ_CATEGORYONE_SUCCESS, payload: data}))
            .catch(error => dispatch({type: REQ_CATEGORYONE_FAILED, payload: error}))
 }

 export const reqFiles =  (url) => {
    dispatch({type: REQ_FILES_PENDING});
    api(url).then((data) => dispatch({type: REQ_FILES_SUCCESS, payload: data}))
            .catch(error => dispatch({type: REQ_FILES_FAILED, payload: error}))
 }