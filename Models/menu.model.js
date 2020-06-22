const mongoose = require('../Database/connection')
const ObjectId = mongoose.Schema.Types.ObjectId

var menuSchema = new mongoose.Schema({
    idServico: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    food: {
        type: String,
        required: true,
    },
    drink: {
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

const Menu = mongoose.model('Menu', menuSchema);
 
module.exports = Menu;