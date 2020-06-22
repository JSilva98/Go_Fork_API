const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const http = require("http").Server(app)
const cors = require("cors")

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
require("./Routes/index")(app)

http.listen(port, () => {
    console.log("Listening")
})