const larger = (num, arr) => {
    let result = [];

    for (let i in arr) {

        if (arr[i] >= num) {
            result.push(arr[i]);
        }

    }

    return result;
}

console.log(larger(6, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
