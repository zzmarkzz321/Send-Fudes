'user strict';

/**
 *
 * Search module
 *
 */


const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.query);

module.exports = router;