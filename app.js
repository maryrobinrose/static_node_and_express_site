const express = require('express');

const app = express();

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
];

//Define settings in Express, pug tells Express which template engine to use
app.set('view engine', 'pug');


//Route 1
app.get('/', (req, res) => {
    //Sends string to client
    res.render('index');
});

//Route 2
app.get('/', (req, res) => {
    //Sends string to client
    res.send('Hello Again', {colors});
});

app.listen(3000, () => {
  console.log('The server is running');
});
