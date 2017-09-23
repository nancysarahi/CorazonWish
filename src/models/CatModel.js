import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: String,
    },
    breed: {
        required: true,
        type: String
    },
    favoriteItem: {
        required: true,
        type: String
    },
    sleepingTime: {
        required: true,
        type: String,
    }
});

export default mongoose.model("Cat", schema);