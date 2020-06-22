const mongoose = require('../Database/connection')
const ObjectId = mongoose.Schema.Types.ObjectId

var requestsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    serviceName: {
        type: String,
        required: true,
    },
    menuName: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    vestuario: {
        type: String,
        required: true,
    },
    extras: {
        type: String,
    },
    local: {
        type: String,
        required: true,
    },
    budget: {
        type: String,
        required: true,
    },
    state: {
        type: Number,
        required: true,
    },
  
})

const Requests = mongoose.model('Requests', requestsSchema);
 
module.exports = Requests;