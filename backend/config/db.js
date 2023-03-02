require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    const mongoURI = 'mongodb+srv://cs862:Hyperion123@hyperion-dev-1234.cxax1qs.mongodb.net/ecommerce?retryWrites=true&w=majority'
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected!');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB
