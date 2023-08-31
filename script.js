function add(number1, number2) {
    return number1 + number2;
}

function substract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function operate(operator, number1 , number2) {
    switch(operator) {
        case '+':
            add(number1, number2);
            break;
        case '-':
            substract(number1, number2);
            break;
        case 'x':
            multiply(number1, number2);
            break;
        // case '÷':
        case '/':
            divide(number1, number2);
            break;
        default:
            alert("no");
            break;
    };
}

function updateCalculatorDisplay() {
    /*Takes the displayArray and writes to DOM (.displayOutput) with .join("")
    */
    const displayOutput = document.querySelector('.displayOutput')
    displayOutput.textContent = display.join("");
}

function clearDisplayVariable() {
    //Deletes the entries of displayArray and calls the updateDisplay function to display nothing on the calculator
    display.splice(0,display.length);
}

let number1;
let operator;
let number2;
const display = [];

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.background = 'grey';
    });
    button.addEventListener('mouseleave', () => {
        button.style.background = 'azure';
    });
});

const numButtons = document.querySelectorAll('.num');
numButtons.forEach(numButton => {
    numButton.addEventListener('click', () => {
        display.push(numButton.id);
        updateCalculatorDisplay();
    });
});

const allClearButton = document.querySelector('.allClear');
allClearButton.addEventListener('click', () => {
    clearDisplayVariable();
    updateCalculatorDisplay()
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    display.pop();
    updateCalculatorDisplay();
});

const operationButtons = document.querySelectorAll('.operator');
operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', () => {
        display.push(operationButton.id);
        updateCalculatorDisplay();
    });
});

const evaluateButton = document.querySelector('.evaluate');
evaluateButton.addEventListener('click', () => {
    operate();
});