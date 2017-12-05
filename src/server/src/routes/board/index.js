'user strict';

/**
 *
 * Board module
 *
 */


const express = require('express');
const router = express.Router();
const controller = require('./controller');

// send-fudes.com/board/

router.get('/', controller.query);

module.exports = router;