const getDecimal = n => {
    
    let str =  `${n}`;
    let decimal = str.substring(str.indexOf(".") + 1);

    return +decimal;
};

console.log(getDecimal(2222222222.333333));
