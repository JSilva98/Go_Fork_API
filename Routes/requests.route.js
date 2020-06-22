const express = require('express')
const router = express.Router()
const controller = require('../Controllers/requests.controller')

router.get('/', controller.get)
router.post('/', controller.post)
router.delete('/:id', controller.del)
router.put('/:id', controller.put)

module.exports = app => app.use('/requests', router)