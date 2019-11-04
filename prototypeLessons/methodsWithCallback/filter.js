Array.prototype.myFilter = function(cb, thisArg) {
    let currentArray = arr;
    let result = [];

    //If there's passed object with callback
    //We will bind {this} of callback to that object
    let callback = cb.bind(thisArg); 

    for (let i in arr) {
        let currentIndex = arr.indexOf(arr[i]);
        let currentValue = arr[i];

        //Collect all elements that fit up with our condition
        if (callback(currentValue, currentIndex, currentArray)) {
            result.push(arr[i]);
        }

    }

    //And return it
    return result;
}

let arr = [1,2,3,4,5,6];

let obj = {
    three: 3
}

console.log(arr.filter(function(item) {
    if (item > this.three) {
        return true;
    }

    return false;
}, obj));

console.log(arr.myFilter(function(item) {
    if (item > this.three){
        return true;
    }

    return false;
}, obj));
