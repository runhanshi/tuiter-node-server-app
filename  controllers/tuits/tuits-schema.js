import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes:Number,
    disliked: Boolean,

},
    {collection: 'tuits',
        toObject: { versionKey: false }});
export default schema;