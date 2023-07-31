import React, { useState } from 'react'
import axios from '../api/axios';


const Img = () => {
    const [image, setImage] = useState();
    const [file1,setFiles1]=useState();

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
    <form onSubmit={sendFile}>
    <div className='mt-[15%]'>
         <div className="m-[2%]">
            <p>First Image</p>
           

            <div className="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100  dark:hover:border-gray-500 ">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input

                   onChange={(e) => {
                   setFiles1(e.target.files[0]);
                   previewFiles(e.target.files[0]);
                   }}
                  
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                />
              </label>
            </div>
          </div>
    </div>
    <button>submit</button>
    </form>
  )
}

export default Img