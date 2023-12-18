export default class FileManPreviewDataShape {
    constructor(
        fName,
        lName,
        applicantNumber, 
        approvalType,
        applicationNumber,
        approvalDO,
        approvalDate,
        // houseNo,
        // streetName,
        // areaName,
        // state
        // imgUri
    ) {
            this.applicantName = fName + ' ' + lName;
            this.fileNo = applicantNumber;
            this.approvalType = approvalType;
            this.applicationNo = applicationNumber;
            this.approvingDo = approvalDO;
            this.approvedDate = approvalDate;
            // this.applicationAddress = houseNo+' '+streetName+' '+areaName+' '+state;
            // this.imgUri = imgUri;
    }
}