

const power = (base, exponent) => {
    
    //If we get to bottom
    //multiplie our base with 1 and return it
    if (exponent === 0) {
        return 1;
    }

    //Otherwise multiplie base with exponent
    return base * power(base, exponent - 1);
}

console.log(power(8,2));
