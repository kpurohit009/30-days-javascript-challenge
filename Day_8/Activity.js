//Activity 1 : Template literals
//Task 1
const name = "Krunal";
const age = 20;
console.log(`Hello, I am ${name}, and I am ${age} years old.`);

//Task 2
console.log(`This is a multiline string,
This is second line.`);


//Activity 2 : Desructuring
//Task 3
const arr = [1, 2, 3, 4, 5];
const [first, second] = arr;
console.log(`First element of the array: ${first}. Second element of the array: ${second}.`);

//Task 4
const bookObj = {
    title: "Diary of a Wimpy Kid",
    author: "Jeff Kinney",
    year: 2006
}
const {title, author} = bookObj;
console.log(`Book: ${title}, Author: ${author}.`);


//Activity 3 : Spread and Rest Operators 
//Task 5
const newArr = [...arr, 6, 7, 8];
console.log(`New array formed after spread operator: ${newArr}`);

//Task 6
const sum = (...args) => {
    let sum = 0;
    args.forEach((i) => sum += i);
    return sum;
}
console.log(`Sum of first 10 natural numbers: ${sum(1,2,3,4,5,6,7,8,9,10)}`);


//Activity 4 : Default Parameter 
//Task 7
const product = (a, b = 1) => a*b;
console.log(`Product function with both values assigned, 10 x 6 = ${product(10,6)}`);
console.log(`Product function with one value assigned, 10 x default(1) = ${product(10)}`);


//Activity 5 : Enhanced Object Literals 
//Task 8
const myFunction = () => console.log("Hello from Krunal!");
const myObj = {name, age, myFunction};
console.log("Object via Object Enhanced Literals: ", myObj);

//Task 9
const enhanceObj = {
    name,
    age,
    isAdult: age >= 18
}
console.log("Object with Computer Properties", enhanceObj);