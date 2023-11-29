export class ShapeApiData {
    constructor(
        tag, 
        addr, 
        name,
        num,
        approvDo,
        approvDate,
        approvType,
        dcbNo,
        fileYr,
        docTitle,
        value

    ) {
        this.applicTag= tag,
        this.applicationAddress= addr,
        this.applicationName= name,
        this.applicationNumber= num,
        this.approvalDO= approvDo,
        this.approvalDate= approvDate,
        this.approvalType= approvType,
        this.dcbNumber= dcbNo,
        this.fileYear= fileYr,
        this.docTitle= docTitle,
        this.value= value
    }
}