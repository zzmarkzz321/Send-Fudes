'user strict';

// import our express module for routing
const Express = require('Express');
const app = new Express();
const serverConfig = require('../../../config');

// connect the routes from the index.js file
// TODO: include your routes here
const search = require('./routes/search');

// Default routes
app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.get('/contact', (req, res) => {
    res.send('contact page');
});

// Uses the routing from the index.js file
// TODO: make sure the app uses your route
app.use('/search/', search);

app.listen(serverConfig('local'));

module.exports = app;