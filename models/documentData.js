export class DocumentModel {
    constructor(
        value,
        label,
        imgId,
        imgUrl, 
        address, 
        imgName, 
        applicationName, 
        applicationNo,
        fileName,
        fileNo,
        fileType
    ) { 
        this.titleValue = value;
        this.titleLabel = label;
        this.imgId = imgId;
        this.imgUrl = imgUrl; 
        this.address = address;
        this.imgName = imgName;
        this.applicationName = applicationName; 
        this.applicationNo = applicationNo;
        this.fileName = fileName;
        this.fileNo = fileNo;
        this.fileType = fileType;
    }
}