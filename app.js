//Variables to require the necessary dependencies
const express = require('express');
const app = express();
//Link to project data
const { data } = require('./data.json');

//Define settings in Express, pug tells Express which template engine to use
app.set('view engine', 'pug');

//Serve the static files located in the public folder
app.use(express.static('public'));

//Render the "Home" page with the locals set to data.projects
app.get('/', (req, res) => {
    //Sends string to client
    res.render('index', { data });
});

//Render the "About" page
app.get('/about', (req, res) => {
    //Sends string to client
    res.render('about');
});

//-->>Dynamic "project" routes (/project or /projects) based on the id of the project that render a customized version of the Pug project template to show off each project. Which means adding data, or "locals", as an object that contains data to be passed to the Pug template.
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.render('project', {
  });
});

//Start the server
app.listen(3000, () => {
  console.log('The server is running on port 3000.');
});



/*TO DO

Handle errors
-->>If a user navigates to a non-existent route, or if a request for a resource fails for whatever reason, your app should handle the error in a user friendly way.
-->>Add an error handler to app.js that sets the error message to a user friendly message, and sets the status code.
-->>Log out a user friendly message to the console when the app is pointed at a URL that doesn't exist as a route in the app, such as /error/error.
-->>Refer to the video on Error handling Middleware, which is linked in the project resources list.

*/

/*Initialize the app and add dependencies
-->Running node app.js serves the app.
-->Running npm start serves the app.

The following routes do render the appropriate pages:
-->> / - Home page
-->> /about - About page
-->> /project or /projects route that includes a project id parameter
-->> App uses a static route to serve the static files in the public folder

Errors
-->>App logs out a user friendly error message to the console when the app is pointed at a non-existent route such as /error/error.

*/


/*NOTES FROM UNIT VIDEOS
//const router = express.Router();
//app.use(bodyParser.json());
//app.use(bodyParse.urlencoded({extended: false}));


//app.use('/', data.projects);



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

//connect to projects
app.get('/', (req, res) => {
  const numberOfProjects = projects.length;
  const project = Math.floor( Math.random() * numberOfProjects);
  res.redirect(`/projectData/${project}?side=project`)
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


module.exports = router;


*/
