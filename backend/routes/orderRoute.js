//order routes to manage api requests relating to order operations. forwards those requests to the
//appropriate controllers.

const express = require('express')
const router = express.Router()
const { checkJWTToken } = require('../middleware/middleware')

const { addOrder } = require('../controller/orderController')
const { getOrder } = require('../controller/checkoutController')

router.post("/", checkJWTToken, addOrder)

router.post("/getOrder", getOrder)

module.exports = router