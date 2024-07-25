const {add, subtract, multiply, divide} = require('./mathFunction');

function main(){
    const num1 = 45;
    const num2 = 18;

    console.log(`Sum of ${num1} and ${num2} is ${add(num1, num2)}`);
    console.log(`Subtraction of ${num1} and ${num2} is ${subtract(num1, num2)}`);
    console.log(`Multiplication of ${num1} and ${num2} is ${multiply(num1, num2)}`);
    console.log(`Division of ${num1} and ${num2} is ${divide(num1, num2)}`);
}
main();