const num1 = parseFloat(prompt("first number: "))
const operator = prompt("Enter operator (either +, -, *, or /): ");
const num2 = parseFloat(prompt("second number: "))

let result;
if (operator == "+") {
    result = num1 + num2;
} else if (operator == "-") {
    result = num1 - num2;
} else if (operator == "*") {
    result = num1 * num2;
} else {
    result = num1 / num2;
}

console.log(`${num1} ${operator} ${num2} = ${result}`);