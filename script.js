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
     * Loop through the input array
     * Store numbers in a single array index to make array handling easier, instead of one digit per index
     * Store operators in one index as well, per operator
     * After getting the array ready for handling, loop through it
     * Every time an operator is found, make if statements for each possible operator
     * Inside the if statements, grab the number before and after the operator, and operate them
     * Delete the indexes with the operated numbers, leaving only the new number
     * The loop goes on, performing calculations on each operator found until no operators are found and a single number is returned
     * as the result
     * Display the result on the display
     * Find a way to clean the input array after this, while still displaying the result on screen
     */

    let inputsHandler = [];
    let handlerIterator = 0;
    /**
     * Here I must define the first element of the handler array, or it will get confused
     * with "undefined"
     */
    inputsHandler[0] = inputs[0];


    console.log("inputsHandler before loop: " + inputsHandler);
    console.log("inputs before loop: " + inputs);

    for (let j = 0; j < inputs.length; j++) {
        /**
         * Store input numbers into single array indexes rather than
         * one array index for each digit, to make array handling easier
         * in the calculation algorithm
         */
        
        if ((inputs[j] == "+") ||
            (inputs[j] == "-") ||
            (inputs[j] == "/") ||
            (inputs[j] == "*")) {
                handlerIterator += 1;
                inputsHandler[handlerIterator] = inputs[j];
                handlerIterator += 1;
            }
        
        console.log("inputsHandler[j]: " + inputsHandler[j]);
        console.log("Type of inputsHandler[j]: " + typeof inputsHandler[j]);
        inputsHandler[handlerIterator] = inputsHandler[handlerIterator] + inputs[j];
       // inputsHandler[handlerIterator] = inputsHandler[handlerIterator].concat(inputs[j]);
        
            

    }
    console.log("inputsHandler after loop: " + inputsHandler);
    console.log("inputs after loop: " + inputs);

    /*
    for (let i = 0; i < inputsHandler.length; i++) {
        // Check for operators
        if (inputs[i] == "+") {
            console.log("Detected + operator.");
            
        }
        if (inputs[i] == "-") {
            console.log("Detected - operator.");
        }
        if (inputs[i] == "/") {
            console.log("Detected / operator.");
        }
        if (inputs[i] == "*") {
            console.log("Detected * operator.");
        }
    }
    */
}


function updateDisplay() {
    // Show typed content on screen 
    let calcDisplay = document.getElementById("display");
    calcDisplay.innerText = input.join(" ");
}

