//manages the fetching of products

const Product = require('../models/Product')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Server error"})
    }
}

const getProductById = async (req, res) => {
    try {
        const idInput = req.params.id;
        const product = await Product.findOne({ _id: idInput });
        res.json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

module.exports = { getAllProducts, getProductById }