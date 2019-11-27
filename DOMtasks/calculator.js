let result = document.getElementById('result');
let numbers = document.querySelectorAll('.type-number');
let operators = document.getElementById('.operators');

let doubleZero = document.getElementById('double-zero');
let dot = document.getElementById('dot');

let clearOne = document.getElementById('clearOne');
let clearAll = document.getElementById('clearAll');
let random = document.getElementById('random');

let equal = document.getElementById('equal');
let multiply = document.getElementById('multiply');
let divison = document.getElementById('division');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');

let memory = result.innerText;

//-------------------------------Numbers and stuff-------------------------//

//Making the single number event listeners
for (let i = 0; i < numbers.length; i++) {

    numbers[i].addEventListener(
        "click", 
        function () {
        if (result.innerText == "0") {
            result.innerText = this.innerText;
        } else {
            result.innerText += this.innerText;
        }
        console.log(typeof memory, typeof result.innerText);
    });
    
    
}

random.addEventListener(
    "click",
    () => {
        if (result.innerText == "0") {
            result.innerText = "";
            result.innerText += Math.floor(Math.random() * 10);
            memory = +result.innerText;
        } else {
            result.innerText += Math.floor(Math.random() * 10);
            memory = +result.innerText;
            console.log(memory);

        }
    }
)

doubleZero.addEventListener(
    "click",
    () => {
        if (result.innerText == "0") {
            return;
        }

        result.innerText += "00";
        memory *= 100;
        console.log(memory);

    }
)

dot.addEventListener(
    "click",
    () => {
        if (result.innerText.includes('.')) {
            return;
        }

        result.innerText += "."
    }
)

//------------------------------------Clear-------------------------------//

clearOne.addEventListener(
    "click",
    () => {
        if(result.innerText.length <= 1){
            result.innerText = 0;
        } else {
            result.innerText = result.innerText.slice(0, result.innerText.length - 1);
        }

        console.log(memory);
    }
)

clearAll.addEventListener(
    "click",
    () => {
        result.innerText = "0";
        memory = 0;
        console.log(memory);
        
    }
)


//-----------------------------Arithmetical Operations------------------------------//

for (let i = 0; i < operators.length; i++) {

    operators[i].addEventListener(
        "click",
        function () {
            if (result.innerText == "0") {
                result.innerText = this.innerText;
            } else {
                result.innerText += this.innerText;
            }
            console.log(typeof memory, typeof result.innerText);
        });


}
