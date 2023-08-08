import React, { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
import store from "../utils/store";
import axios from "../api/axios";
import { cacheCartProducts, pushCartProducts } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ImageZoom from "react-image-zooom";

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
    return store.products.products;
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
        
        console.log(cartResponse)
        dispatch(pushCartProducts(product))
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
  
    <div className="flex w-1/2  h-[700px] ms-[25%] mt-[15%]  mb-[20%] shadow-2xl">
      <div className="w-1/2 flex justify-end py-[6%]">
        <ImageZoom src={product[0].image}/>
        
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
