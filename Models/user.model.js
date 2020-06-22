const mongoose = require('../Database/connection')
const ObjectId = mongoose.Schema.Types.ObjectId

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
    points:{
        type: Number,
        required: true
    },
    rewards:{
        acheivements: [{
            id: { type: Number, required: true },
            tittle: { type: String, required: true },
            desc: { type: String, required: true },
            points: { type: Number, required: true },
            available: { type: Boolean, required: true },
            progress: { type: Number, required: true },
        }],
    },
    
    type: {
        type: Number,
        required: true,
    },
})

const User = mongoose.model('User', userSchema);

module.exports = User;