export default class FileManTableDataShape {
    constructor(num, fName, lName, applicNo, dob, fileNo) {
        this.num = num;
        this.fName = fName + ' ' + lName;
        this.applicNo = applicNo;
        this.dob = dob;
        this.value = fileNo;
        // this.imgUri = imgUri;

    }

    
}