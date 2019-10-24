const uniqueLetter = (str) => {
    let letters = str.split('');
    let unique = [];

    for (let i in letters) {

        if (unique.includes(letters[i]) === false){
            unique.push(letters[i]);
        }

    }

    return unique.join('');
}

console.log(uniqueLetter("thequickbrownfoxjumpsoverthelazydog"));
