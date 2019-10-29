const filter = (arr, callback) => {
    let currentArray = arr;
    
    let result = [];

    for (let i in arr) {
        let currentIndex = arr.indexOf(arr[i]);
        let currentValue = arr[i];

        //Collect all elements that fit up with our condition
        if (callback(currentValue, currentIndex, currentArray)) {
            result.push(i);
        }

    }

    //And return it
    return result;
}

let arr = [1,2,3,4,5,6];

console.log(arr.filter((item) => {
    if (item > 3) {
        return true;
    }

    return false;
}));

console.log(arr.filter((item) => {
    if (item > 3){
        return true;
    }

    return false;
}));
