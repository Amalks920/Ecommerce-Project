const User=require('../models/userSchema');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt');
const generateToken=require('../config/jwtToken')



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
    findUser=await User.findOne({email})
    
    if(findUser && (await findUser.isPasswordMatched(password)) ){
            res.json({
                _id:findUser._id,
                name:findUser.firstname,
                email:findUser.email,
                username:findUser.username,
                token:generateToken(findUser._id)
            })
    }else{
       throw new Error('Invalid Credentials')
    }
}

module.exports={createUser,userLogin}