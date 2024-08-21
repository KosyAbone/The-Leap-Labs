function add(a, b) {
    return a + b;
}

function subtract(a, b) { 
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }   
    return a / b;
}

function calculate(num1, num2, operator){
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Error: Invalid operator";
    }
}

function calculateAndDisplay () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById('result').innerHTML = "Error: Invalid input. Please enter valid numbers";
        return;
    }
    const result = calculate(num1, num2, operator);
    
    if (result === "Error: Cannot divide by zero" || result === "Error: Invalid operator" || result === "Error: Invalid input. Please enter valid numbers") {
        document.getElementById('result').innerHTML = result;
        return;
    } else 
    document.getElementById('result').innerHTML = `Result: ${result}`;
}