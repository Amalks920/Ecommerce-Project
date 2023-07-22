const multer=require('multer')
const DIR_NAME = require('../constants')

const storage=multer.diskStorage({
    
    destination:(req,file,cb)=>{
        cb(null,`upload`)
        
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage})

module.exports={upload}