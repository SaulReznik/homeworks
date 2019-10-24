const longestName = (arr) => {
    let longest = "";

    for (let i in arr) {

        if (arr[i].length > longest.length) {
            longest = arr[i];
        }

    }

    return longest;
}

console.log(longestName(["Australia", "Germany", "United States of America"]));
