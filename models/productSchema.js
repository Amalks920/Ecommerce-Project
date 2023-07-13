
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    brandName: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
      required: true,
      unique: true,
    },
    subCategory: {
      type: Array,
      required: true,
      unique: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required:true
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  });
  

//Export the model
module.exports = mongoose.model('Product', productSchema);