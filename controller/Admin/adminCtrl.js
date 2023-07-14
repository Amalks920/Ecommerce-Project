const User=require('../../models/userSchema');
const asyncHandler=require('express-async-handler');



const  getAllUsers=asyncHandler(async(req,res,next)=>{
    try {
        const users=await User.find({})

        res.json({'users':users})
        
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


const blockUser=async (req,res,next)=>{
    const {id}=req.params
 const user=await User.findByIdAndUpdate(id,{isBlocked:true},{new:true})   
    res.json({message:"user blocked"})
}

const unBlockUser=async (req,res,next)=>{
const {id}=req.params
const user=await User.findByIdAndUpdate(id,{isBlocked:false},{new:true})
    res.json({message:"user unblocked"})
}



module.exports={
   
    getAllUsers,getUser,
    deleteUser,updateUser,
    isAdmin,blockUser,
    unBlockUser
}