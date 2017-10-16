import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let schemas;

const postSchema = new Schema({
    name: { type: 'String', required: true },
    title: { type: 'String', required: true },
    content: { type: 'String', required: true },
    slug: { type: 'String', required: true },
    cuid: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
});

const user = new Schema({
    cuid: { type: 'String', required: true},
    name: { type: 'String', required: true},
    username: { type: 'String', required: true},
    email: { type: 'String', required: true},
    dob: { type: 'Date', required: true},
    gender: {type: 'String', required: true},
    telephone: {type: 'Number', required: true},
    password: {type: 'String', required: true},
});

export schemas = [
    user,
];
