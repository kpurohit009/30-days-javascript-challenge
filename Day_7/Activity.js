//Activity 1 : Object creation and access 
//Task 1
const book_obj = {
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    year: "1990"
}
console.log(book_obj);

//Task 2
console.log(`The title of book is: ${book_obj.title}`);
console.log(`The author of book is: ${book_obj.author}`);

//Activity 2 : Objects methods
//Task 3
book_obj.get_title_author = function(){
    console.log(`Book title: ${book_obj.title} and Book author: ${book_obj.author}`);
}
book_obj.get_title_author();

//Task 4
book_obj.get_year = function(year){
    book_obj.year = year;
}
book_obj.get_year(2024);
console.log(book_obj.year);

//Activity 3 : Nested objects 
//Task 5
const library = {
    name: "Jakaas Library",
    books: [
        {title: "Life of pi", year: 2001},
        {title: "The road", year: 2006},
        {title: "Becoming", year: 2018},
    ]
}
console.log(`List of library book: `, library);

//Task 6
console.log(`The name of library is: ${library.name}`);
library.books.forEach((item, index) => {
    console.log(`${index+1} : ${item.title}`);
})

//Activity 4 : The "This" keyword
//Task 7
book_obj.get_title_year = function(){
    console.log(`Book title: ${this.title} and Book year: ${this.year}`);
}
book_obj.get_title_year(); 

//Activity 5 : Object iteration
//Task 8
let book = {
    title: "Educated",
    author: "Tara Westover",
    year: 2018
}
for(let property in book){
    console.log(property + ": " + book[property]);
}

//Task 9
console.log(`Keys of book object: `,Object.keys(book));
console.log(`Values of book object: `,Object.values(book));