const addNumber = require('./math');

function main(){
    const num1 = 4;
    const num2 = 8;
    const result = addNumber(num1, num2);
    console.log(`The sum of ${num1} and ${num2} is ${result}`);
}
main()