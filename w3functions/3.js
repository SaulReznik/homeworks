const combo = (str) => {
    let result = [];

    for(let i = 0; i < str.length; i++){

        for(let j = i; j < str.length; j++){
            result.push(str.substr(i,j));
        }

    }

    //Insted of the empty string in the first element put the whole input
    result[0] = str;

    return result;
}

console.log(combo('dog'));
