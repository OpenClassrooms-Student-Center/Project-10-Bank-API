const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/signup', userController.createUser)

router.post('/login', userController.loginUser)

module.exports = router
