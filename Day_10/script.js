//Activity 1 : Basic Event Handling
//Task 1
const para = document.querySelector(".para");
const parabtn = document.querySelector(".parabtn");

parabtn.addEventListener("click", () => {
    para.textContent = "After the event trigger";
})

//Task 2
const codeimg = document.querySelector(".codeimg");
codeimg.addEventListener("dblclick", () => {
    codeimg.style.display === "none"? (codeimg.style.display = "block") : (codeimg.style.display = "none");
});


//Activity 2 : Mouse Event
//Task 3
const para2 = document.querySelector(".para2");
para2.addEventListener("mouseover", () => {
    para2.textContent = "After mouseover event";
    para2.style.backgroundColor = "skyblue";
});

//Task 4
para2.addEventListener("mouseout", () => {
    para2.textContent = "after mouseout event";
    para2.style.backgroundColor = "white";
}); 


//Activity 3 : Keyboard Events
//Task 5
const input = document.querySelector("#input");
input.addEventListener("keydown", (e) => {
    console.log(e.key);
});

//Task 6
const para3 = document.querySelector(".para3");
input.addEventListener("keyup", (e) => {
    para3.textContent = e.target.value;
});


//Activity 4 : Form Event
//Task 7
const username = document.querySelector("#username");
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(`Username : ${username.value}`);
});

//Task 8
const select = document.querySelector("#select");
const para4 = document.querySelector(".para4");
select.addEventListener("change", () => {
    para4.textContent = select.value;
});


//Activity 5 : Event Delegation
//Task 9
const list = document.querySelector("#list");
list.addEventListener("click", (e) => {
    console.log(e.target.textContent);
});

//Task 10
const carbtn = document.querySelector("#carbtn");
const div10 = document.querySelector("#div10");
const textadd = document.querySelector("#textadd");

div10.addEventListener("click", (e) => {
    console.dir(e.target.textContent);
});

carbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const newChild = document.createElement("p");
    newChild.textContent = textadd.value;
    div10.appendChild(newChild);
});