//Activity 1 : Basic Recursion
//Task 1
function fact(n){
    if(n <= 1){
        return 1
    }
    else{
        return n * fact(n-1);
    }
}
const testCases = [0,1,3,4,8,10];

testCases.forEach(testCases => {
    console.log(`Factorial of ${testCases} is ${fact(testCases)}`);
})

//Task 2
function fibonacci(n){
    if(n <= 1){
        return n;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
testCases.forEach((n) => {
    console.log(`Fibonacci(${n}) = ${fibonacci(n)}`);
})


//Activity 2 : Recorsion with Array
//Task 3
function sumOfArray(arr){
    if(arr.length === 0){
        return 0;
    }
    else{
        return arr[0] + sumOfArray(arr.slice(1));
    }
}
const arrayTestCases = [
    {input: [1,2,3,4,5], expected: 15},
    {input: [10,20,30], expected: 60},
    {input: [100,0], expected: 100},
    {input: [100,-2,3], expected: 101},
];

arrayTestCases.forEach(({input, expected}, index) => {
    const result = sumOfArray(input);
    console.log(`Test Case ${index + 1}: Input: ${input}, Expected: ${expected}, Result: ${result}`);
})

//Task 4
function maxArray(arr, n){
    if(n === 1){
        return arr[0];
    }
    else{
        const maxElement = maxArray(arr, n-1);
        return Math.max(arr[n-1], maxElement);
    }
}
function getMax(arr) {
    return maxArray(arr, arr.length);
}

const testCase = [
    [1,2,3,4,5],
    [12,4,52,75,0],
    [-1,-5,-2,-4,0],
    [100,500,200,1000]
];
testCase.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}: Array: [${testCase}] --> Max Element: ${getMax(testCase)}`);
})


//Activity 3 : String Manipulation With Recursion
//Task 5
function stringReverse(str){
    if(str === ""){
        return "";
    }
    else{
        return str[str.length - 1] + stringReverse(str.slice(0,-1));
    }
}

const strTestCase = [
    "",
    "hi",
    "how are you",
    "Chai aur Code",
    "ABCD",
];

strTestCase.forEach((strTestCase, index) => {
    console.log(`Test Case ${index + 1}: String: ${strTestCase} --> Reversed: ${stringReverse(strTestCase)}`);
})

//Task 6
function isPalindrome(str, start, end) {
    if (start >= end) {
        return true;
    } else if (str[start] !== str[end]) {
        return false;
    }
    return isPalindrome(str, start + 1, end - 1);
}

function checkPalindrome(str) {
    return isPalindrome(str, 0, str.length - 1);
}

const palindromTestCase = [
    "hello",
    "madam",
    "2135312",
    "racecar",
];

palindromTestCase.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}: String: ${testCase} --> Is Palindrome: ${checkPalindrome(testCase)}`);
});


//Activity 4 : Recursive Search 
//Task 7
function binarySearch(arr, target, low, high){
    if(low > high){
        return -1;
    }
    const mid = Math.floor((low + high) / 2);
    if(arr[mid] === target){
        return mid;
    }
    if(arr[mid] > target){
        return binarySearch(arr, target, low, mid-1);
    }
    return binarySearch(arr, target, mid + 1, high);
}
function performBinarySearch(arr, target){
    return binarySearch(arr, target, 0, arr.length - 1);
}

const searchTestCase = [
    {array: [1,2,3,4,5], target: 3},
    {array: [5,10,15,20,25,30], target: 35},
    {array: [10,20,30,40,50], target: 40},
    {array: [100,200,300,400], target: 400},
];

searchTestCase.forEach((testCase, index) => {
    const {array, target} = testCase;
    const result = performBinarySearch(array, target);
    console.log(`Test Case ${index + 1}: Array: [${array}], Target: ${target} --> Index: ${result}`);
})

//Task 8
function countOccurences(arr, target, index){
    if(index === arr.length){
        return 0;
    }
    const count = arr[index] === target? 1 : 0;
    return count + countOccurences(arr, target, index + 1);
}
function getCount(arr, target){
    return countOccurences(arr, target, 0);
}

const occurenceTestCase = [
    {array: [1,2,2,4,2,3,5], target: 2},
    {array: [5,-5,5,6,5,0], target: 5},
    {array: [3,5,7,8,8,4,9,8,-8], target: 8},
    {array: [10,20,30,40], target: 50},
];

occurenceTestCase.forEach((testCase, index) => {
    const {array, target} = testCase;
    console.log(`Test Case ${index + 1}: Array: [${array}] --> Target: ${target} --> Count: ${getCount(array, target)}`);
})