const express=require('express');
const router=express.Router();
const {createUser,userLogin,getAllUsers,getUser}=require('../controller/userCtrl');


router.post('/register',createUser);
router.post('/login',userLogin)
router.get('/get-all-users',getAllUsers)
router.get('/get-user/:id',getUser)

module.exports=router;