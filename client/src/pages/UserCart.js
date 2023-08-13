import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { get } from "react-hook-form";
import { Link } from "react-router-dom";
import { pushCartProducts } from "../utils/cartSlice";
import CouponModal from "../components/CouponModal";
import OrderSummaryCard from "../components/OrderSummaryCard";
import { getCart, increaseCartCount,decreaseCartCount,resetState,deleteCartProduct } from "../features/cart/cartSlice";


const DELETE_CART_PRODUCT = "/user/delete-cart-product";

const UserCart = () => {
  const dispatch = useDispatch();

  const cart=useSelector((store)=>store.cart )

  const isChanged = useSelector((store) => store.cart.isChanged);
 
  const auth = useSelector((store) => store.auth);
  const [cartProductData, setCartProductData] = useState([]);
  const [cartCount, setCartCount] = useState();
  const [modalOpen, setModalOpen] = useState(false);
console.log(cart,isChanged)
 
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  
console.log(auth?.user?.id)
  //update cart count
  useEffect(() => {
    dispatch(getCart({userid:auth?.user?.id}))
  },[isChanged]);





  

  //decrease count of product in cart
  const decreaseCount = async (prodId) => {
    let data={
      userId:auth?.user?.id,
      productId:prodId
    }
    
    dispatch(decreaseCartCount(data))
    // try {
    //   console.log(prodId);
    //   const response = await axios.post(
    //     DECREASE_CART_COUNT,
    //     { userId: user.id, productId: prodId },
    //     { headers }
    //   );
    //   setCartCount(response.data.count);
    // } catch (error) {
    //   console.log(error);
    // }
  };
console.log(cart)
  //increase count of products in cart
  const increaseCount = async (prodId) => {
    let data={
      userId:auth?.user?.id,
      productId:prodId
    }
    dispatch(increaseCartCount(data))
   
  };

  const deleteProduct = async (prodId) => {
    console.log('prododo ids');
    console.log(auth)
    let data={
      productId:prodId,
      userId:auth?.user?.id
    }

     dispatch(deleteCartProduct(data))
    // try {
    //   const deleteResponse = await axios.post(
    //     DELETE_CART_PRODUCT,
    //     { userId: user.id, productId: prodId },
    //     { headers }
    //   );
    //     if(deleteResponse.data.isDeleted){
    //         setCartCount(null)
    //     }
    // } catch (error) {
    //   console.log(error);
    // }
  };


  // find total amount

    const totalCount=cartProductData.reduce((total,count)=>{
      return total+Number(count.count)
    },0)

    const totalPrice=cartProductData.reduce((total,products)=>{
      return total+products.count*products.productId.price
    },0)

    

    
    
    {
      if(cart?.cart?.cart?.length===0) return <div className="h-screen flex items-center justify-center">
        <h1 className="text-3xl">Cart is Empty</h1>
        
        </div>
    }
  return (
   
    <div className=" border border-b-green-800 h-screen w-screen md:flex-row flex items-center justify-center">
      <div className=" bg-black min-w-[60%] flex flex-col shadow-2xl p-[2%] w-[2%] rounded-2xl">
        <h1 className="text-center font-bold text-2xl text-white">
          CART ITEMS
        </h1>

        {
          cart?.cart?.cart?.map((el) => {
            const { productName, image, _id,stockQuantity,price } = el.productId;
            console.log(el)
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

                <div className="w-1/5  flex flex-col justify-center items-center">
                  <h1 className="font-bold text-lg mb-4">PRICE</h1>
                  <h1>{price}</h1>
                </div>

                <div className="w-1/5  flex flex-col justify-center items-center">
                  <h1 className="font-bold text-lg mb-4">TOTAL PRICE</h1>
                  <h1>{price*el.count}</h1>
                  
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
      <CouponModal
                 open={modalOpen}
                 hideModal={handleCloseModal}
                  title={'Enter Coupon Code.'}/>

      <div className="w-1/4 ms-[5%] h-1/2  text-center ">
                 
        <OrderSummaryCard/>
        {/* <div><h1 className="text-4xl border-b p-14 border-b-black mb-5 font-bold">ORDER SUMMARY</h1></div>
        <div className="flex justify-between p-10">
          <h1 className="text-2xl">Total Price</h1>
          <h1 className="text-slate-700 text-4xl">₹<span className="text-green-700"> {totalPrice}</span></h1>
          
          </div>
          <h1>total Items {totalCount}</h1>
          <div className="mt-11 ">
          <Link
            onClick={()=>{
            handleOpenModal()
            }}
           className="text-orange-700 text-xl">Apply Coupon?</Link>
          </div> 


       <Link to={'/order'}> <button className="bg-slate-600 mt-8 p-4 w-[50%] text-2xl text-white">checkout</button></Link>
       */}

</div>  
      
    </div>
  );
};

export default UserCart;
