const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllerBraids')

router.post('/register', controller.createUser)
router.get('/getAll', controller.showUsers)
router.get('/:id', controller.getOne)
router.patch('/:id', controller.updateUser)
router.delete('/:id', controller.deleteUser)

module.exports = router