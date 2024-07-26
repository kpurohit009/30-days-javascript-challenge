//Activity 1 : Class Defination
//Task 1
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Hello, ${this.name}`;
    }
    incrementAge(){
        return `${this.name} will become ${this.age + 1} on their next birthday.`;
    }
    static generalGreet(){
        return "Hello World..";
    }
}
const person = new Person("Krunal", 20);
console.log(person);
console.log(person.greet());

//Task 2
console.log(person.incrementAge());


//Activity 2 : Class Inheritance
//Task 3
class Student extends Person{
    static studentCount = 0;
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }
    getStudentId(){
        return `Student ID is ${this.studentId}`;
    }
    greet(){
        return `Hello from student ID: ${this.studentId}`;
    }
    static getStudentCount(){
        return `Total Students: ${Student.studentCount}`;
    }
}
const student = new Student("Parth", 22, "004");
console.log(student);
console.log(student.getStudentId());

//Task 4
console.log(student.greet());


//Activity 3 : Static Methods and Properties
//Task 5
console.log(Person.generalGreet());

//Task 6
const student1 = new Student("Shyam", 21, "002");
const student2 = new Student("Parv", 23, "005");
const student3 = new Student("Scout", 26, "006");

console.log(Student.getStudentCount());


//Activity 4 : Getters and Setters
//Task 7
class Contact{
    constructor(firstname, lastname, email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }
    get fullName(){
        return `Fullname of user is: ${this.firstname} ${this.lastname}`;
    }
    set fullName(name){
        const [firstname, lastname] = name.split(" ");
        this.firstname = firstname;
        this.lastname = lastname;
    }
    geeting(){
        return `Hello from User: ${this.firstname} ${this.lastname}`;
    }
}
const contact = new Contact("Jethalal", "Gada", "jethalal00@gmail.com");
console.log(contact.fullName);

//Task 8
const contact_2 = new Contact("Peter", "Parkour", "spiderman@hero.com");
console.log(`Before updating: ${contact_2.fullName}`);

contact_2.fullName = "Peter Parkour";
console.log(`After updating: ${contact_2.fullName}`);


//Activity 5 : Private Fields (Optional)
//Task 9
class Account {
    #balance;
  
    constructor(initialAmount) {
      this.#balance = initialAmount;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(
          `${amount} has been succesfully deposited to your account: Updated balance: ${
            this.#balance
          }`
        );
      } else {
        console.log(`Deposit amount must pe greater than zero`);
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(
          `${amount} has been succesfully withdrawn to your account: Updated balance: ${
            this.#balance
          }`
        );
      } else if (amount > this.#balance) {
        console.log("Insufficient balance");
      } else {
        console.log(`Withdraw amount must pe greater than zero`);
      }
    }
  
    get balance() {
      return `Current balance is ${this.#balance}`;
    }
}

//Task 10
const account = new Account(1000);

// Log initial amount to console
console.log(account.balance);

// Withdraw money
account.withdraw(500);

// Deposit money
account.deposit(100);

// Withdraw money
account.withdraw(200);

// Deposit money
account.deposit(600);

// Withdraw money
account.withdraw(500);

// Deposit money
account.deposit(100);