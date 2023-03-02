//responsible for managing routes for admin operations (in the admin page)

const Order = require('../models/Order')
const User = require('../models/User');
const Product = require('../models/Product')
const mongoose = require('mongoose');

async function getOrders(req, res) {
    try{
        const orderDetails = await Order.find()
            .populate('user')
            .populate('products.product')
        console.log('Orders fetched')
        res.send(orderDetails)
    }catch (error){
        console.log(error)
        res.send(error)
    }
}

async function getUsers(req, res) {
    try{
        const userDetails = await User.find()
        console.log('Users fetched')
        res.send(userDetails)
    } catch(error){
        console.log(error)
        res.send(error)
    }
}

async function getAdmin(req, res) {
    try{
        res.json( { "admin": req.user.admin})
    } catch(error){
        console.log(error)
        res.send(error)
    }
}

module.exports = { getOrders , getUsers , getAdmin}