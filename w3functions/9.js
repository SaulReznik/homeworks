const type = (input) => {
    //With the following 2 conditions we will check
    //the types that {typeof} can't handle
    if (Array.isArray(input)) {
        return 'Array';
    }

    if (input === null) {
        return "Null"
    }

    //And if the input is not an array or null
    //Then we can check it with {typeof}
    return typeof input;
}

console.log(type({}));
console.log(type([]));
console.log(type(null));
console.log(type(1));
console.log(type('string'));
console.log(type(true));

