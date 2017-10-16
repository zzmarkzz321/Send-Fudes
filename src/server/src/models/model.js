import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: { type: 'String', required: true },
    title: { type: 'String', required: true },
    content: { type: 'String', required: true },
    slug: { type: 'String', required: true },
    cuid: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
});

const userProfile = new Schema({
    name: { type: 'String', required: true},
    email: { type: 'VarChar', required: true},
    dateOfBirth:{ type: 'Date', default: Date.now, required: true},
    gender: {type: 'Char', required: true},
    password: {type: 'VarChar', required: true},
});

export default mongoose.model('Post', postSchema);