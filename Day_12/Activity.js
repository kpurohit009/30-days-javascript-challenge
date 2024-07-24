//Activity 1 : Basic Error Handling with Try-catch
//Task 1
function throw_error(){
    try{
        throw new Error("This error is thrown intentionally.");
    }
    catch(error){
        console.log(`Caught an error: ${error.message}`);
    }
}
throw_error()

//Task 2
function check_denominator(num1, num2){
    if(num2 === 0){
        throw new Error("Denominator cannot be Zero.")
    }
    return num1/num2;
}
function divide_number(num1, num2){
    try{
        let result = check_denominator(num1, num2);
        console.log(`Num1: ${num1} is divide by Num2: ${num2}: ${result}`);
    }
    catch(error){
        console.log(`Error: ${error.message}`);
    }
}
divide_number(20,6);
divide_number(20,0);


//Activity 2 : Finally Block
//Task 3
function subtract_number(num1, num2){
    try{
        console.log(`Inside the try block: Performing division`);
        if(num2 < 0){
            throw new Error("Num 2 cannot be negative.")
        }
        let result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
    }
    catch(error){
        console.log(`Caught an error: ${error.message}`);
    }
    finally{
        console.log(`Inside the finally block this block will always execute`);
    }
}
subtract_number(5, 8);
subtract_number(6, -2);


//Activity 3 : Custom Error Objects
//Task 4
class Custom_Error extends Error{
    constructor(message){
        super(message);
        this.name = "Custom_Error";
    }
}
function throw_customError(){
    throw new Custom_Error("Something Wrong!");
}
try{
    throw_customError();
}
catch(error){
    if(error instanceof Custom_Error){
        console.error(`Custom error occurred: ${error.message}`);
    }
}

//Task 5
function check_string(input){
    if(typeof input !== 'string' || input.trim() === ''){
        throw new Error('Input cannot be empty or non-string.');
    }
    return 'Input is valid';
}
function print_string(input){
    try{
        const result = check_string(input);
        console.log(result);
    }
    catch(error){
        console.error(`Error caught: ${error.message}`);
    }
}
print_string('Mobile');
print_string();
print_string(254);


//Activity 4 : Error Handling in Promises
//Task 6
const promise_one = new Promise(function(resolve, reject){
    const random = Math.random();
    setTimeout(function(){
        if(random > 0.5){
            resolve('Promise resolved successfully!');
        }
        else{
            reject(new Error('Promise rejected due to a random failure.'));
        }
    }, 1000)
})
promise_one.then(result => {
    console.log(result);
})
.catch(error => {
    console.error(`Error caught: ${error.message}`);
})

//Task 7
async function handle_promise(){
    try{
        const result = await promise_one;
        console.log(result);
    }
    catch(error){
        console.error(`Error caught: ${error.message}`);
    }
}
handle_promise()


//Activity 5 : Graceful Error Handling in Fetch
//Task 8
fetch("https://test-url.example.com/data")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log("Getting UserID, ID, Title from Public API");
        console.log(data);
    })
    .catch(error => {
        console.error(`Error caught from invalid URL: ${error.message}`);
    })

//Task 9
async function get_all_users(){
    try{
        const response = await fetch("https://test-url.example.com/data")
        const data = await response.json();
        console.log("Getting all the user data from API");
        console.log(data);
    }
    catch(error){
        console.log(`Error caught from invalid URL: ${error.message}`);
    }
}
get_all_users()