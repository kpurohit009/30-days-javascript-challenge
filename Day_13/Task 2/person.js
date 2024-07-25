const person = {
    name: "Krunal Purohit",
    age: 20,
    greet: function(){
        console.log(`Hello, my name is ${this.name}.`);
    },
    celebrateBirthday: function(){
        this.age += 1;
        console.log(`Thank you! I am now ${this.age} years old.`);
    }
};

module.exports = person;