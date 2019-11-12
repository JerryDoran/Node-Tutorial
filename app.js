// REQUIRE CUSTOM MODULE
const stuff = require('./utilityModule');

console.log(stuff.counter(['steve', 'tony', 'reed']));

console.log(stuff.adder(2, 6));

console.log(stuff.adder(stuff.pi, 5));
