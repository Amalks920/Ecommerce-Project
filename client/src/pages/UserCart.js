import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { get } from "react-hook-form";

const GET_CART_DETAILS = `/user/get-cart-details`;
const INCREASE_CART_COUNT = "/user/increase-cart-count";
const DECREASE_CART_COUNT = "/user/decrease-cart-count";
const DELETE_CART_PRODUCT = "/user/delete-cart-product";

const UserCart = () => {
  const dispatch = useDispatch();

  const token = useSelector((store) => store.user.token);
  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.user);
  const [cartProductData, setCartProductData] = useState([]);
  const [cartCount, setCartCount] = useState();
  console.log(user.id);
  console.log(token);

  let headers;
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  //update cart count

  useEffect(() => {
    getCartDetails();
  }, [cartCount]);

  const getCartDetails = async () => {
    try {
      const result = await axios.post(
        GET_CART_DETAILS,
        { userid: user.id },
        { headers }
      );
      setCartProductData(result.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  

  //decrease count of product in cart
  const decreaseCount = async (prodId) => {
    try {
      console.log(prodId);
      const response = await axios.post(
        DECREASE_CART_COUNT,
        { userId: user.id, productId: prodId },
        { headers }
      );
      setCartCount(response.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  //increase count of products in cart
  const increaseCount = async (prodId) => {
    try {
      console.log(prodId);
      const response = await axios.post(
        INCREASE_CART_COUNT,
        { userId: user.id, productId: prodId },
        { headers }
      );
      setCartCount(response.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (prodId) => {
    try {
      const deleteResponse = await axios.post(
        DELETE_CART_PRODUCT,
        { userId: user.id, productId: prodId },
        { headers }
      );
        if(deleteResponse.data.isDeleted){
            setCartCount(null)
        }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" border border-b-green-800 h-screen w-screen flex items-center justify-center">
      <div className=" bg-black min-w-[60%] flex flex-col shadow-2xl p-[2%] w-[2%] rounded-2xl">
        <h1 className="text-center font-bold text-2xl text-white">
          CART ITEMS
        </h1>

        {
          cartProductData.map((el) => {
            const { productName, image, _id,stockQuantity } = el.productId;
            //    return el.map((el)=>{
            console.log(stockQuantity);

            return (
              <div className="shadow-2xl w-full h-32 my-[2%] flex bg-white rounded-2xl">
                <div className="w-1/5 ">
                  <img
                    src={image}
                    width={50}
                    height={50}
                    className="rounded-full m-[15%]"
                  />
                </div>

                <div className="w-1/5 flex flex-col justify-center items-center">
                  <h1>{productName}</h1>
                </div>

                <div className="w-1/5 flex justify-center items-center">
                  <span className=" h-[30%] w-[70%] flex mt-[3%] rounded-md">
                    <button
                      onClick={() => {
                        if(cartCount===1){
                            deleteProduct(_id)
                        }else{
                            decreaseCount(_id);
                        } 
                        
                      }}
                      className="bg-slate-400  h-full w-[30%] rounded-md shadow-2xl">
                      -
                    </button>
                    <div className="w-[40%] text-center border-none mt-[3%]">
                      {el.count}
                    </div>
                    <button
                   
                      onClick={() => {
                        if(stockQuantity<cartCount){
                            deleteProduct(_id)
                        }else{
                         increaseCount(_id);
                        }
                        
                      }}
                      className="bg-slate-400  h-full w-[30%] rounded-md shadow-2xl">
                      +
                    </button>
                  </span>
                </div>

                <div className="w-1/5  flex justify-center items-center">
                  <h1></h1>
                </div>

                <div className="w-1/5  flex justify-center items-center cursor-pointer">

                <button onClick={()=>{deleteProduct(_id)}}>
                  <img
                    src="https://w7.pngwing.com/pngs/378/604/png-transparent-computer-icons-button-x-logo-web-button-symbol-thumbnail.png"
                    width={30}
                  />
                </button>

                </div>
              </div>
            );
          })

          // })
        }
      </div>
    </div>
  );
};

export default UserCart;
