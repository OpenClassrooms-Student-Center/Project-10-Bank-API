const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/signup', userController.createUser)

module.exports = router
