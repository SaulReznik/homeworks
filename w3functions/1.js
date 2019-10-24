const numberReverse = (num) => {
    return (
        parseFloat(         //parseFloat helps us to get rid of the zero's in the begining and ignore the prefix that becomes postfix after reversing
            num
                .toString() //number --> string
                .split('')  //Make array for reverse
                .reverse()  
                .join('')   //Make string again
        ) * Math.sign(num)  //Return the sign in it's place 
    )   
}

console.log(numberReverse(32243));

//Answer was taken from https://www.freecodecamp.org/news/js-bahttps://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/sics-how-to-reverse-a-number-9aefc20afa8d/
