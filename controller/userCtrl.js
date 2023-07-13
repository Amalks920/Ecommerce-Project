const User=require('../models/userSchema');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt');
const generateToken=require('../config/jwtToken')
const mongoose=require('mongoose')
// const {createOtp}=require('../config/otpGenerator')

const {sendOtp}=require('../config/otpGenerator')




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
        console.log('hello')
    try {
        const user=await User.findById({_id:req.params.id})
       
        res.json({user:user})
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
            console.log(req.body)
    try {
        const updateUser=await User.findByIdAndUpdate(req.params.id,{
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


 const isAdmin=asyncHandler(async(req,res,next)=>{
        
        const {email}=req.user;
        
        try {
            const adminUser=await User.findOne({email}) 
            if(adminUser.role!="admin"){
           
                res.json({message:"you are not admin"})
           }else{
               next()
           } 
        } catch (error) {
            res.json({err:error.messsage})    
        }            
 })


 const generateOtp= (req,res,next)=>{
  

     sendOtp()
   }


   const blockUser=async (req,res,next)=>{
           const {id}=req.params
        const user=await User.findByIdAndUpdate(id,{isBlocked:true},{new:true})   
        console.log(user)
   }

   const unBlockUser=async (req,res,next)=>{
    const {id}=req.params
    const user=await User.findByIdAndUpdate(id,{isBlocked:false},{new:true})
    console.log(user)
   }

module.exports={
    createUser,userLogin,
    getAllUsers,getUser,
    deleteUser,updateUser,
    isAdmin,generateOtp,
    blockUser,unBlockUser
}