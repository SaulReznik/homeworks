const range = (a, b) => {
    let result = [];

    //finding out which is bigger and smaller for further operations
    let smallest = Math.min(a,b);
    let biggest = Math.max(a,b);

    //With recursion we will fill the result array
    //with elements in the range of {a, b}
    return (function findEl (counter = smallest + 1) {

        //If counter is in the range
        if(counter === biggest) {
            return result;
        }

        //Add it to result
        result.push(counter);

        //And countinue until we will get the end
        return findEl(counter + 1);
    })();

}

console.log(range(2,9));
