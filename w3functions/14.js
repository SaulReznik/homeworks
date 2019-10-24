const toCoin = (num, arr) => {
    let result = [];

    //Try all the coins with {for loop}
    for (let i = 0; i < arr.length; i++) {

        //Try one coin as much as we can
        while (num >= arr[i]) {
            result.push(arr[i]);
            num -= arr[i];
        }
        
    }

    return result;
}

console.log(toCoin(46, [25, 10, 5, 2, 1]));
