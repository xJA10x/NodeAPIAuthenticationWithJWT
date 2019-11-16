// Imports express.
const express = require('express');
// Initializes express app.
const app = express();

// Endpoint
app.get('/about', (req, res) => {

  res.send("We are on the About page")

});

// Endpoint
app.get('/projects', (req, res) => {

  res.send('We are on the project page')

});

// Endpoint
app.get('/Contact', (req, res) => {

  res.send("We are on the contact page")


});

// Starts the server
// to litsen for request at a given port.
app.listen(3000, () => {

  console.log('Up and running')

});
