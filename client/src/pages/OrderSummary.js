import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CouponModal from "../components/CouponModal";
import { set } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Payment, createPayment } from "../utils/utilFunctions";

//material ui

import { Radio } from "@material-tailwind/react";
import { createOrder } from "../features/order/orderSlice";

const OrderSummary = ({ discountCoupon }) => {
  const cart = useSelector((store) => store.cart);
  const user=useSelector((store)=> store.auth)
  const navigate=useNavigate()
  const [openModal, setOpenModal] = useState(false);
  const [paymentMethod,setPaymentMethod]=useState()
  const [shippingMethod,setShippingMethod]=useState()
  const dispatch=useDispatch()

  

  const totalAmount = cart?.cart?.cart
    ?.map((el) => el.productId.price * el.count)
    .reduce((total, element) => total + element, 0);



  const handleModal = (value) => {
    setOpenModal(value);
  };



  const paymentHandler = async (totalprice) => {
    console.log(totalprice)
    const paymentOrder = await createPayment(totalprice);
    paymentOrder?.data?.response?.id
      ? await Payment(paymentOrder?.data?.response?.id)
      : console.log("error occured");
  };

  const placeOrder=()=>{
    let data={
      user:user.user.id
    }
      dispatch(createOrder(data))
  }

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

 

  const handleButtonClick = () => {
    paymentMethod=="prepaid"?paymentHandler(discountCoupon?Number(totalAmount)-Number(discountCoupon[0].discount):totalAmount):placeOrder()
  };


  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto shadow-2xl mt-[1%] overflow-x-hidden">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
          Order #13432
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">
          21st Mart 2021 at 10:34 PM
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              Customer’s Cart
            </p>

            {cart?.cart?.cart.map((el) => {
              return (
                <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                  <div className="pb-4 md:pb-8 w-full md:w-40">
                    <img
                      className="w-full hidden md:block"
                      src={el?.productId?.image}
                      alt="dress"
                    />
                    <img
                      className="w-full md:hidden"
                      src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                      alt="dress"
                    />
                  </div>
                  <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                      <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                        Premium Quaility Dress
                      </h3>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-300"> </span>{" "}
                          {el?.productId?.productName}
                        </p>
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-300"></span>{" "}
                          {el?.productId?.description}
                        </p>
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-300"></span>{" "}
                          {el?.productId?.size}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="text-base xl:text-lg leading-6">
                        {el?.productId?.price} RS{" "}
                        <span className="text-red-300 line-through">
                          {" "}
                          $45.00
                        </span>
                      </p>
                      <p className="text-base xl:text-lg leading-6 text-gray-800">
                        {el?.count}
                      </p>
                      <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                        {el?.count * el?.productId?.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Summary
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">
                    {discountCoupon
                      ? Number(totalAmount) -
                        Number(discountCoupon[0]?.discount)
                      : totalAmount}{" "}
                    RS
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">
                    Discount{" "}
                    <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                      STUDENT
                    </span>
                  </p>
                  <p className="text-base leading-4 text-gray-600">0.00</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">0.00</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  {discountCoupon
                    ? Number(totalAmount) - Number(discountCoupon[0]?.discount)
                    : totalAmount}{" "}
                  RS
                </p>
              </div>

              {!discountCoupon ? (
                <Link to={"/coupons"}>
                  <p className={`text-center text-orange-800`}>Apply Coupon?</p>
                </Link>
              ) : (
                <Link>
                  <p className={`text-center text-red-400`}>
                    Cancel Applied Coupon?
                  </p>
                </Link>
              )}
            </div>
            <div className="flex flex-col justify-center px-1 py-1 md:p-6 xl:p-2 w-full bg-gray-50 space-y-6   ">
              <div className="w-full flex justify-center items-center">
                <div className="flex w-max gap-4">
                <div className="me-5">
                  <Radio 
                  type="radio"
                  id="prepaid"
                  name="paymentMethod"
                  value="prepaid"
                  checked={paymentMethod === 'prepaid'}
                  onChange={handlePaymentMethodChange}
                   defaultChecked />
                  <label htmlFor="prepaid" className="pb-2">prepaid</label> 
                  </div>

                  <div>
                  <Radio
                   type="radio"
                   id="cod"
                   name="paymentMethod"
                   value="cod"
                   checked={paymentMethod === 'cod'}
                   onChange={handlePaymentMethodChange} 
                   />
                  <label htmlFor="prepaid" className="mt-3">COD</label> 
                  </div>
                  
                </div>
                <div>
               
                </div>

               

              </div>

              <button
                  onClick={() => {
                   handleButtonClick()
                  }}
                  className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                  Proceed To Payment
                </button>
            </div>
          </div>

        </div>
        <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
          <h3 className="text-xl font-semibold leading-5 text-gray-800">
            Customer
          </h3>
          <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
            <div className="flex flex-col justify-start items-start flex-shrink-0">
              <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                <img
                  src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                  alt="avatar"
                />
                <div className=" flex justify-start items-start flex-col space-y-2">
                  <p className="text-base font-semibold leading-4 text-left text-gray-800">
                    David Kent
                  </p>
                  <p className="text-sm leading-5 text-gray-600">
                    10 Previous Orders
                  </p>
                </div>
              </div>

              <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7L12 13L21 7"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="cursor-pointer text-sm leading-5 text-gray-800">
                  david89@gmail.com
                </p>
              </div>
            </div>
            <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
              <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                  <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                    Shipping Address
                  </p>
                  <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                    180 North King Street, Northhampton MA 1060
                  </p>
                </div>
                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                  <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                    Billing Address
                  </p>
                  <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                    180 North King Street, Northhampton MA 1060
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                <button className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">
                  Edit Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
