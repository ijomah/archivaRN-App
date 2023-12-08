export class ShapeApiData {
    constructor(
        tag, 
        // addr, 
        fName,
        lName,
        num,
        approvDo,
        approvDate,
        approvType,
        dcbNo,
        fileYr,
        docTitle,
        value,
        fileId,
        userKey

    ) {
        this.applicTag= tag,
        // this.applicationAddress= addr,
        this.fName= fName,
        this.lName= lName,
        this.applicationNumber= num,
        this.approvalDO= approvDo,
        this.approvalDate= approvDate,
        this.approvalType= approvType,
        this.dcbNumber= dcbNo,
        this.fileYear= fileYr,
        this.docTitle= docTitle,
        this.value= value,
        this.fileId = fileId,
        this.userKey = userKey
    }
}