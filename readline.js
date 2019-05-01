const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get a random number between 1 and 10
let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);

let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}? \n`, userInput => {
  if (userInput.trim() == answer) {
    rl.close();
  } else {
    rl.setPrompt('Incorrect response, please try again\n');
    rl.prompt();
    rl.on('line', userInput => {
      if (userInput.trim() == answer) {
        rl.close();
      } else {
        rl.setPrompt(`Your answer of ${userInput} is incorrect \n `);
        rl.prompt();
      }
    });
  }
});

// Add event emitter and listen for the close event
rl.on('close', () => console.log('Correct!!'));
