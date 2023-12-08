export class DashboardDataShape {
    constructor(
        fileName,
        fName,
        lName,
        id,
        fileNo,
        applicTag
    ) {
        this.docName = fileName;
        this.fName = fName;
        this.lName = lName;
        this.fileId = id;
        this.value = fileNo;
        this.applicTag = applicTag;
    }
}