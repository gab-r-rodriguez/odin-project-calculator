// operator functions
function add(a, b) {
    let c = a + b;
    return c;
}

function subtract(a, b) {
    let c = a - b;
    return c;
}

function multiply(a, b) {
    let c = a * b;
    return c;
}

function divide(a, b) {
    let c = a / b;
    return c;
}

// take inputs and apply an operator function
// need to add single quotes around operator input
function operate(operator, a, b) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    } else return 'check your inputs';
}

// array to store button clicks on display
let display = [];

// when button clicked, add button.value to array 'display'
// does not yet account for operators and cancellation buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => display.push(button.value));

});

// make clicked buttons' values appear in UI
// document.getElementById("display-input").innerHTML = display;

