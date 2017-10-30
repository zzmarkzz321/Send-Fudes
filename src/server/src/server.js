'user strict';

// import our express module for routing
const Express = require('Express');
const app = new Express();

// connect the routes from the index.js file
const search = require('./routes/search');

// Uses the routing from the index.js file
app.use('/search/', search);

app.listen(3000);

module.exports = app;