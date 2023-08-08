const expressAsyncHandler = require("express-async-handler");
const multer=require('multer');
// const cloudinary=require('cloudinary').v2
const cloudinary=require('../cloudinary/cloudinary')




async function handleFileUpload (file){
    
    try {
      let cloud = await cloudinary.uploader.upload(file, { resource_type:"auto" });
      return cloud
    } catch (error) {
      console.log(error);
    }
  }


  //multer
  const storage=new multer.memoryStorage();
  
  const uploa=multer({
    storage,
  })


  const img=expressAsyncHandler(async(req,res,next)=>{
    try {
        const b64=Buffer.from(req.file.buffer).toString('base64');
        let dataUri="data:" +req.file.mimetype + ";base64," +b64;
        const resp=await handleFileUpload(dataUri);
        console.log(resp);
        res.send(resp)
    } catch (error) {
        console.log(error)
        res.json({err:error})
    }
  })

  module.exports={
    img,uploa
  }