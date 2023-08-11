import React, { useState,useRef } from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {sepia} from "@cloudinary/url-gen/actions/effect";
import axios from '../api/axios';
import ImageZoom from "react-image-zooom";

import CustomInput from '../components/CustomInput';
import CustomModal from '../components/CustomModal';

function Img() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

 
  const handleSelectFile = (e) => setFile(e.target.files[0]);
  console.log(file)
  const handleUpload = async () => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append("my_file", file);
      const res = await axios.post("/user/image", data);
      setRes(res.data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };


  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="App h-screen mt-[10%]">
      <button
      onClick={()=>{
       handleOpenModal()
      }}
      >open</button>
                <CustomInput type={'number'} i_id={'amal'} i_class={'border border-black w-[100px] h-[100px]'} label={'lsdk'}/>
                <CustomModal
                 open={modalOpen}
                 hideModal={handleCloseModal}
                  title={'do you want to delete'}/>

      <label htmlFor="file" className="btn-grey">
        {" "}
        select file
      </label>
      {file && <center> {file.name}</center>}
      <input
        id="file"
        type="file"
        onChange={handleSelectFile}
        multiple={false}
      />
      <code>
        {Object.keys(res).length > 0
          ? Object.keys(res).map((key) => (
              <p className="output-item" key={key}>
                <span>{key}:</span>
                <span>
                  {typeof res[key] === "object" ? "object" : res[key]}
                </span>
              </p>
            ))
          : null}
      </code>
      {file && (
        <>
          <button onClick={handleUpload} className="bg-black">
            {loading ? "uploading..." : "upload to cloudinary"}
          </button>

        </>
      )}
    </div>
  );
}




// const Img = () => {
//     const [image, setImage] = useState();
//     const [file1,setFiles1]=useState();
//     const inputRef=useRef(null)


//     const cld = new Cloudinary({
//       cloud: {
//         cloudName: 'diwjdka8p'
//       }
//     }); 

//     const myImage = cld.image('qp0akpk6nurq1pwol3ad');

//   //   myImage
//   // .effect(sepia());  // Apply a sepia effect.

//     console.log(file1)


//     const sendFile=(e)=>{
//         let data={
//             image:image
//         }
//         e.preventDefault()
//         const formData = new FormData();
//     axios
//     .post("/user/image", data)
//     .then((res) => {
//       // dispatch(setProductDetails(res.data))

//       console.log(res);
//     })
//     .catch((err) => {
//       // dispatch(setProductDetailsError(err.message))
//       console.log(err);
//     });

  

//     }

//     function previewFiles(file) {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
    
//         reader.onloadend = () => {
//           setImage(reader.result);
//           console.log(image);
//         };
//       }

//       const handleImageClick=(e)=>{
//         const file=e.target.files[0]
//         console.log(file)
//       }

//   return (
//    <div className='mt-[10%] border border-black h-[700px]'>
//     <input onChange={handleImageClick} type='file' ref={inputRef}/>
//      {/* <AdvancedImage cldImg={myImage} /> */}
//      {/* <ImageZoom src={`https://res.cloudinary.com/diwjdka8p/image/upload/v1690970995/qp0akpk6nurq1pwol3ad.webp`}/> */}

//    </div>
//   )
// }

export default Img