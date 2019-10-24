const idGenerator = (length) => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    //Add one random caracther from chars as much us user wants
    for (let i = 0; i <= length; i++) {
        result += chars.charAt(
                Math.floor(Math.random() * (chars.length - 1)) + 1 //Random in range of our characters
            );
    }

    return result;
}

console.log(idGenerator(10));
