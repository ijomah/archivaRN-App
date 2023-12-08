import { ShapeApiData } from "../models/shapeForApiData";
import { ApiImageDataShape } from "../models/shapeImgFromApi";


export const dataForStore = (res) => {
    
    let apiDocData = [];
    res.forEach((apiDatum) => {
        apiDocDatum = new ShapeApiData(
            apiDatum.applic_tag,
            // apiDatum.applic_address,
            apiDatum.f_name,
            apiDatum.l_name,
            apiDatum.applic_no,
            apiDatum.approv_do,
            apiDatum.approv_date,
            apiDatum.approv_type,
            apiDatum.dcb_no,
            apiDatum.file_yr,
            apiDatum.file_name,
            apiDatum.file_no,
            apiDatum.id,
            apiDatum.user_key,
            apiDatum.date_created,
        );
        apiDocData.push(apiDocDatum)
        
    })
    return apiDocData
}

export const shapingImgData = (apiRespArr, uriArr) => {
    let imgArray = [];
    apiRespArr.forEach((singleVal) => {
        uriArr.forEach((forUri) => {
            if(singleVal[0].img_name === forUri.uri.slice(forUri.uri.lastIndexOf('/')+1, forUri.uri.lastIndexOf('.'))) {
                const apiImgInfo = new ApiImageDataShape(
                    singleVal[0].img_tag,
                    singleVal[0].img_human_name,
                    singleVal[0].img_name,
                    singleVal[0].mime_type,
                    forUri.uri
                );
                
                imgArray.push(apiImgInfo);
            }
        })
        
    })
    console.log('imgArray2', imgArray)
    return imgArray;
}

export const makeStoreData = (objValues1, arrValues2) => {
    return Object.assign({}, objValues1, arrValues2);
}