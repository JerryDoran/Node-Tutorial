const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// SET UP MIDDLEWARE.  USED FOR 'APP.USE()'
app.use('/public', express.static(path.join(__dirname, 'static')));

// Allows us to parse url encoded forms.
app.use(bodyParser.urlencoded({ extended: false }));

// SPIN UP THE SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// HOME ROUTE/PAGE
app.get('/', (req, res) => {
  // res.send('Hello World');
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

// POST ROUTE - TAKING IN INFORMATION FROM THE FORM ON THE CLIENT SIDE
app.post('/', (req, res) => {
  console.log(req.body);
  // database work here

  res.send('successfully posted data');
});

app.get('/example', (req, res) => {
  res.send('hitting example route');
});

//ROUTE PARAMETERS
app.get('/example/:name/:age', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(
    `Your name is ${req.params.name} and you are ${req.params.age} years old`
  );
});

// SERVING STATIC FILES
