let arr = [2, 1, 15];

Array.prototype.mySort = function() {

    //We will compare each element with this function
    const merge = (leftArray, rightArray) => {

        let sorted = [];
        //We will be orienting in array with this counters
        let leftCounter = 0;
        let rightCounter = 0;

        //Do the following comparisons
        //Until the counters will iterate all the elelemts of they own array
        while (leftCounter < leftArray.length && rightCounter < rightArray.length) {

            //Compare two arrays elements
            //And push the smallest one to the sorted array
            if (`${leftArray[leftCounter]}` < `${rightArray[rightCounter]}`) {
                sorted.push(leftArray[leftCounter]);
                leftCounter++
            }

            sorted.push(rightArray[rightCounter]);
            rightCounter++;
        }

        //In case of odd number array
        //Add to the result the remaining element
        return [...sorted, ...leftArray.slice(leftCounter), ...rightArray.slice(rightCounter)];
    }

    const mergeSort = (arr) => {

        //No need to sort one leemnt array
        if (arr.length <= 1) {
            return arr;
        }

        //In other cases, divide them by half until the smallest possible
        let middle = Math.floor(arr.length / 2);
        let left = arr.slice(0, middle);
        let right = arr.slice(middle);

        return merge(mergeSort(left), mergeSort(right));
    }

    return mergeSort(arr);
}



console.log(arr.mySort());
console.log(arr.sort());
