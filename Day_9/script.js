//Activity 1 : Selecting and Manipulating Elements
//Task 1
const h1 = document.getElementById("h1");
h1.textContent = "After the DOM Manipulation";

//Task 2
const h2 = document.getElementsByClassName("h2")[0];
h2.style.backgroundColor = "skyblue";


//Activity 2 : Creating and appending element
//Task 3
const newDiv = document.createElement("div");
newDiv.textContent = "Div created using JS";
document.body.append(newDiv);

//Task 4
const fruitElements = ["Mango", "Banana", "Orange", "Apple"];
const ul = document.querySelector(".ul");

fruitElements.forEach((fruit) => {
    const li = document.createElement("li");
    li.innerText = fruit;
    ul.append(li);
  });

  
//Activity 3 : Removing Element 
//Task 5
const removeElement = document.querySelector(".remove");
document.body.removeChild(removeElement);

//Task 6
const ol = document.getElementsByClassName("li");
document.body.removeChild(ol[ol.length - 1]);


//Activity 4 : Modifying Attributes and classes 
//Task 7
const anchor = document.querySelector(".anchor");
anchor.href = "https://youtube.com/@chaiaurcode";

//Task 8
const section = document.querySelector("section");
section.classList.add("section");
section.classList.add("section_2");
section.classList.remove("section_2");


//Activity 5 : Event Handling
//Task 9
const p = document.querySelector(".onButtonChange");
const button1 = document.querySelector("#btn1");

button1.addEventListener("click", () => {
  p.textContent = "After the click of the button";
});

//Task 10
p.addEventListener("mouseover", () => {
    p.style.border = "5px solid skyblue";
});