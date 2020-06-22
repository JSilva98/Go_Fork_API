const mongoose = require('../Database/connection')
const ObjectId = mongoose.Schema.Types.ObjectId

var clothingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    selected: {
        type: Boolean,
        required: true,
    },
   
})

const Clothing = mongoose.model('Clothing', clothingSchema);
 
module.exports = Clothing;