//originally used to test automated product loading. ignore (archive)

// Import required modules
require('dotenv').config()
const connectDB = require('./config/db')
const Product = require('./models/Product')
const products = require('./data/products')

// Connect to the database
connectDB()

// Function to load the products into the database
const loadProducts = async () => {
  try {
    // Delete all existing products from the database
    await Product.deleteMany({})

    // Insert the products into the database
    await Product.insertMany(products)

    console.log('Products loaded successfully')
    process.exit()
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

// Call the loadProducts function to load the products into the database
loadProducts()





/*const connectDB = require('./config/db')

const productsData = require('./data/products')
const Product = require('./models/Product')

connectDB()

//note, the following function will delete everything in the database, and then load new data from the data folder
const importData = async () => {
    try {
      await Product.deleteMany({});
  
      await Product.insertMany(productData);
  
      console.log("Data Import Success");
  
      process.exit();
    } catch (error) {
      console.error("Error with data import", error);
      process.exit(1);
    }
  };

//when the file (seederScript) is called, we want it to run the importData function
//put it in the script to import the data
importData()*/