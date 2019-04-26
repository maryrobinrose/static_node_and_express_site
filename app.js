/*The following routes do render the appropriate pages:
/ - Home page
/about - About page
/project or /projects route that includes a project id parameter
App uses a static route to serve the static files in the public folder

App logs out a user friendly error message to the console when the app is pointed at a non-existent route such as /error/error.
*/

//-->Should my routes be in their own file?

const express = require('express');
const app = express();
const router = express.Router();

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

//Middleware
app.use((req, res, next) => {
  req.message = 'This is a message';
  const err = new Error('Something went wrong');
  err.status = 500;
  next(err);
});

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

//Route 3 connect to hello.pug
app.get('/hello', (req, res) => {
    //Sends string to client
    res.render('hello');
});

//Connect to hello.pug, returns
app.post('/hello', (req, res) => {
    //Sends string to client
    res.render('hello');
});

//Middleware
(req, res, next) => {
  // do something
  next();
}

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404'
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});


app.listen(3000, () => {
  console.log('The server is running');
});
