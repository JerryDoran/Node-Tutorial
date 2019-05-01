const sum = (num1, num2) => num1 + num2;

const PI = 3.14;

class SomeMathObject {
  constructor() {
    console.log('object created');
  }
}

// Expose the sum function to other files in the application
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;

//      OR

// module.exports = {sum : sum, PI : PI, SomeMathObject : SomeMathObject}
