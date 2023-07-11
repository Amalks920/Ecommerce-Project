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


const getAllUsers=asyncHandler(async(req,res,next)=>{
    const users=await User.find({})
    console.log(users)
}

)

const getUser=asyncHandler(async (req,res,next)=>{
    console.log(req.params.id)
    const user=await User.findOne({_id:req.params.id.toString()})
    console.log(user)
})

module.exports={
    createUser,userLogin,
    getAllUsers,getUser
}