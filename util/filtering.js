export const filterSearchVal = (arrOfData, searchString) => {
    console.log('filter', searchString)
    for(let i =0; i<arrOfData.length; ++i) {
        if(typeof(arrOfData[0]) === 'object') {
            const filteredObj = arrOfData.filter((oneValue) => {
                return  oneValue.label.toUpperCase().includes(searchString.toUpperCase())
            });
            //use filtered data
        }else if (typeof(arrOfData[0].length) === 'number') {
            const filtered = arrOfData.filter((oneValue) => {
            return oneValue[i] === searchString
            });
            if(filtered.length > 0) {
                console.log(filtered)
                setfilteredTableArr(filtered)
            }
        }
    }
}