const firstUnique = (str) => {
    let unique = "";

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        
        //If our current character have no clones in the rest of the string
        //Then this is what we searching for
        if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
            return char;
        }
    }
}

console.log(firstUnique('abacddbecf'));
