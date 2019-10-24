const longestUnique = (str) => {
    let result = [];
    let temp = [];
    
    for (let i = 0; i < str.length; i++) {

        temp.push(str.charAt(i));

        if (temp >= result) {
            result = [...temp];
        }

        if (temp.includes(str.charAt(i))) {
            temp.length = 0;
            
        }
    }

    return result.join('');
}

console.log(longestUnique("abcaabbabcdc"));
