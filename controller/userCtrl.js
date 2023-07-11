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
    try {
        findUser=await User.findOne({email})
    } catch (error) {
        res.json({error:error.message})
    }
   
    
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
    try {
        const users=await User.find({})

        res.json({users:users})
        
    } catch (error) {
        res.json({error:error.message})
    }
  
    
}

)

const getUser=asyncHandler(async (req,res,next)=>{
    
    try {
        const user=await User.findById({id:req.params.id})
    } catch (error) {
        res.json({error:error.message})
    }
 })

 const deleteUser=asyncHandler(async (req,res,next)=>{
    
    try {
        const deleteUser=await User.findOneAndDelete(req.params.id)
        res.json({deleteUser})
    } catch (error) {
        console.log('hi')
        res.json({error:error.message})
    }
 })

 const updateUser=asyncHandler(async (req,res,next)=>{
    
    try {
        const updateUser=User.findOneAndUpdate(req.params.id,{
            firstname:req?.body?.firstname,
            lastname:req?.body?.lastname,
            email:req?.body?.email,
            mobile:req?.body?.mobile
        },
        {
            new:true,
        }
        )
        res.json({updateUser})

    } catch (error) {
        res.json({error:error.message})
    }
 })

module.exports={
    createUser,userLogin,
    getAllUsers,getUser,
    deleteUser,updateUser
}