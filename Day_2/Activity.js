//Activity 1 : Arithmatic Operation

let num1 = 10;
let num2 = 9;

console.log(`${num1} + ${num2} = ${num1 + num2}`); //Addition
console.log(`${num1} - ${num2} = ${num1 - num2}`); //Subtraction
console.log(`${num1} * ${num2} = ${num1 * num2}`); //Multiplication
console.log(`${num1} / ${num2} = ${num1 / num2}`); //Division
console.log(`${num1} % ${num2} = ${num1 % num2}`); //Modulo

//Activity 2 : Assignment Operation
console.log(`Old value of num1: ${num1} and num2: ${num2}`);
num1 += 1;
num2 -= 1;
console.log(`New value of num1: ${num1} and num2: ${num2}`);

//Activity 3 : Comparision operator
const age = 20;
console.log(`Age is greater than 18?: ${age > 18}`);
console.log(`Age is less than 18?: ${age < 18}`);

console.log(`Age is greater than or equal 20?: ${age >= 20}`);
console.log(`Age is less than or equal 20?: ${age <= 20}`);

const num = 18;
const strnum = "18";

console.log(`18 == "18"?: ${num == strnum}`);
console.log(`18 === "18"?: ${num === strnum}`);

//Activity 4 : Logical operator
console.log(`(5 > 3) || (3 > 4) = ${(5 > 3) || (3 > 4)}`);
console.log(`(5 > 3) && (3 > 4) = ${(5 > 3) && (3 > 4)}`);

const isBool = true;
console.log(`! of isBool: ${!isBool}`);

//Activity 5 : Ternary operator
let grade = 36;
(grade >= 35)? console.log("Pass..") : console.log("Fail..");