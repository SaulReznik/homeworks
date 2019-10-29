const some = (arr, callback) => {
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

    //If theres at least one true condition
    //return true
    if (counter > 0) {
        return true;
    }

    return false;
}

const even = (num) => {
    return num % 2 === 0;
}

let arr = [1, 2, 3, 3, 5];


console.log(arr.some(even));

console.log(some(arr, even));
