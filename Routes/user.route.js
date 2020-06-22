const express = require('express')
const router = express.Router()
const controller = require('../Controllers/user.controller')

router.get('/', controller.get)
router.delete('/:id', controller.del)
router.post("/", controller.register)
router.post("/auth", controller.validate)
router.put('/:id', controller.put)


module.exports = app => app.use('/users', router)