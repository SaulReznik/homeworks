const longestWord = (str) => {
    let longest = "";
    let wordContainer = str.split(' ');

    for (let i in wordContainer){

        if(wordContainer[i].length > longest.length){
            longest = wordContainer[i];
        }
        
    }

    return longest;
}

console.log(longestWord("Web Development Tutorial"));
