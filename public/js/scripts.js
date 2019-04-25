$(document).foundation()

const express = require('express');

const app = express();

//Define settings in Express, pug tells Express which template engine to use
app.set('view engine', 'pug');


//Route 1
app.get('/', (req, res) => {
    //Sends string to client
    res.send('Hello');
});

//Route 2
app.get('/', (req, res) => {
    //Sends string to client
    res.send('Hello Again');
});

app.listen(3000, () => {
  console.log('The server is running');
});
