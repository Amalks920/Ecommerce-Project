const path=require('path')
const DIR_NAME=require('../constants')
const {mkdir}=require('node:fs/promises')
console.log('hiii')
let count=0
 const uploadProductImages=async(files)=>{
   
    const {file1,file2,file3}=files
    try {
        const newFolder= path.join(DIR_NAME,'upload')
    //     const newFolder= path.resolve(DIR_NAME+`/upload/`)
    //    console.log(newFolder)
       
       
       console.log(files.file1.name)
      await  files.file1.mv(path.join(newFolder,file1.name))


    //    const values = Object.values(files);

    //    for (const value of values) {
    //         value.mv(newFolder,value.name)
    //    }

    } catch (error) {
        console.log(error.message)
        
    }
   

    
    

}

module.exports={uploadProductImages}