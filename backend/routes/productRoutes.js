//product routes to manage api requests relating to product operations. forwards those requests to the
//appropriate controllers.

const express = require('express')
const router = express.Router()

const { getAllProducts, getProductById , deleteProduct } = require('../controller/productControllers')

//get all products from Mongodb, based on get to /api/products
router.get('/shop', getAllProducts)

//get a products based on ID from Mongodb, based on get to /api/products/:id
router.get('/shop/:id', getProductById)


module.exports = router