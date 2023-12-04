import { ShapeApiData } from "../models/shapeForApiData";
import { ApiImageDataShape } from "../models/shapeImgFromApi";
import { downloadScannedImg } from "../util/downloadFile";

export const dataForStore = (res) => {
    const imgArray = [];
    const uri = downloadScannedImg('')
    let apiDocData = null;
    res.forEach((apiDatum) => {
        apiDocData = new ShapeApiData(
            apiDatum.applic_tag,
            apiDatum.applic_address,
            apiDatum.applic_no,
            apiDatum.approv_do,
            apiDatum.approv_date,
            apiDatum.approv_type,
            apiDatum.dcb_no,
            apiDatum.file_yr,
            apiDatum.file_name,
            apiDatum.file_tag
        );

        
    const apiImgInfo = new ApiImageDataShape(
            apiDatum.img_tag,
            apiDatum.img_human_name,
            uri
        );
        imgArray.push(apiImgInfo);
    })
    
    // dispatch(addFileManagerDet(Object.assign({}, apiDocData, imgArray)))
    return Object.assign({}, apiDocData, imgArray);
}