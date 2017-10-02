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
    parentsNames: {
        required: true,
        type: String
    },
    siblingsInfo: {
        required: false,
        type: String
    },
    favCharacter: {
        required: false,
        type: String,
    },
    arrivalDate: {
        required: false,
        type: String,
    },
    departureDate: {
        required: false,
        type: String,
    },
    additionalInfo: {
        required: false,
        type: String,
    }
});

export default mongoose.model("Kid", schema);