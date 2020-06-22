const mongoose = require('../Database/connection')
const ObjectId = mongoose.Schema.Types.ObjectId

var reviewSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
     
})

const Review = mongoose.model('Review', reviewSchema);
 
module.exports = Review;