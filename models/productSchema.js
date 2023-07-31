
const mongoose = require('mongoose'); // Erase if already required
const category=require('./categorySchema')

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema({
    productName: {
      type: String,
      required: true,
      unique: true,
      lowercase:true
    },
    brandName: {
      type: String,
      required: true,
      lowercase:true
    },
    category: {
      // type:mongoose.Schema.Types.ObjectId,
      // ref:Category
      type:mongoose.SchemaTypes.ObjectId,
      ref:"category",
      required:true,
      unique:false
    },
    
    stockQuantity: {
      type: Number,
      required: true,
    },
    image:String,

    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
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