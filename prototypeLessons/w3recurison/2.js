const gcd = (a, b) => {
    //FInd out the greatest integer
    //And start find the GCD from this integer
    let greatest = Math.max(a, b);

    //Using closure for more simple code
    //returning the recursive function that will return the first GCD
    return (function findIt (greatest) {

        //If the divisor is here, return it
        if (a % greatest === 0 & b % greatest === 0) {
            return greatest;
        }   

        //If there's not, try again but with smaller number
        return findIt(greatest-1);

    })(greatest);   

}

console.log(gcd(16,12));