const express=require('express');
const router=express.Router();
const {createUser,userLogin,getAllUsers,getUser,deleteUser,updateUser,isAdmin}=require('../controller/userCtrl');
const authMiddleware=require('../middlewares/authMiddleware')



router.post('/register',createUser);
router.post('/login',userLogin)
router.get('/get-all-users',getAllUsers)
router.get('/get-a-user/:id',authMiddleware,isAdmin,getUser)
router.delete('/:id',deleteUser)
router.patch('/:id',updateUser)

module.exports=router;