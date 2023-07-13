const User=require('../../models/userSchema');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt');
const generateToken=require('../../config/jwtToken')
const mongoose=require('mongoose')
// const {createOtp}=require('../config/otpGenerator')

const {sendOtp}=require('../../config/otpGenerator')




const saltRounds = 10;


const createUser=asyncHandler(async(req,res)=>{
    

    const email=req.body.email;
    console.log(req.body.email)
    const findUser=await User.findOne({email:email})
   
    if(!findUser){

        try {

        let user=await User.create(req.body)
            res.json({user:user})
        } catch (error) {
            res.json({error:error.message})
        }
    
         
    }else{
        res.json({
            message:"user already exists",
            success:false,
        })
    }
}
)

const userLogin=async (req,res,next)=>{
    
    const {email,password}=req.body
    //check if user exist or not
    try {
        findUser=await User.findOne({email})
        
    } catch (error) {
        res.json({error:error.message})
    }
   
    
    if(findUser && (await findUser.isPasswordMatched(password)) ){
        let authorizationHeader=generateToken(findUser._id)
        
            res.json({
                _id:findUser._id,
                name:findUser.firstname,
                email:findUser.email,
                username:findUser.username,
                token:authorizationHeader,
            })
    }else{
       throw new Error('Invalid Credentials')
    }
}







 const generateOtp= (req,res,next)=>{
  

     sendOtp()
   }




module.exports={
    createUser,userLogin,
    generateOtp,
   
}


