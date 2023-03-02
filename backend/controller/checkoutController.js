//used for managing the checkout operation. Joins the order, user and product data

const Order = require('../models/Order')
const User = require('../models/User');
const Product = require('../models/Product')
const mongoose = require('mongoose');

async function getOrder(req, res) {
    try{
      const orderId = req.body.orderId
      const orderDetails = await Order.find({ _id: orderId })
        .populate('user')
        .populate('products.product')
      console.log(`Order fetched ${orderDetails}`)
      res.send(orderDetails)
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  }

  module.exports = { getOrder }