const mongoose = require('mongoose')
require('dotenv').config()

const uri = `mongodb+srv://joao:joao123@cluster0-8pjjz.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true 
})

mongoose.Promise = global.Promise

module.exports = mongoose