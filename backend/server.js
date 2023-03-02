//sets up the express server, and different routes for groupings of operations (product, auth etc)

const express = require('express')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const authRoutes = require('./routes/authRoute')
const orderRoutes = require('./routes/orderRoute')
const adminRoutes = require('./routes/adminRoute')
const cors = require('cors')

connectDB()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/checkout', orderRoutes)
app.use('/api/admin', adminRoutes)

const PORT = 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))