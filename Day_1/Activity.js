//Task 1

var age = 20;
console.log(`age : ${age}`);

let title = "iphone 15 pro max";
console.log(`Product name: ${title}`);

// Task 2
const productInStock = true;
console.log(`Peoduct in stock: ${productInStock}`);

// Task 3
const userId = 1;
const name = "Parv Singh";
const isLoggedin = true;
const languages = ["C++", "Java", "JS"];
const address = {
    city:"Delhi",
    coordinates:{
        lat:"28.737324",
        lng:"77.090981"
    }
}

console.table([
    ["userId: ",userId, typeof(userId)],
    ["name: ",name, typeof(name)],
    ["isLoggedin: ",isLoggedin, typeof(isLoggedin)],
    ["languages: ",languages, typeof(languages)],
    ["address: ",address, typeof(address)],
])

// Task 4

let car = "BMW M4";
console.log(`car is: ${car}`);
car = "Audi A4";
console.log(`car is: ${car}`);

// Task 5

const PORT = 5000;
console.log(`port is: ${PORT}`);
// PORT = 3000 //TypeError: Assignment to constant variable.
// console.log(PORT);



// Feature request 1

const code = 1;
const subject = "code";
const isBool = true;
const str = ["chai", "code", "chaiaurcode"];
const author = {
    name:"hitesh",
    age: 30
}

console.table([
    ["code: ",code, typeof(code)],
    ["subject: ",subject, typeof(subject)],
    ["isBool: ",isBool, typeof(isBool)],
    ["str: ",str, typeof(str)],
    ["author: ",author, typeof(author)],
])


// Feature request 2

let num1 = 20;
console.log(num1);
num1 = 25;  //No error
console.log(num1);

const string  = "Cricket World cup 2024";
console.log(string);
//string = "ODI world cup 2027"; //TypeError: Assignment to constant variable.
//console.log(string);