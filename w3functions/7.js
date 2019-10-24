const vowel = (str) => {
    let vowels = ["A","E","I","O","U"];
    let letters = str.toUpperCase().split('');
    let result = 0;
    
    for (let i in letters){

        if (vowels.includes(letters[i])){
            result++;
        }

    }

    return result;
}

console.log(vowel('The quick brown fox'));
