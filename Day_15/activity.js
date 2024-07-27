//Activity 1 : Understanding Closures
//Task 1
function outerFunction(){
    const outerString = "This is Outer Function";

    function innerFunction(){
        console.log(outerString);
    }
    return innerFunction;
}
const myInnerFunction = outerFunction();
myInnerFunction();

//Task 2
function counter(){
    let count = 0;
    return{
        increment: function(){
            count++;
        },
        getCount: function(){
            return count;
        }
    }
}
const mycounter = new counter();
mycounter.increment();
mycounter.increment();
mycounter.increment();
console.log(mycounter.getCount());


//Activity 2 : Practical Closures
//Task 3
function uniqueIdGenerator(){
    let lastId = 0;

    return function(){
        lastId++;
        return `Id: ${lastId}`;
    }
}
const generateId = uniqueIdGenerator();
console.log(generateId());
console.log(generateId());
console.log(generateId());

//Task 4
function greetMessage(username){
    return function(){
        console.log(`Hello, ${username}`);
    }
}
const greet = new greetMessage("Krunal");
greet();


//Activity 3 : Closures in Loop
//Task 5
function arrayFunction(){
    const arr = [];
    for(let i=0 ; i<5 ; i++){
        arr.push(function(){
            console.log(`Function called at index ${i}.`);
        });
    }
    return arr;
}
const array = arrayFunction();
array[0]();
array[2]();


//Activity 4 : Module Pattern
//Task 6
function itemModule(){
    const items = [];

    return{
        addItem: function(item){
            items.push(item);
        },
        removeItem: function(item){
            const index = items.indexOf(item);
            if(index !== -1){
                items.splice(index, 1);
            }
        },
        listItem: function(){
            return items;
        }
    }
}
const itemManager = itemModule();
itemManager.addItem("Chocolate");
itemManager.addItem("Pizza");
itemManager.addItem("Sandwich");
itemManager.removeItem("Chocolate");
console.log(itemManager.listItem());


//Activity 5 : Memoization
//Task 7
function memoize(fn){
    const cache = {};

    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key] === undefined){
            cache[key] = fn(...args);
        }
        return cache[key];
    }
}
function expensiveCalculation(x){
    console.log(`Calculating for ${x}...`);
    return x*2;
}
const memoizedCalculation = memoize(expensiveCalculation);
console.log(memoizedCalculation(7));
console.log(memoizedCalculation(7));

//Task 8
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n-1);
}
const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(7));
console.log(memoizedFactorial(7));