const path=require('path')
const DIR_NAME=require('../constants')
const {mkdir}=require('node:fs/promises')
console.log('hiii')
let count=0
 const uploadProductImages=async(files)=>{
    console.log('file3')
    
    const {file1,file2,file3}=files
   
    try {
        const newFolder= path.join(DIR_NAME,'upload/images/')
   
      await  file1.mv(path.join(newFolder,file1.name))
      await  file2.mv(path.join(newFolder,file2.name))
      await  file3.mv(path.join(newFolder,file3.name))
    
      return [
            file1.name,
            file2.name,
            file3.name
      ]

    } catch (error) {
        console.log(error.message)
        
    }
   

    
    

}

module.exports={uploadProductImages}