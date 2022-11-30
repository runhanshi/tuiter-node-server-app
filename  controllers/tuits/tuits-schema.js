import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    versionKey: false,

}, {collection: 'tuits'});
export default schema;