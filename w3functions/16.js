const uniqueLetter = (str) => {
    let letters = str.split('');
    let unique = "";

    for (let i in letters) {

        if (unique.includes(letters[i]) === false){
            unique += letters[i];
        }

    }

    return unique;
}

console.log(uniqueLetter("thequickbrownfoxjumpsoverthelazydog"));
