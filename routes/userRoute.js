const express = require('express')
const router = express.Router()
const userController = require('../controller/userController.js')

router.route('/signup').post(userController.signUp)
router.route('/signin').post(userController.signIn)

module.exports = router