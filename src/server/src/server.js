'user strict';

// import our express module for routing
const Express = require('Express');
const app = new Express();
const path = require('path');
const serverConfig = require('../../../config');

// connect the routes from the model.js file
// TODO: include your routes here
const search = require('./routes/search');

// All API Endpoints
app.use('/search/', search);

app.get('/login', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../../client/src/', 'index.html'));
});

app.listen(serverConfig('local'));

module.exports = app;