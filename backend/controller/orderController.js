//used to manage the order operation. creates a new order, linking the basket and the user

const Order = require('../models/Order')
const mongoose = require('mongoose');
const User = require('../models/User');

const addOrder = async (req, res) => {
    try{
        const email = req.user.email
        const user = await User.findOne({email: email})
        const cartItems = req.body.cartItems
        //error likely below as usually have issues with Types.ObjectId
        const productInfo = cartItems.map((item) => ({
            product: mongoose.Types.ObjectId(item._id),
            quantity: item.cartQuantity
        }));
        const total = req.body.total
        const newOrder = await new Order({
            user: user._id,
            products: productInfo,
            total: total
        })
        const savedOrder = await newOrder.save()
        console.log(`Order added: ${savedOrder._id}`)
        res.json({ message: 'Order added' , orderId: savedOrder._id})
    } catch (error){
        res.json({ message: 'Order not added', error })
    }
}

const getOrders = async (req, res) => {
    
}

module.exports = { addOrder }