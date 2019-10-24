const polidrome = (str) => {
    let reversed = str.split('').reverse().join('');

    if (reversed === str) {
        return true;
    }

    return false;
}

console.log(polidrome("madam"));
