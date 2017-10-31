const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Metadata includes miscellaneous items such as compliments, rating, etc.
 * @type {mongoose.Schema}
 */
const user = new Schema({
    cuid: { type: 'String', required: true},
    name: { type: 'String', required: true},
    username: { type: 'String', required: true},
    email: { type: 'String', required: true},
    dob: { type: 'Date', required: true},
    gender: {type: 'String', required: true},
    telephone: {type: 'Number', required: true},
    password: {type: 'String', required: true},
    miscellaneous: {type: 'Mixed', required: false}
});

module.exports = user;