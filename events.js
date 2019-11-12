// REQUIRE CORE MODULES - DON'T HAVE TO SPECIFY FILE PATH
const EventEmitter = require('events');
const util = require('util');

const myEmitter = new EventEmitter();

// Add an event listener with keyword 'on'.  When the 'tutorial' event is
// triggered run a function
// myEmitter.on('tutorial', (num1, num2) => {
//   console.log('tutorial event has occurred');
//   console.log(num1 + num2);
// });

// myEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
  constructor(name) {
    // Calling the super() function from EventEmitter class will allow us to
    // use 'this' keyword
    super();
    this._name = name;
  }
  // Set up a getter property 'name'
  get name() {
    return this._name;
  }
}

let pedro = new Person('Pedro');
let sue = new Person('Sue');
let steve = new Person('Steve');

let people = [pedro, sue, steve];

// ATTACH CUSTOM EVENT TO EACH PERSON
// sue.on('name', () => {
//   console.log(`My name is ${sue.name}`);
// });

// pedro.on('name', () => {
//   console.log(`My name is ${pedro.name}`);
// });

// steve.on('name', () => {
//   console.log(`My name is ${steve.name}`);
// });

// USE PEOPLE ARRAY TO GET SAME OUTPUT
people.forEach(person => {
  // Attach custom event to each person
  person.on('speak', () => {
    console.log(`My name is ${person.name}`);
  });
});

pedro.emit('speak');
sue.emit('speak');
steve.emit('speak');
