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
            return add(number1, number2);
        case '-':
            return substract(number1, number2);
        case 'x':
            return multiply(number1, number2);
        // case '÷':
        case '/':
            return divide(number1, number2);
        default:
            break;
    };
}

function updateCalculatorDisplay() {
    /*Takes the displayArray and writes to DOM (.displayOutput) with .join("")
    */
    const displayOutput = document.querySelector('.displayOutput');
    displayOutput.textContent = display;
}

function clearAndUpdateDisplay() {
    /*Sets the display to 0 and updates the display, so 0 is displayed.
    Then returns an empty string*/
    display = 0;
    updateCalculatorDisplay()
    return ''
}

function storeNumberInDisplayVariable(number) {
    return Array.from(String(number, (number) => Number(number)));
    // display = String(number).split("").map((num) => Number(num));
}

function updateTempDisplay() {
    const displayTempOutput = document.querySelector('.displayTempOutput');
    displayTempOutput.textContent = tempOutput;
}

let number1;
let operator;
let number2;
let display = '';
let tempOutput = '';
const operatorArray = ['+', '-', 'x', '/']

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
        updateTempDisplay();
        display += numButton.id
        updateCalculatorDisplay();
    });
});

const allClearButton = document.querySelector('.allClear');
allClearButton.addEventListener('click', () => {
    number1 = 0;
    number2 = 0;
    operator = '';
    display = clearAndUpdateDisplay();
    tempOutput = '';
    updateTempDisplay();
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    display = display.slice(0, display.length-1);
    updateCalculatorDisplay();
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        // If an operator is already defined, the result has to be evaluated.
        if (operator === '=') {
            operator = operatorButton.id;
            tempOutput = `${number1} ${operator}`;
            updateTempDisplay();
        }
        else if (operator) {
            if (display) {
                number2 = parseInt(display);
                number1 = operate(operatorButton.id, number1, number2)
                tempOutput += ' ' + number2 + ' ' + operatorButton.id;
                updateTempDisplay();
                display = number1;
                updateCalculatorDisplay();
                display = '';
            }
            else {
                operator = operatorButton.id;
                tempOutput = tempOutput.slice(0, -1) + operator;
                updateTempDisplay();
            }access
        }
        else {
            number1 = parseInt(display);
            operator = operatorButton.id;
            tempOutput = `${number1} ${operator}`;
            display = '';
            updateTempDisplay();
        }
    });
});

const evaluateButton = document.querySelector('.evaluate');
evaluateButton.addEventListener('click', () => {
    // let lastChar = tempOutput.charAt(tempOutput.length - 1);
    // if (operatorArray.includes(lastChar))
    //     return
    number2 = parseInt(display);
    if (number2) {
        number1 = operate(operator, number1, number2);
        display = number1;
        updateCalculatorDisplay();
        display = '';
        tempOutput += ` ${number2} =`;
        updateTempDisplay();
        tempOutput = '';
        operator = '=';
    }
    number2 = 0;
});