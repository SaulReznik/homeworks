import React from 'react';

import Button from './components/Button';

import './App.css';

//This is the object with all arithmetic operators which we will use in our operators event handler
const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    'X': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => +firstOperand + +secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        //This is our calculator's state, 
        //with this we will know what is the state of our calculator in further operations
        this.state = {
            displayValue: '0',
            firstOperand: null,
            waitingForSecondOperand: false,
            operator: null
        };

        this.integers = this.integers.bind(this);
        this.zero = this.zero.bind(this);

        this.clear = this.clear.bind(this);
        this.allClear = this.allClear.bind(this);
        this.randomInt = this.randomInt.bind(this);
        this.dot = this.dot.bind(this);

        this.handleOperator = this.handleOperator.bind(this);
    };

    //-------------------------Numbers------------------------//
    integers(e) {
        let value = e.target.value; //caching our event for further operations
        
        //if we already have our first operand
        //and we have already typed our operator
        //after that we will clear dsiplay and write it from scratch
        if (this.state.waitingForSecondOperand) {
            this.setState({ 
                displayValue: value,
                waitingForSecondOperand: false
            });
        } else {//Else we must just add our digit to the displayValue

            //And if it is the initial "0", we must delete it and set diplay value our pressed digit
            if (this.state.displayValue === '0') {
                this.setState({ displayValue: value })
            } else {
                this.setState(prevState => ({ displayValue: prevState.displayValue + value }));
            }

        }
    }

    //if our displayValue is not "0" just type zero or double zero
    zero(e) {
        let value = e.target.value;

        if(this.state.displayValue.charAt(0) !== "0"){
            this.setState(prevState => ({displayValue: prevState.displayValue + value}))
        }
    }


    //-----------------------Other Stuff----------------------//
    clear(){
        //If theres only one digit left, instead of deleting just write "0"
        //Otherwise just delete one digit from the end
        if(this.state.displayValue.length <= 1) {
            this.setState({displayValue: "0"})
        } else { 
            this.setState(prevState => ({ displayValue: prevState.displayValue.slice(0, -1) }))
        } 
    }

    //Set the initial value
    allClear() {
        this.setState({
            displayValue: '0',
            firstOperand: null,
            waitingForSecondOperand: false,
            operator: null
        })
    }

    //Set random digit with the same rules as in the {integers} function
    randomInt() {
        if (this.state.displayValue === '0') {
            this.setState({ displayValue: `${Math.floor(Math.random() * 10)}` })
        } else {
            this.setState(prevState => ({ displayValue: prevState.displayValue + `${Math.floor(Math.random() * 10)}` }));
        }
    }

    dot(e) {
        let value = e.target.value;

        //If we are waiting the second operand, we can't use dot
        if (this.state.waitingForSecondOperand === true) return;

        //Because we can't set dot as the first element 
        if(!this.state.displayValue.includes(value)){
            this.setState(prevState => ({displayValue: prevState.displayValue + value}));
        }
    }


    //------------------------Operations-------------------------//
    handleOperator(e) {
        let value = e.target.value;

        //If we don't have our first operand, just put the displayValue in it
        if(this.state.firstOperand === null) {
            this.setState({firstOperand: parseFloat(this.state.displayValue)});
        }

        //Otherwise if we have our first operator already,
        //We must figure out what exactly it is and use one of the methods from {performClaculations} object
        if (this.state.operator) {
            const result = performCalculation[this.state.operator](this.state.firstOperand, this.state.displayValue);

            //And set the result of calculation as a firstOperand and displayValue
            this.setState({
                displayValue: `${result}`,
                firstOperand: result
            })
        }

        //And in both cases we are ready to recieve one other operand
        //And set our operator
        this.setState({
            waitingForSecondOperand: true,
            operator: value
        });
    }

    render(){
        return(
            <div id="calculator">
                <span id="result">{this.state.displayValue}</span>

                <Button buttonHandler={this.clear} value={"C"}></Button>
                <Button buttonHandler={this.allClear} value={"AC"}></Button>
                <Button buttonHandler={this.randomInt} value={"RAND"}></Button>
                <Button buttonHandler={this.handleOperator} value={"="}></Button>

                <Button buttonHandler={this.integers} value={"1"}></Button>
                <Button buttonHandler={this.integers} value={"2"}></Button>
                <Button buttonHandler={this.integers} value={"3"}></Button>
                <Button buttonHandler={this.handleOperator} value={"X"}></Button>

                <Button buttonHandler={this.integers} value={"4"}></Button>
                <Button buttonHandler={this.integers} value={"5"}></Button>
                <Button buttonHandler={this.integers} value={"6"}></Button>
                <Button buttonHandler={this.handleOperator} value={"/"}></Button>

                <Button buttonHandler={this.integers} value={"7"}></Button>
                <Button buttonHandler={this.integers} value={"8"}></Button>
                <Button buttonHandler={this.integers} value={"9"}></Button>
                <Button buttonHandler={this.handleOperator} value={"-"}></Button>

                <Button buttonHandler={this.zero} value={"00"}></Button>
                <Button buttonHandler={this.zero} value={"0"}></Button>
                <Button buttonHandler={this.dot} value={"."}></Button>
                <Button buttonHandler={this.handleOperator} value={"+"}></Button>
            </div>
        )
    }
}