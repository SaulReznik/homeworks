const sum = (arr) => {
    //This is the next element
    //Which we will calculate with current element
    let next = 1;

    //Initialization of result
    //In the beginning it is always the first element of array
    let result = arr[0];

    return (function calc() {
        
        //We will count until we will get to the last element
        if (next === arr.length) {
            return result;
        }

        //Count result
        result += arr[next];

        //And increace our iterator
        //In this case it's the {next}
        next++;
        
        return calc();

    })();

}

let arr = [1, 2, 3, 4, 5, 6];

console.log(sum(arr));
