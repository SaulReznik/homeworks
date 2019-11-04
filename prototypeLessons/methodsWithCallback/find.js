Array.prototype.myFind = function(cb, thisArg) {
    let currentArray = arr;
    let result;

    //If there's passed object with callback
    //We will bind {this} of callback to that object
    let callback = cb.bind(thisArg); 

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

let obj = {
    ten: 10
};

function isBigEnough (num) {
    return num >= this.ten;
}

let arr = [1, 2, 3, 13, 5];


console.log(arr.find(isBigEnough, obj));

console.log(arr.myFind(isBigEnough, obj));