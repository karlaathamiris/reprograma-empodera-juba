const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllerPaymentMethod')

router.post('/register', controller.createMethod)
router.get('/getAll', controller.showMethod)
router.get('/:id', controller.getOne)
router.patch('/:id', controller.updateMethod)
router.delete('/:id', controller.deleteMethod)

module.exports = router