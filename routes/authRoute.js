const express=require('express');
const router=express.Router();
const {createUser,userLogin}=require('../controller/userCtrl');


router.post('/register',createUser);
router.post('/login',userLogin)

module.exports=router;