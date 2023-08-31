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
        case '÷':
            divide(number1, number2);
            break;
        default:
            alert("no");
            break;
    };
}

let number1;
let operator;
let number2;

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.background = 'grey';
    });
    button.addEventListener('mouseleave', () => {
        button.style.background = 'azure';
    });
});