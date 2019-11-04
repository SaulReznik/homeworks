Array.prototype.myMap = function(cb, thisArg) {
    let currentArray = arr;
    let result = [];

    //If there's passed object with callback
    //We will bind {this} of callback to that object
    let callback = cb.bind(thisArg); 

    for (let i = 0; i < arr.length; i++){
        let currentValue = arr[i];
        let currentIndex = arr.indexOf(arr[i]);

        result.push(callback(currentValue, currentIndex, currentArray));
    };

    return result;
}

let arr = [1,2,3];

let obj = {
    num: 2
}

let original = arr.map(function(item) {
    return item * this.num;
}, obj);

var custom = arr.myMap(function (item) {
    return item * this.num;
}, obj);


console.log(original);
console.log(custom);



