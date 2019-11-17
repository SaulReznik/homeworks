const multiplyNumeric = obj => {

    for (let i in obj) {
        
        if (Number(obj[i]) === obj[i]){
            obj[i] *= 2;
        }

    }

    return obj;
}

let obj = {
    one: 1,
    two: 2,
    three: 3,
    string: "string"
};

console.log(multiplyNumeric(obj));
