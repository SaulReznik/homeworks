const minNum = (a, b) => {
    
    if (a - b >= 0) {
        return a;
    }

    return b;
}

console.log(minNum(2, 4));
