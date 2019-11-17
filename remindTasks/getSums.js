const getSums = arr => {
    let result = [];

    result.push(arr.reduce((prev, current) => {
        result.push(prev);
        return prev + current;
    }));

    return result;
}

console.log(getSums([4,8,15,16,23,42]));
