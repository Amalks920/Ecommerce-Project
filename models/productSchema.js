
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema({
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
      // type:mongoose.Schema.Types.ObjectId,
      // ref:Category
      type:String,
      required:true
    },
    subCategory: {
      // type: mongoose.Schema.Types.ObjectId,
      type:String,
      // ref:subCategory,
      required:true
      
    },
    stockQuantity: {
      type: Number,
      required: true,
    },
    images: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"ProductImg"
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
  //  ratings:{
  //     star:Number,
  //     postedBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
  //   },
    sold:{
      type:Number,
      default:0
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
module.exports = mongoose.model('Product', ProductSchema);