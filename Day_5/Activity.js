//Activity 1 : Function Declaration
//Task 1
function evenodd(n){
    (n % 2 == 0) ? console.log(`${n} is even.`) : console.log(`${n} is odd.`);;
}
evenodd(18);

//Task 2
function calcSquare(n){
    return n*n;
}
console.log(`5 ^ 2 = ${calcSquare(5)}`);

//Activity 2 : Function Expression
//Task 3
function compare(a, b){
    if(a > b)
        console.log(`${a} is greater than ${b}`);
    else if(a < b)
        console.log(`${a} is less than ${b}`);
    else
    console.log(`The numbers are equal`);
}
compare(45, 18);

//Task 4
function concate(a, b){
    return a + b;
}
console.log(`Chai + Code = ${concate("Chai","Code")}`);

//Activity 3 : Arrow Function
//Task 5
const mul = (a, b) => a * b;
console.log(`12 x 6 = ${mul(12, 6)}`);

//Task 6
const strContainsChar = (str , char) => {
    if(str.includes(char)){
        return true
    }
    else{
        return false
    }
}
console.log(`${strContainsChar("Chai aur Code", 'a')}`);

//Activity 4 : Function parameter and default values
//Task 7
function productOfTwo(a, b = 10){
    return a * b;
}
console.log(`Product = ${productOfTwo(5)}`);

//Task 8
function greeting(name, age = 20){
    console.log(`Welcome ${name}! Your age is set to be ${age}`);
}
greeting("Krunal", 18);

//Activity 5 : Higher order function
//Task 9
function fun(n){
    console.log(`Lower order function executed x${n}`);
}
function repeatFunNTimes(fun, n){
    for(i=1 ; i<=n ; i++){
        fun(i);
    }
}
repeatFunNTimes(fun, 5);

//Task 10
function multiplyByTwo(n){
    return n * 2;
}
function addFive(n){
    return n + 5;
}
function acceptTwo(n , fun1, fun2){
    const num = fun1(n);
    return fun2(num);
}
console.log(`(34 x 2) + 5 = ${acceptTwo(34, multiplyByTwo, addFive)}`);