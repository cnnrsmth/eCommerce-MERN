//auth routes to manage api requests relating to auth operations. forwards those requests to the
//appropriate controllers.

const express = require('express')
const router = express.Router()

const { addUser } = require('../controller/authController')
const { loginUser } = require('../controller/authController')

router.post("/register", addUser)

router.post("/login", loginUser)

module.exports = router