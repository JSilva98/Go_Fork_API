const express = require('express')
const router = express.Router()
const controller = require('../Controllers/menu.controller')

router.get('/', controller.get)
router.post('/', controller.post)
router.delete('/:id', controller.del)

module.exports = app => app.use('/menus', router)