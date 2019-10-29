function reduce (arr, callback, result) {
    //We must set the value of i conditionaly
    //Thats why we decalring it here
    let i = 0;

    //If there's no accumulator
    //then we will start our loop from one step forward
    if (arguments.length < 3) {
        i = 1;
        result = arr[0];
    }

    //calling callback function for every element
    for (; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr);
    }

    return result;
};

let arr = [1, 2, 3, 4];

const reducer = (accumulator, currentValue) => {
    
    return accumulator + currentValue;
}
console.log(arr.reduce(reducer));
console.log(reduce(arr, reducer));

