const every = (arr, callback) => {
    let currentArray = arr;
    let counter = 0;

    for (let i in arr) {
        let currentValue = arr[i];
        let currentIndex = arr.indexOf(arr[i]);

        if ( !callback(currentValue, currentIndex, currentArray) ) {
            continue;
        }

        //counting every true condition
        counter++;
    };

    //If all the conditions are true
    //return true
    if (counter === arr.length) {
        return true;
    }

    return false;
}

const isBigEnough = (num) => {
    return num >= 10;
}

let arr = [11, 21, 31, 31, 51];


console.log(arr.every(isBigEnough));

console.log(every(arr, isBigEnough));