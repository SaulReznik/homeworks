const secondPlace = (arr) => {

    //First we need to sort our array
    let sorted = [...arr.sort((a, b) => a - b)];
    
    //function for comparing 2 elements of array
    //We don't need to output the element that is equal to his lowest or highest sibling by index
    const compare = (a, b) => a !== b;

    //With this loop we will find out our second lowest element
    let secondLowest = 0;

    for (let i = 1; i < sorted.length; i++) {
        if ( !compare(sorted[i], sorted[i - 1]) ) {
            continue;
        }
  
        if (compare(sorted[i], sorted[i - 1])) {
            secondLowest = sorted[i];
            break;
        }
        
    }

    //With this loop we will find out our second highest element
    let secondHighest = 0;

    for (let i = sorted[sorted.length - 2]; i > 0; i--) {
        if ( compare(sorted[i], sorted[i + 1]) === false ) {
            continue;
        }

        if (compare(sorted[i], sorted[i + 1]) === true ) {
            secondHighest = sorted[i];
            break;
        }

    }

    return [secondLowest, secondHighest];
}

console.log(secondPlace([1,1, 2, 3, 4, 5, 5]));
