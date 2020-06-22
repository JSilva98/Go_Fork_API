const mongoose = require('../Database/connection')
const ObjectId = mongoose.Schema.Types.ObjectId

var serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imgLink: {
        type: String,
        required: true,
    },
    selected: {
        type: Boolean,
        required: true,
    },
   
})

const Service = mongoose.model('Service', serviceSchema);
 
module.exports = Service;