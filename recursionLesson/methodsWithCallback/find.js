const find = (arr, callback) => {
    let currentArray = arr;
    let result;

    for (let i in arr) {
        let currentValue = arr[i];
        let currentIndex = arr.indexOf(arr[i]);

        //Iterate until find it
        if ( !callback(currentValue, currentIndex, currentArray) ) {
            continue;
        }

        //When find it, assign it to the result and stop iterations
        result = arr[i];
        break;
    };

    return result;
}

const isBigEnough = (num) => {
    return num >= 10;
}

let arr = [1, 2, 3, 13, 5];


console.log(arr.find(isBigEnough));

console.log(find(arr, isBigEnough));