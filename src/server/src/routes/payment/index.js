'user strict';

/**
 *
 * Payment module
 *
 */


const express = require('express');
const router = express.Router();
const controller = require('./controller');

// send-fudes.com/payment/

router.get('/', controller.query);

module.exports = router;