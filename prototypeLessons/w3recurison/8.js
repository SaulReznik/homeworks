
let binarySearch = function (arr, target, min = 0, max = arr.length - 1) { //Setting min and max default values for the first iteration

    //We will oriented by the middle element of the divided arrays
    //Dividing our array by 2 equal halfs
    //To make our algorithm {O(n log n)} speed
    let middle = Math.floor(((max - min) / 2) + min);

    //If we didn't find our target element in the smallest possible array
    //That means that there's no such an element
    if (max <= min && arr[middle] !== target){
        return -1;
    } 

    //If the middle element is equal to our array
    //That means that we find it
    if (arr[middle] === target){
        return middle;
    }

    //If our middle element is smaller then our target element
    //Then cut the smaller half and forget about it
    if (arr[middle] < target) {
        return binarySearch(arr, target, middle + 1, max);
    }

    //And if our middle element is bigger then our target element
    //Then cut the bigger half and forget about it
    return binarySearch(arr, target, min, middle - 1);
};

let arr = [1,2,3,4,5,6,7,8,9];

console.log(binarySearch(arr, 6));