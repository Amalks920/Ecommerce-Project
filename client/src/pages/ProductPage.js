import React, { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
import store from "../utils/store";
import axios from "../api/axios";
import { cacheCartProducts } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ADD_TO_CART_API = `/user/add-to-cart`;

const ProductPage = () => {
  const { id } = useParams();
  const dispatch=useDispatch();
 
  
 
  //subscribe to userslice
  const token = useSelector((store) => store.user.token);
  const userid = useSelector((store) => store.user.id);
  const cart=useSelector(store=>store.cart)
  console.log(cart)

  const products = useSelector((store) => {
    return store.products.products[2];
  });
  let product = products.filter((products) => {
    if (products._id === id) return id === products._id;
  });

  let prodId = product[0]._id;
  
  // const products=useSelector(store=>store.products)
  // console.log(products)

  let headers;
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  //add to cart
  const addToCart = async () => {
    
    
    try {
      const cartResponse = await axios.post(ADD_TO_CART_API,
        {productId:prodId,userId:userid},
        {headers});
        
        
        dispatch(cacheCartProducts(product))
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className="grid grid-cols-2 gap-5 w-[70%] m-[10%] overflow-x-hidden shadow-2xl">
    //   <div className="grid grid-col-1 gap-1 ">
    //     <img className="px-[20%] " alt={product[0]._id} src={product[0].image}/>
       
    //   </div>

    //   <div className="grid grid-col-1 gap-1 p-[5%] bg-white border border-black">
    //     <div className="flex flex-col">
    //       <p className="text-2xl  border p-0 uppercase ">
    //         {product[0].brandName}
    //       </p>
    //       <p className="text-blue-700 mt-[3%]">{product[0].subCategory}</p>
    //       <div className="mt-[3%] text-xl">{product[0].productName}</div>
          
    //       <p className="mt-[3%] text-xl text-green-600">
    //         $ {product[0].price}
    //       </p>
    //       <p className="mt-[3%]">Stock:{`Stock Out`}</p>
    //       <span className=" h-[4%] w-[40%] flex mt-[3%] rounded-md">
    //         <button  className="bg-slate-400  h-full w-[30%] shadow-2xl">
    //           -
    //         </button>
    //         <div className="w-[40%] text-center border-none mt-[3%]">0</div>
    //         <button className="bg-slate-400  h-full w-[30%] shadow-2xl">
    //           +
    //         </button>
          
           
    //       </span>

         
    //     </div>

    //     <div className=" flex  justify-center mt-[-40%]">
    //     <button onClick={addToCart} className="h-[15%] w-[30%] bg-slate-600 me-1 rounded-lg text-white font-bold">ADD TO CART</button>
    //     <button className="h-[15%] w-[30%] bg-orange-600 rounded-lg text-white font-bold ">ADD TO WISHLIST</button>
    //     </div>
       
    //   </div>
      
    // </div>j
    <div className="flex w-1/2  h-[700px] ms-[25%] mt-[15%]  mb-[20%] shadow-2xl">
      <div className="w-1/2 flex justify-end py-[6%]">
        <img className="shadow-2xl" width={400} src={product[0].image}/>
      </div>

      <div className="bordrer border-black p-[6%] flex flex-col justify-evenly">
        

        <div><h1 className="text-3xl uppercase font-bold max-w-[600px]">{product[0].productName}</h1></div>
        <div><p>{product[0].description}</p></div>
        <div><h1 className="text-xl">PRICE : <span className="text-green-600 text-3xl">${product[0].price}</span></h1></div>

        <div className=" flex ">
       <button onClick={addToCart} className="w-full h-[50px] bg-orange-600 me-1 rounded-lg text-white font-bold">ADD TO CART</button>
       </div>
      </div>
        <div>
      

      
      </div>

    </div>
  );
};

export default ProductPage;
