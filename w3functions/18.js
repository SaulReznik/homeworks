const binarySearch = (target, arr) => {
    //We will search between start and end
    let start = 0;
    let end = arr.length - 1;

    
    for(let i = start; i <= end; i++){
        
        //Middle index helps us to orient which way search
        let middle = Math.floor((start + end) / 2);

        //In positive scenario, in the end, our middle element becomes our target
        if (arr[middle] === target) {
            return middle;
        }

        //If we didn't find the element after middle
        //Then ignore all element after middle in further searches
        if (target < arr[middle]) {
            end = middle -1;
        }

        //vice versa of the upper condition
        if (target > arr[middle]) {
            start = middle + 1;
        }
    }

    //If theres no target element, just return -1
    return -1;
}

let numbers = [0,1,2,3,4,5,6,7,8,9];

console.log(binarySearch(6, numbers));
