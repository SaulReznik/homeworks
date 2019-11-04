Array.prototype.mySome = function(cb, thisArg) {
    let currentArray = arr;
    let counter = 0;

    //If there's passed object with callback
    //We will bind {this} of callback to that object
    let callback = cb.bind(thisArg); 

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

let obj = {
    zero: 0
};

function even(num) {
    return num % 2 === this.zero;
}

let arr = [1, 2, 3, 3, 5];


console.log(arr.some(even, obj));

console.log(arr.mySome(even, obj));
