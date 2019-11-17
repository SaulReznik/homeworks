


const primes = (start, end) => {
    let result = [];//Our output array

    //Checking all numbers in the given range
    for (let i = start; i <= end; i++) {


        let notPrime = false;
        //Checking all the numbers from 2 to our iterable number
        for (let j = 2; j <= i; j++) {

            //And if at least once it makes a success division
            //And that division is not the same number
            //Then that number is a prime
            if (i % j === 0 && j !== i) {
                notPrime = true;
            }

        }

        //If we didn't get divisable number, then it is a prime number
        if (notPrime === false) {
            result.push(i);
        }

    }

    return result;
}

console.table(primes(50, 100))
