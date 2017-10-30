'user strict';

// import our express module for routing
const Express = require('Express');
const app = new Express();

// connect the routes from the search.js file
const search = require('./src/routes/search.js');

// Uses the routing from the search.js file
app.use('/search/', search);

app.listen(3000);

module.exports = app;