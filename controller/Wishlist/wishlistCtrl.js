const expressAsyncHandler = require("express-async-handler");
const Wishlist = require("../../models/wishlistSchema");
const mongoose = require("mongoose");
const { update } = require("lodash");
const ObjectId = mongoose.Types.ObjectId;

const createWishlist = expressAsyncHandler(async (req, res, next) => {
  const existingWishlist = await Wishlist.findOne({ user: req.body.user });


  let wishlistResponse;
  let updatedWishlist;
  if (!existingWishlist) {
    wishlistResponse = await Wishlist.create(req.body);
  } else {
    updatedWishlist = await Wishlist.updateOne(
      { user: req?.body?.user },
      { $push: { products: req.body.products } }
    );

    try {
      const response=await Promise.all([existingWishlist,wishlistResponse,updatedWishlist])
      if(response) response.status(200).json({msg:"updated"})
    } catch (error) {
      res.status(404).json(error)
    }

  }

  // try {
  //   const response=await Promise.all([wishlistResponse,getAllWishlist])

  //   console.log(response)
  //   res.status(200).json(response[1]?.products)
  // } catch (error) {
  //  console.log(error)
  // }
});

const getWishlist = expressAsyncHandler(async (req, res, next) => {
  try {
    const wishtlists = await Wishlist.find({ user: req.params.id }).populate(
      "products"
    );
    console.log("wishlistsss");
   console.log(wishtlists[0]?.products);

    res.status(200).json(wishtlists[0].products);
  } catch (error) {
    res.status(404).json(error);
  }
});

const deleteWishlistProduct = expressAsyncHandler(async (req, res, next) => {
  try {
    console.log(req.body)
    const deleteProduct=await Wishlist.updateOne({user:req.body.userId},{$pull:{products:req?.body?.productId}})
    console.log(deleteProduct)
  } catch (error) {
    console.log(error)
  }
});

module.exports = {
  createWishlist,
  getWishlist,
  deleteWishlistProduct
};
