const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var wishlistSchema = new mongoose.Schema({
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User",
    },
    products:[{   
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Product',
        required:true,
        unique:true    
    }]
   
});

//Export the model
module.exports = mongoose.model("Wishlist", wishlistSchema);