const User = require("../../models/userSchema");
const asyncHandler = require("express-async-handler");
const imgSchema = require("../../models/imageSchema");
const CategorySchema = require("../../models/categorySchema");
const SubCategorySchema = require("../../models/subCategorySchema");
const { result } = require("lodash");

const getAllUsers = asyncHandler(async (req, res, next) => {
  try {
    const users = await User.find({});

    res.json({ users: users });
  } catch (error) {
    res.json({ error: error.message });
  }
});

const getUser = asyncHandler(async (req, res, next) => {
  console.log("hello");
  try {
    const user = await User.findById({ _id: req.params.id });

    res.json({ user: user });
  } catch (error) {
    res.json({ error: error.message });
  }
});

const deleteUser = asyncHandler(async (req, res, next) => {
  try {
    const deleteUser = await User.findOneAndDelete(req.params.id);
    res.json({ deleteUser });
  } catch (error) {
    console.log("hi");
    res.json({ error: error.message });
  }
});

const updateUser = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json({ updateUser });
  } catch (error) {
    res.json({ error: error.message });
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;

  try {
    const adminUser = await User.findOne({ email });
    if (adminUser.role != "admin") {
      res.json({ message: "you are not admin" });
    } else {
      next();
    }
  } catch (error) {
    res.json({ err: error.messsage });
  }
});

const blockUser = async (req, res, next) => {
  console.log("this is block user function");

  const { id } = req.params;
  console.log(id);
  try {
    const userExist = await User.findById(id);

    if (userExist && !userExist.isBlocked) {
      const user = await User.findByIdAndUpdate(
        id,
        { isBlocked: true },
        { new: true }
      );
      res.json({ message: true });
    } else {
      res.status(401).json({ msg: "user already unblock" });
    }
  } catch (error) {
    console.log(error.message)
    res.status(404).json({ err: error });
  }
};

const unBlockUser = async (req, res, next) => {
  const { id } = req.params;
  console.log("this is unblock user function");
  try {
    const userExist = await User.findById(id);
    console.log(userExist);

    if (userExist && userExist.isBlocked) {
      const user = await User.findByIdAndUpdate(
        id,
        { isBlocked: false },
        { new: true }
      );
      res.json({ message: false });
    } else {
      res.status(401).json({ msg: "this user is not blockeds" });
    }
  } catch (error) {
    res.status(401).json({ err: error.message });
  }
};

const getImage = asyncHandler(async (req, res, next) => {
  try {
    const responseImg = await imgSchema.find({});

    res.json({ res: responseImg });
  } catch (error) {
    console.log("hi");
    console.log(error);
  }
});

// add categories

const addCategory = asyncHandler(async (req, res, next) => {
  console.log("re");
  console.log(req.body);
  const { category, subCategory1, subCategory2 } = req.body;

  try {
    const resultCat = await SubCategorySchema.create(
      { subcategory: subCategory1 },
      { subcategory: subCategory2 }
    );
    let idArray = [];
    resultCat.map((el) => {
      return idArray.push(el._id);
    });

    const cat = await CategorySchema.create({
      category: category,
      subCategory: idArray,
    });
    console.log(cat);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  isAdmin,
  blockUser,
  addCategory,
  unBlockUser,
  getImage,
};
