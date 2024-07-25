const person = require('./person');

function main() {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    
    person.greet();
    person.celebrateBirthday();
}

main();