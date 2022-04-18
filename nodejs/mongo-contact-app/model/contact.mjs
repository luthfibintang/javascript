import mongoose from "mongoose";

const Contact = mongoose.model('Contact', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    noHP: {
        type: String,
        required: true
    }
})

export {Contact}