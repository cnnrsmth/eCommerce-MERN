//admin routes to manage api requests relating to admin operations. forwards those requests to the
//appropriate controllers.

const express = require('express')
const router = express.Router()

const { checkJWTToken } = require('../middleware/middleware')

const { getOrders } = require('../controller/adminController')
const { getUsers } = require('../controller/adminController')
const { getAdmin } = require('../controller/adminController')

router.get("/getOrders", getOrders)

router.get("/getUsers", getUsers)

router.get("/accessAdmin", checkJWTToken, getAdmin)

module.exports = router