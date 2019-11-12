let counter = function(arr) {
  return `There are ${arr.length} elements in this array`;
};

let adder = function(a, b) {
  return `The sum of the two numbers is ${a + b}`;
};

let pi = 3.142;

// SET THE EXPORTS TO WHAT WE WANT TO BE MADE AVAILABLE OUTSIDE THIS FILE!
// module.exports = counter;

// EXPORT MORE THAN ONE FUNCTIONALITY FROM THIS FILE
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
