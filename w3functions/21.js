const factorial = (n) => {

    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1)
}

const combinations = (arr, length) => {
    let arrFact = factorial(arr.length);
    let lengthFact = factorial(length);

    return arrFact / (lengthFact * factorial(arr.length - length));
}


const subsets = (arr, length) => {
    let result = [];
    let combos = combinations(arr, length) / 2;

    for (let i = 0; i < combos; i++) {
        
        for (let j = 0; j < arr.length; j++) {
            let oneCombo = []

            if (arr.indexOf(arr[i]) === arr.indexOf(arr[j])) {
                continue;
            }

            result.push(oneCombo);
        }

    }

    return result;
}

console.log(subset([1, 2, 3,], 2));

// const subsets = (arr, length) => {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 0; j < arr.length; j++) {

//             if ( arr.indexOf(arr[i]) === arr.indexOf(arr[j]) ) {
//                 continue;
//             }

//             if ( result.includes([arr[i], arr[j]]) ) {
//                 continue;
//             } else {
//                 result.push([arr[i], arr[j]]);
//             }

//         }

//     }

//     return result;
// }

