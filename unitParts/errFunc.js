
export const isInputValid = (formDataObj) => {
    const inputErr = {};

    for (let ppt in formDataObj) {
        // console.log(ppt)
        // console.log(formDataObj[ppt])
        // console.log(!formDataObj[ppt])
        if(!formDataObj[ppt]) {
             inputErr[ppt] = 'This is required';
                    //formObj[ppt] + ' '  + 'is required';
        }
    }
    // setErrForInput(inputErr);
    //if inputErr is empty ie zero property then no error
    //This fxn also returns boolean
    return {
        isErr: Object.keys(inputErr).length === 0, 
        errObj: inputErr
    }
}