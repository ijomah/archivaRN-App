export default class FileManPreviewDataShape {
    constructor(
        applicantName, 
        applicantNumber, 
        approvalType,
        applicationNumber,
        approvalDO,
        approvalDate,
        applicationAddress,
        imgUri
    ) {
            this.applicantName = applicantName;
            this.fileNo = applicantNumber;
            this.approvalType = approvalType;
            this.applicationNo = applicationNumber;
            this.approvingDo = approvalDO;
            this.approvedDate = approvalDate;
            this.applicationAddress = applicationAddress;
            this.imgUri = imgUri;
    }
}