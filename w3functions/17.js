const occurance = (str) => {
    let arr = str.split('');

    let result = {};

    for (let i in arr) {

        //get all keys of our result
        let result_keys = Object.getOwnPropertyNames(result);
        
        //If we got a new letter, just add it to our result and set value 1
        if ( !(result_keys.includes(arr[i])) ) {  
            result[arr[i]] = 1;
        }

        //Otherwise add 1 to the existing letters value
        result[arr[i]] += 1;
    }

    return result;
}

console.log(occurance("aaaaaabbbbbbcccc"));
