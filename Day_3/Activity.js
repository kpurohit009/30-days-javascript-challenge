//Activity 1 
//Task 1

let num = -50;
if (num > 0) {
    console.log(`${num} is a positive number`);
}
else if (num < 0) {
    console.log(`${num} is a negative number`);
}
else{
    console.log(`It is ${num}`);
}

//Task 2

let age = 20;
if (age >= 18) {
    console.log(`you are eligible to vote`);
} else {
    console.log(`you are not eligible to vote`);
}

//Activity 2
//Task 3

let num1 = 18;
let num2 = 45;
let num3 = 7;
if (num1 > num2) {
    if (num1 > num3) {
        console.log(`${num1} is greater`);
    } else {
        console.log(`${num3} is greater`);
    }
}
else{
    if (num2 > num3) {
        console.log(`${num2} is greater`);
    } else {
        console.log(`${num3} is greater`);
    }
}


//Activity 3
//Task 4

let day = 3
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;

    default:
        console.log("Sorry , there are only 7 days in a week.");
        break;
}

//Task 5

var score = 60;
switch(true){
    case score >= 90:
        console.log("A");
        break;
    case score >= 80:
        console.log("B");
        break;
    case score >= 60:
        console.log("C");
        break;
    case score >= 40:
        console.log("D");
        break;
    case score < 40:
        console.log("F");
        break;
    default:
        console.log("no result");
        break;
}


//Activity 4
//Task 6

const number = 18;
let oddeven = (number % 2 == 0)? "even" : "odd";
console.log(`${number} is a ${oddeven} number`);

//Activity 5
//Task 7

const year = 2025;
if (year%4 == 0 && year%100 != 0 || year%400 == 0 ) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year.`);
}