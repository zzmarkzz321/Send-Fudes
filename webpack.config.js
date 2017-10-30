const path = require('path');

module.exports = {
    entry: {
        app: [
            '.src/client/server.js'
        ],
        vendor: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: __dirname,
        filename: 'app.js',
        publicPath: 'http://0.0.0.0:8000/',
    }
};