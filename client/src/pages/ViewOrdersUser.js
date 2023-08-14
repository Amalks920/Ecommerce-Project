import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ORDER, GET_A_ORDER } from "../utils/constants";
import { setProducts } from "../utils/productSlice";
import { map } from "lodash";
import { getAOrder } from "../features/order/orderSlice";

const ViewOrdersUser = () => {
  const token = useSelector((store) => store.user.token);
  const userid = useSelector((store) => store.auth.user.id);
  const products = useSelector((store) => store.products);
  const orders=useSelector((store)=>store.order)

  const [productData, setProductData] = useState([]);
  const [data, setData] = useState([]);
  const [refreshGetOrder, setRefreshGetOrder] = useState(false);
  const dispatch=useDispatch()

  console.log(token);
  let headers;
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  console.log(productData)
  let p = productData
    .map((el) => {
      return el.items;
    })
    .map((el) =>
      el.map((el) => {
        return el.productId;
      })
    );




  console.log(p.map((el) => el._id));

  useEffect(() => {
    getOrders();
  }, [refreshGetOrder]);

  const getOrders = async () => {

    dispatch(getAOrder(userid))
   
    // try {
    //   const response = await axios.get(`${GET_A_ORDER}/${userid}`, { headers });
    //   console.log("respponsef");
    //   console.log(response.data.response);
    //   setProductData(response.data.response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const cancelOrder = async (indexOfOrder) => {
    console.log(productData[indexOfOrder]._id);
    try {
      const response = await axios.delete(
        `${DELETE_ORDER}/${productData[indexOfOrder]._id}`,
        { headers }
      );
      console.log(response);
      console.log(response.data.msg);
      if (response?.data?.msg)
        setRefreshGetOrder(refreshGetOrder ? false : true);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(productData)

  return (
    <div className="w-[80%] ms-[17%] h-fit border border-black pt-[10%] p-[5%]">
      <div className="p-[3%]  w-full h-fit ">
        <div className=" mb-[6%] flex flex-col">
          <h1 className="text-3xl font-bold">My Purchases</h1>
          <div className="mt-[3%] flex border h-[100px]"></div>
        </div>

        <div className=" mb-[3%] h-fit">
          {p.map((el) => {
            return (
              <div className="h-1/2 flex flex-col m-[5%]    p-[2%] shadow-2xl">
                {el.map((el2) => {
                  return (
                    <div className=" p-[2%] h-[200px] flex">
                      <img src={el2.image} width={100} />
                      <div className="p-5">
                      <h1 className="text-2xl uppercase  font-thin">
                        {el2.productName}
                      </h1>
                      <p className="mt-4"> {el2.description}</p>
                      </div>
                    </div>
                  );
                })}
                

                <div className="h-[100px]  flex justify-between  pt-[2%] p-[4%]">
                  <button
                    onClick={() => {
                      cancelOrder(p.indexOf(el));
                    }}
                    className="hover:bg-slate-700 hover:text-white border h-[50px] border-slate-700 p-[1%]">
                    CANCEL ORDER
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  
};

export default ViewOrdersUser;
