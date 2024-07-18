const arr = [1, 2, 3, 4, 5];

//Activity 1 : Array creation and access
//Task 1
console.log(`arr : [${arr}]`);

//Task 2
console.log(`First element: ${arr[0]}, Last element: ${arr[arr.length-1]}`);

//Activity 2 : Array methods (basic)
//Task 3
arr.push(6);
console.log(`After pushing 6: [${arr}]`);

//Task 4
arr.pop();
console.log(`After popping: [${arr}]`);

//Task 5
arr.shift();
console.log(`After shifting: [${arr}]`);

//Task 6
arr.unshift(1);
console.log(`After unshifting 1: [${arr}]`);

//Activity 3 : Array methods (intermediate)
//Task 7
const arrDouble = arr.map((i) => i*2);
console.log(`arr but doubled: [${arrDouble}]`);

//Task 8
const arrEven = arr.filter((i) => i%2 == 0);
console.log(`arr but even: [${arrEven}]`);

//Task 9
const arrReduce = arr.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of elements of arr: [${arrReduce}]`);

//Activity 4 : Array iteration
//Task 10
for(i=0 ; i<arr.length ; i++){
    console.log(`Looping using for loop: ${arr[i]}`);
}

//Task 11
arr.forEach((i) => console.log(`Looping using foreach loop: ${i}`));

//Activity 5 : Multi-dimentional array
//Task 12
const arr1 = [[1, 2, 3], [4,5,6], [7, 8, 9]];
console.log(arr1);

//Task 13
console.log(`Array element in 1st row, 2nd column: ${arr1[0][1]}`);