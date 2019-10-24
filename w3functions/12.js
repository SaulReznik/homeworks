const perfect = (num) => {
    let result = 0;

    
    for (let i = 0; i <= num / 2; i++) {

        if (num % i === 0) {
            result += i
        }
    }

    return num === result;
}

console.log(perfect(6));
