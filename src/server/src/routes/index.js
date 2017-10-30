'use strict';

const Express = require('express');
const router = Express.Router();

router.get('/', (req, res) => {
    res.send('About Page');
});

module.exports = router;