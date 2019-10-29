const map = (arr, callback) => {
    let currentArray = arr;
    let result = [];

    for (let i in arr){
        let currentValue = arr[i];
        let currentIndex = arr.indexOf(arr[i]);

        result.push(callback(currentValue, currentIndex, currentArray));
    };

    return result;
}
let arr = [1,2,3];

console.log(arr.map((item) => item + 1));

console.log(map(arr, (item) => item + 1));

