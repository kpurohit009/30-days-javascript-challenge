//Activity 1 : Understanding LocalStorage
//Task 1
import { LocalStorage } from 'node-localstorage';
const localStorage = new LocalStorage('./scratch');
localStorage.setItem("string", "Test");
const myValue = localStorage.getItem("string");
console.log(myValue);

//Task 2
let person = {
    name: "Krunal",
    country: "India",
    age: 20,
}
localStorage.setItem("objectPerson", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("objectPerson")));


localStorage.clear();