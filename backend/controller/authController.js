//repsonsible for managing authorisation of the user, when logging in. Also used to get user 
//information via the req. object

const User = require('../models/User')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const genAuthToken = require('../utils/genAuthToken');

const addUser = async (req, res) => {
  try {
      const { password } = req.body;
      const hash = await bcrypt.hash(password, 10);
      const register = await new User({
        email: req.body.email,
        password: hash,
        admin: req.body.admin
      }).save();
      res.send({ message: 'User registered' })
    } catch (error) {
      console.log(error);
    }
}

const loginUser = async (req, res) => {
    try {
        const { email , password } = req.body
        const user = await User.findOne({ email : email })
        if (!user) return res.status(400).send({ message: "User not found" });
        const dbPassword = user.password
        const match = await bcrypt.compare(password, dbPassword)
        if (!match) return res.status(400).send({ message: "Password is incorrect" });
        payload = {
            email: user.email,
            admin: user.admin
        }
        const token = genAuthToken(payload, "secret")
        res.send({ token })
    } catch (error){
        console.error(error);
        res.status(400).json({ error: error.message });
    }
}

module.exports = { addUser , loginUser }