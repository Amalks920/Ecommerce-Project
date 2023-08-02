const ProductModel = require("../../models/productSchema");
const asyncHandler = require("express-async-handler");
const path = require("path");
const DIR_NAME = require("../../constants");
const { uploadProductImages } = require("../../utils/uploadProductImages");
const fs = require("node:fs");
const { upload } = require("../../config/multer");
const imgModel = require("../../models/imageSchema");
const cloudinary = require("../../cloudinary/cloudinary");
const { log } = require("console");
const CategorySchema = require("../../models/categorySchema");
const SubcategorySchema = require("../../models/subCategorySchema");
const userSchema = require("../../models/userSchema");
const CartSchema = require("../../models/CartSchema");
const { default: mongoose } = require("mongoose");
const assetsFolder = path.join(DIR_NAME, "upload/images/");
const ObjectId = mongoose.Types.ObjectId;

// cloudinary.uploader.upload(,
//   { public_id: "ds,fkn" },
//   function(error, result) {
//     if(error)console.log(error.message)
//     console.log(result) });

const addProduct = asyncHandler(async (req, res, next) => {
  const { productName } = req.body;

  const { image } = req.body;

  const findProduct = await ProductModel.findOne({ productName: productName });

  if (!findProduct) {
    try {
      //
      const { category, subCategory } = req.body;
      console.log(req.body.category)
      const { image } = req.body;
      console.log(req.body);
      let categoryInDb = await CategorySchema.findOne({ category: category });
      console.log(categoryInDb);
      const {
        productName,
        brandName,
        size,
        description,
        stockQuantity,
        price,
      } = req.body;

      let cloudImage;
      try {
        console.log("hello");
        cloudImage = await cloudinary.uploader.upload(image, {
          timeout: 60000,
        });
        console.log("hl");
        console.log(cloudImage);
      } catch (error) {
        console.log(error);
      }

      console.log(cloudImage.url);

      const addProduct = await ProductModel.create({
        productName: productName,
        brandName: brandName,
        size: size,
        description: description,
        stockQuantity: Number(stockQuantity),
        price: Number(price),
        category: categoryInDb._id,
        image: cloudImage.url,
      });
      console.log("addproduct---->");
      console.log(addProduct);

      //  let cloud=await  cloudinary.uploader.upload(
      //         image,
      //     {
      //         upload_preset:'unsigned_upload',
      //         public_id:`f`,

      //     },
      //     function (error, result) {
      //         if(error) console.log(error.message)

      //        res.status(200).json(result)
      //     }
      //   );
      //     console.log('product cloud')
      //   console.log(cloud);

      // let product = await ProductModel.create(req.body);

      //   console.log(product._id);

      // let insertFile=await ProductModel.updateOne({_id:product._id},{$push:{images:{$each:filenames}}})
      //     console.log(insertFile)

      res.json({ product: addProduct });
    } catch (error) {
      console.log(error);
      //   res.json({ error: error.message });
    }
  }
});

const getAllProducts = asyncHandler(async (req, res, next) => {
  try {
    const allProducts = await ProductModel.find({ isSoftDeleted: false });

    console.log(allProducts);

    res.json({ products: allProducts });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
});

const getAProduct = asyncHandler(async (req, res, next) => {
  console.log("hello");
  try {
    const product = await ProductModel.findById(req.params.id);
    res.json({ product: product });
  } catch (error) {
    res.json({ error: error.message });
  }
});

const deleteProduct = asyncHandler(async (req, res, next) => {
  try {
    const deleteProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      {
        isSoftDeleted: true,
      },
      {
        new: true,
      }
    );
    res.json({ deleteProduct });
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
});

const updateProduct = asyncHandler(async (req, res, next) => {
  console.log(req.files);
  const { id } = req.body;
  console.log(id);
  console.log("inside update product");
  try {
    const updateProduct = await ProductModel.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.json({ updateProduct });
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
});

const addToCart = async (req, res, next) => {
  try {
    const { userId, productId } = req.body;

    let findUser = await userSchema.findById(userId);

    isCartExist = await findUser.populate("cart");

    if (!isCartExist.cart) {
      let userCart = await CartSchema.create({ products: [{ productId }] });
      let updateUser = await userSchema.findOneAndUpdate(
        { _id: userId },
        { cart: userCart._id }
      );
      console.log("upd");
      console.log(userCart._id);

      let returnedCart = await CartSchema.findById(userCart._id);
      const productCount = returnedCart.products[0].productId;
      //find product from db
      const product = await ProductModel.findOne(producId);
      res.json({ product: product });
    } else {
      let cartProducts = await isCartExist.populate("cart");

      let cartProd = await cartProducts.cart.populate("products");

      const prodIdArray = await cartProd.products.map((el) => {
        return el.productId;
      });

      const isProdExist = await prodIdArray.find(function (_id) {
        return _id.toString() === productId;
      });

      if (isProdExist) {
        console.log("product already exist in cart");
        let cartId = isCartExist.cart._id;
        findCart = await CartSchema.findById(cartId);
        // console.log(findCart.products.find(function (productId){
        //   return productId===productId
        // }).productId)

        // const inCount = await CartSchema.findOneAndUpdate({ prod });

        res.json({ msg: "success" });
        // console.log(isCartExist.cart.products.find(function(productId){
        //   return productId===productId
        // }).count)
        // isCartExist.save()
      } else {
        console.log('product doesn"t exist in cart');
        await cartProd.products.push({ productId });
        await cartProd.save();

        res.json({ msg: cartProd });
      }
    }

    // if(findUser){

    //
    //

    //   const em=await findUser.populate('cart')
    //   console.log(em.cart)
    // }else{
    //   res.json({msg:'user not found'})
    // }
  } catch (error) {
    console.log(error.message);
    res.json({ err: error.message });
  }
};

// const updateCartCount=asyncHandler(async(req,res,next)=>{
//   console.log('updatecartcount')
//   res.json({msg:"success"})
// })

module.exports = {
  addProduct,
  getAllProducts,
  getAProduct,
  deleteProduct,
  updateProduct,
  addToCart,
};
