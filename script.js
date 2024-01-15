let input = [];


/**
 * Operator Functions:
 */
function add (operand1, operand2) {
    return operand1 + operand2;
}

function subtract (operand1, operand2) {
    return operand1 - operand2;
}

function multiply (operand1, operand2) {
    return operand1 * operand2;
}

function divide (operand1, operand2) {
    return operand1 / operand2;
}


/**
 * Button functions:
 */
function button1() {
    input.push(1);
    updateDisplay();
}

function button2() {
    input.push(2);
    updateDisplay();
}

function button3() {
    input.push(3);
    updateDisplay();
}

function button4() {
    input.push(4);
    updateDisplay();
}

function button5() {
    input.push(5);
    updateDisplay();
}

function button6() {
    input.push(6);
    updateDisplay();
}

function button7() {
    input.push(7);
    updateDisplay();
}

function button8() {
    input.push(8);
    updateDisplay();
}

function button9() {
    input.push(9);
    updateDisplay();
}

function button0() {
    input.push(0);
    updateDisplay();
}

function buttonAdd() {
    input.push("+");
    updateDisplay();
}

function buttonSubtract() {
    input.push("-");
    updateDisplay();
}

function buttonMultiply() {
    input.push("*");
    updateDisplay();
}

function buttonDivide() {
    input.push("/");
    updateDisplay();
}

function buttonClear() {
    input.length = 0;
    updateDisplay();
}

function buttonEquals(inputs) {
    /**
     * 1: Loop through the input array
     * When an operator is found, calculate the operands surrounding the operator, using that operator by using if statements
     * Loop through the array several times until no operator can be found, which means only one number is left which is the result
     * Display the result on the display
     * Find a way to clean the input array after this, while still displaying the result on screen
     */

    for (let i = 0; i < input.length; i++) {
        
    }
}


function updateDisplay() {
    // Show typed content on screen 
    let calcDisplay = document.getElementById("display");
    calcDisplay.innerText = input.join(" ");
}

