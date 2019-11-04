
Array.prototype.myEvery = function(cb, thisArg) {
    let currentArray = arr;
    let counter = 0;

    //If there's passed object with callback
    //We will bind {this} of callback to that object
    let callback = cb.bind(thisArg); 

    for (let i in arr) {
        let currentValue = arr[i];
        let currentIndex = arr.indexOf(arr[i]);

        if (!callback(currentValue, currentIndex, currentArray)) {
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

let obj = {
    ten: 10
}

function isBigEnough(num) {
    if (num >= this.ten) {
        return true;
    }
}

let arr = [11, 21, 31, 31, 51];


console.log(arr.every(isBigEnough, obj));

console.log(arr.myEvery(isBigEnough, obj));