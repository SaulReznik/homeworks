const isEven = (n) => {

    //Let's make our number positive for our future calculations
    if (n < 0) {
        n = Math.abs(n);
    }

    //If in the end of the calculations number will be equalt to 0
    //Then it's a even number
    if (n === 0) {
        return true;
    }

    //Otherwise it's a odd number
    if (n === 1) {
        return false;
    }
    
    //Repeat this subtracrion
    //Until we will get to 0 or 1
    n -= 2;
    return isEven(n);
    
}
console.log(isEven(11110));
console.log(isEven(-11110));
console.log(isEven(11111));
console.log(isEven(-11111));


//The answer was partialy taken from the answer in the tutorial