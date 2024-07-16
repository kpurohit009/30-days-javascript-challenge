//Activity 1 : for loop
//Task 1
let num=0;
for(i=1 ; i<=10 ; i++){
  num = num + i + " ";
}
console.log(`for loop [ ${num}]`);

//Task 2 
for(i=1 ; i<=10 ; i++){
    console.log([`5 x ${i} = ${5*i}`]);
}

//Activity 2 : While loop
//Task 3
let number = 1
let sum = 0
while (number <= 10) {
    sum = sum + number; 
    number++;   
}
console.log("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = ",sum);

//Task 4
let num1 = 10
let result = "";
while (num1 >= 1){
    result += num1 + " ";
    num1--;    
}
console.log(`While loop[ ${result}]`);

//Activity 3 : Do...While loop
//Task 5
let j = 1;
let output = "";
do{
    output += j + " ";
    j++;
}while (j<=5);
console.log(`Do...While loop [ ${output}]`);

//Task 6
let n = 5;
let fact = 1;
let count = n;
do {
    fact *= count;
    count--;
} while (count>0);
console.log(`The factorial of ${n} is ${fact}`);

//Activity 4 : Nested loop
//Task 7
for(i=1 ; i<=5 ; i++){
    let pattern = '';
    for(j=1 ; j<=i ; j++){
        pattern += "*"
    }
    console.log(pattern);
}

//Activity 5 : Loop control statements
//Task 8
let skip = '';
for(i = 1; i<=10; i++){
    if(i == 5){             
        continue;
    }
    skip += i + " ";
}
console.log(`ignoreWithList [ ${skip}]`);

//Task 9
let str = '';
for(i=1 ; i<=10 ; i++){
    str += i + " ";
    if(i == 7){
        break;
    }
}
console.log(`break statement [ ${str}]`);