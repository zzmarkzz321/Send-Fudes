'user strict';

/*
    TODO: Move everything to their own file.
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let schemas;

/**
 * Example Scehma
 */
const postSchema = new Schema({
    name: { type: 'String', required: true },
    title: { type: 'String', required: true },
    content: { type: 'String', required: true },
    slug: { type: 'String', required: true },
    cuid: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
});

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

const transactions = new Schema({

});

/**
 *
 * @type {mongoose.Schema}
 */
const activities = new Schema({
    restaurant: { type: 'String', required: false},
    cuisine: { type: 'Mixed', required: false},
});

const vendors = new Schema({
    name: { type: 'String', required: true}
});


export schemas = [
    transactions,
    activities,
    vendors,
    user
];
