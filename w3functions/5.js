const capitalize = (str) => {
    //Make array with word of input
    let words = str.split(' ');

    //Make each word capitlize and push it in new array
    let capitalizedWords = words.map((word) => {
       return word.charAt(0).toUpperCase() + word.slice(1)
    });

    //Make new string with capitalized word and return it
    return capitalizedWords.join(" ");
}

console.log(capitalize('the quick brown fox'));
