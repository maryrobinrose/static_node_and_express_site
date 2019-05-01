//Variables to require the necessary dependencies
const express = require('express');
const app = express();
//Link to project data
const projects = require('./data.json');

//Define settings in Express, pug tells Express which template engine to use
app.set('view engine', 'pug');

//Serve the static files located in the public folder
app.use(express.static('public'));

//Render the "Home" page with the locals set to data.projects
app.get('/', (req, res) => {
    //Sends string to client
    res.render('index', { projects });
});

//Render the "About" page
app.get('/about', (req, res) => {
    //Sends string to client
    res.render('about');
});

//Render Pug project template
app.use('/project/:id', (req, res) => {
  const { id } = req.params;
  const project = projects[id];
  res.render('project', { project });
});


//Error handler for non-existant route
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
  console.log('Page cannot be found.');
});

//Error handling middleware
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  //Render template back to client
  res.render('error');
});


//Start the server
app.listen(3000, () => {
  console.log('The server is running on port 3000.');
});





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





module.exports = router;


*/
