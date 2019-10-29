let bigArr = []

for (let i = 0; i < 100000; i++) {
    bigArr.push(i);
}


let result = 0;
let iterations = 0;

let counter = 0;

try {
    function foo() {
        counter += 1;
        foo();
    }
    foo();
} catch {
    console.log('counter =', counter);
}

const minusOne = (num) => {
    if (num === 0) {
        iterations++;
        return num;
    }

    result++;
    console.log(num);
    return minusOne(num - 1);
}

const recursion = (num) => {


    while (num - (result * iterations) > counter) {
        minusOne(counter);
    }

    while (result === num) {
        minusOne(num - result);
    }

}

//recursion(15662);

const show = (arr) => {
    let length = arr.length;
    //we need to count the iterations of loop
    //in case if elements
    let iterations = 0;

    const ifBig = () => {
        
    }

    for(let i = 0; i < length; i += counter) {
        
        if ((length - (counter * iterations)) > counter) {

            for (let i = 0; i < counter; i++) {
                console.log(arr[i + (counter * iterations)]);
            }

            iterations++;
        } else {
            for (let i = (counter * iterations); i < length; i++) {
                console.log(arr[i])
            }
        }

    }
}

show(bigArr);




























//create a counter, that will allow us to continue were the every iteretion stoped
// let counter = 0;
// let currentIndex = 0;

// const recursion = (arr) => {

//     //checking if the functions finished its job or not
//     if (currentIndex === arr.length - 1) {
//         return arr[currentIndex];
//     }

//     counter++;
//     console.log(arr[currentIndex]);
//     currentIndex--;

//     try {
//         recursion(arr, lastIndex - 1);
//     } catch {
//         recursion(arr, arr.length - counter);
//     }
// }


// recursion(bigArr, bigArr.length - counter);
// // try {
// //     recursion(bigArr, bigArr.length - counter);
// // } catch {
// //     recursion(bigArr, bigArr.length - counter);
// // }











