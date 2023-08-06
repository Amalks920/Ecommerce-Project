import React, { useState } from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {sepia} from "@cloudinary/url-gen/actions/effect";
import axios from '../api/axios';
import ImageZoom from "react-image-zooom";


const Img = () => {
    const [image, setImage] = useState();
    const [file1,setFiles1]=useState();


    const cld = new Cloudinary({
      cloud: {
        cloudName: 'diwjdka8p'
      }
    }); 

    const myImage = cld.image('qp0akpk6nurq1pwol3ad');

  //   myImage
  // .effect(sepia());  // Apply a sepia effect.

    console.log(file1)


    const sendFile=(e)=>{
        let data={
            image:image
        }
        e.preventDefault()
        const formData = new FormData();
    axios
    .post("/user/image", data)
    .then((res) => {
      // dispatch(setProductDetails(res.data))

      console.log(res);
    })
    .catch((err) => {
      // dispatch(setProductDetailsError(err.message))
      console.log(err);
    });

  

    }

    function previewFiles(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onloadend = () => {
          setImage(reader.result);
          console.log(image);
        };
      }

  return (
   <div className='mt-[10%] border border-black h-[700px]'>
     {/* <AdvancedImage cldImg={myImage} /> */}
     <ImageZoom src={`https://res.cloudinary.com/diwjdka8p/image/upload/v1690970995/qp0akpk6nurq1pwol3ad.webp`}/>

   </div>
  )
}

export default Img