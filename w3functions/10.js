const matrix = (n) => {
    let result = [];
    //Count of all iterations of second dimentional loop
    let square = 0;

    for (let i = 0; i < n; i++){
        //One row in matrix
        let row = [];

        for(let j = 0; j < n; j++){
            square++
            row.push(square);
        }

        result.push(row);
    }

    return result;
}

console.table(matrix(3));
