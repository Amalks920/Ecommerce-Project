const User=require('../models/userSchema')

const createUser=async(req,res)=>{
    console.log('hi')
    const email=req.body.email;
    console.log(req.body.email)
    const findUser=await User.findOne({email:email})
    console.log(findUser)
    if(!findUser){
       
        
    User.create(req.body)
         res.json({response:"success"})
    }else{
        console.log('hello')
        res.json({
            message:"user already exists",
            success:false,
        })
    }
}

module.exports={createUser}