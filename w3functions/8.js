const isPrime = (num) => {

    //With this loop I check all divisions that we can make with input
    //without 0,1 and input itself
    //if at least one divisons makes with reminder === 0
    //It means that our input is not prime
    for(let i = 2; i < num - 1; i++){

        if (num % i === 0){
            return false;
        }

    }

    return true;
}

console.log(isPrime(11));
