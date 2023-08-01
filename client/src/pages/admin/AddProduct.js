import React, { createRef, useState } from "react";
import { BACKEND_API } from "../../utils/constants";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate=useNavigate()

  const fileInput = createRef();
  const fileInput2 = createRef();
  const fileInput3 = createRef();

  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [description, setDescription] = useState();
  const [stockQuantity, setStockQuantity] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [keyWords, setKeyWords] = useState();

  const [price, setPrice] = useState();
  const [file1, setFiles1] = useState();
  const [file2, setFiles2] = useState();
  const [file3, setFiles3] = useState();
  const [image, setImage] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();


  let URL = `${BACKEND_API}/admin/add-product`;

  const sendProductDeatails = (e) => {
    e.preventDefault();
    const formData = new FormData();

    let data = {
      productName: productName,
      brandName: brandName,
      category: category,
      subCategory: subCategory,
      size: selectedSize,
      description: description,
      stockQuantity: stockQuantity,
      size: selectedSize,
      price: price,
      image: image,
    };
    console.log(stockQuantity);

    // formData.set('file1',fileInput.current.files[0])
    // formData.set('file2',fileInput2.current.files[0])
    // formData.set('file3',fileInput3.current.files[0])

    // Object.keys(data).forEach(key => {
    //   formData.append(key, data[key]);
    // })

    axios
      .post(URL, data)
      .then((res) => {
        // dispatch(setProductDetails(res.data))

        console.log(res);
        navigate('/admin/product-dashboard')
      })
      .catch((err) => {
        // dispatch(setProductDetailsError(err.message))
        console.log(err);
      });
  };

  console.log(
    productName,
    brandName,
    selectedSize,
    stockQuantity,
    description,
    category
  );
  console.log(category)

  function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
   

    reader.onloadend = () => {
      setImage(reader.result);
      console.log(image);
      
    };
  }

  return (
    <form
      onSubmit={sendProductDeatails}
      className="mt-3  grid grid-cols-5 grid-rows-[5%] gap-4  m-10 bg-white">
    
      <div className="flex justify-left ps-8 font-bold text-lg items-center col-span-5 row-span-1 shadow-xl">
        <h1 className="text-2xl">ADD A PRODUCT</h1>
      </div>

      <div className=" col-span-3 row-span-1  shadow-xl p-10">
        <div className="flex justify-center">
          <h2 className="font-bold">BASIC INFORMATION</h2>
        </div>

        <div className="p-4 mt-4">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Product Name
          </label>
          <input
            name="productname"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            className=" appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="text"
            placeholder="Product Name"
          />
        </div>

        <div className="p-4 mt-4">
          <label
            className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Brand Name
          </label>
          <input
            name="productname"
            onChange={(e) => {
              setBrandName(e.target.value);
            }}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="text"
            placeholder="Product Name"
          />
        </div>

        <div className="p-4 mt-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            size
          </label>
          <select
            onChange={(e) => {
              setSelectedSize(e.target.value);
            }}
            className=" block appearance-none w-full bg-gray-200  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="size">
            <option value="xl">xl</option>
            <option value="2xl">2xl</option>
            <option value="xxl">xxl</option>
          </select>
        </div>

        <div className="p-4 mt-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Stock Quantity
          </label>
          <input
            name="productname"
            value={stockQuantity}
            onChange={(e) => {
              setStockQuantity(e.target.value);
            }}
            className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="number"
            placeholder="Product Name"
          />
        </div>

        <div className="p-4 mt-4 h-[30%]">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Description
          </label>
          <textarea
            name="productname"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className=" h-[80%]  appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-product-name"
            type="text"
            placeholder="Description"></textarea>
        </div>
      </div>

      <div className=" col-span-2 row-span-1 ">
        <div className="grid grid-cols-5 gap-4 shadow-xl">
          <div className="col-span-5 flex items-center   row-span-6 justify-center ">
            <h2>TYPE</h2>
          </div>

          <div className="col-span-5 p-5 row-span-1  w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name">
              Category
            </label>
            <select
              
              onChange={(e) => {
                console.log(setCategory)
                setCategory(e.target.value);
              }}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="size">
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
            </select>
          </div>

          <div className="col-span-5 p-5 row-span-1  w-full mb-[16%]">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name">
              Sub Category
            </label>
            <select
              value={subCategory}
              onChange={(e) => {
                setSubCategory(e.target.value);
              }}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="size">
              <option value="Formals">Formals</option>
              <option value="Casuals">Casuals</option>
              <option value="Boy">Boys</option>
              <option value="Girl">Girl</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-[3%] shadow-xl">
          <div className="col-span-5 px-[3%] py-[10%] row-span-1  w-full mb-[16%]">
            <div className="flex justify-center pb-[5%]">TAGS</div>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name">
              Add a Key Words
            </label>
            <select
              value={keyWords}
              onChange={(e) => {
                setKeyWords(e.target.value);
              }}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="size">
              <option value="xl">T-shirt</option>
              <option value="2xl">T-shirt</option>
              <option value="xxl">T-shirt</option>
              <option value="xxl">T-shirt</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-[3%] shadow-xl">
          <div className="col-span-5 px-[3%] py-[10%] row-span-1  w-full mb-[16%]">
            <div className="flex justify-center pb-[5%]">PRICE</div>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name">
              Enter Price
            </label>
            <input
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-product-name"
              type="number"
              placeholder="Price"
            />
          </div>
        </div>
      </div>

      <div className=" border col-span-5 row-span-1 p-10 shadow-xl">
        <div className="flex justify-center ">
          <h2>ADD IMAGE</h2>
        </div>
        <div className="col-span-5 p-5 row-span-1  w-full mb-[16%]">
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

          <div className="m-[2%]">
            <p>Second Image</p>
            <div className="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100  dark:hover:border-gray-500 ">
                <p>FIRST IMAGE</p>
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
                    setFiles2(e.target.files[0]);
                   
                    previewFiles(e.target.files[0]);
                  }}
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                />
              </label>
            </div>
          </div>

          <div className="m-[2%]">
            <p>Third Image</p>
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100  dark:hover:border-gray-500 ">
                <p>FIRST IMAGE</p>
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
                    setFiles3(e.target.files[0]);
                    previewFiles(e.target.files[0]);
                  }}
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                />
              </label>
            </div>
          </div>

          <div className="border shadow-xl bg-white w-full p-[2%] flex justify-between">
            <div>You are almost done</div>
            <button className="bg-blue-900 p-[1%] rounded-xl text-white">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
