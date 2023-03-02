//order model for submitting orders to mongodb. links the user, products (via basket), total and 
//creation date. this enables proper record management of orders, and appropriate rendering of the
//checkout page

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./User.js')
const Product = require('./Product.js')

const orderSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref:'User',
        required: true
    },
    products: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
    total: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Order = mongoose.model('order', orderSchema)

module.exports = Order