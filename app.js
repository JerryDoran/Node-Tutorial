// The ./ means the path that this app.js is in.  In other words the tutorial.js file is on the
// same level as app.js
// const total = require('./tutorial');
// console.log(total.sum(2, 2));
// console.log(total.PI);
// console.log(new total.SomeMathObject());

// GLOBAL OBJECTS
// setTimeout(() => {
//   console.log('3 seconds have passed');
// }, 3000);

// let time = 0;
// let timer = setInterval(() => {
//   time += 2;
//   console.log(`${time} seconds have passed`);
//   if (time > 5) {
//     clearInterval(timer);
//   }
// }, 2000);

console.log(__dirname);
console.log(__filename);

// EVENTS
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// Add an event listener with keyword 'on'.  When the 'tutorial' event is triggered run a function
// eventEmitter.on('tutorial', (num1, num2) => {
//   console.log('tutorial event has occurred');
//   console.log(num1 + num2);
// });

// eventEmitter.emit('tutorial', 1, 2);

// class Person extends EventEmitter {
//   constructor(name) {
// Calling the super() function from EventEmitter class will allow us to use 'this' keyword
// super();
// this._name = name;
// }
// Set up a getter property 'name'
// get name() {
// return this._name;
//   }
// }

// let pedro = new Person('Pedro');
// let sue = new Person('Sue');

// sue.on('name', () => {
//   console.log(`My name is ${sue.name}`);
// });
// pedro.on('name', () => {
//   console.log(`My name is ${pedro.name}`);
// });

// pedro.emit('name');
// sue.emit('name');
