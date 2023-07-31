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
    <div className="grid grid-cols-2 gap-5 h-screen m-[10%] overflow-x-hidden shadow-2xl">
      <div className="grid grid-col-1 gap-1  "></div>

      <div className="grid grid-col-1 gap-1 p-[5%] bg-white">
        <div className="flex flex-col">
          <p className="text-3xl font-bold border p-0 ">
            {product[0].productName}
          </p>
          <p className="text-blue-700 mt-[3%]">{product[0].subCategory}</p>
          <div className="mt-[3%]">hel</div>
          <p className="mt-[3%]">{product[0].description}</p>
          <p className="mt-[3%] text-2xl text-green-600">
            $ {product[0].price}
          </p>
          <p className="mt-[3%]">Stock:{`Stock Out`}</p>
          <span className=" h-[7%] w-[40%] flex mt-[3%] rounded-md">
            <button className="bg-slate-400  h-full w-[30%] shadow-2xl">
              -
            </button>
            <div className="w-[40%] text-center border-none mt-[3%]">0</div>
            <button className="bg-slate-400  h-full w-[30%] shadow-2xl">
              +
            </button>

            <button
              onClick={addToCart}
              className="ms-[10%] bg-blue-400 rounded-2xl text-white w-full font-bold">
              ADD TO CART
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
