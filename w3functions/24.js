const bubbleSort = (arr) => {

    //Bubble Sort is almost always O(n2) iterations
    //So I think we can use nested {for loop}
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            //If iterating element is smaller then the next element
            //Then swopp them
            if (arr[j] < arr[j + 1]) {

                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;

            }

        }

    }

    return arr;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
