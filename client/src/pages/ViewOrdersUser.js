import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useSelector } from "react-redux";
import { GET_A_ORDER } from "../utils/constants";
import { setProducts } from "../utils/productSlice";
import { map } from "lodash";

const ViewOrdersUser = () => {
  const userid = useSelector((store) => store.user.id);
  const products = useSelector((store) => store.products);
  const [productData, setProductData] = useState([]);
  const [orderId,setOrderId]=useState()
  const [data, setData] = useState([]);
  console.log(userid);
  console.log(products);
  console.log("products data");
 let p=productData.map(el=>el.items)
 console.log(p)

  //    const p1=products.products.map(el=>el)
  //    const p2=productData.map(el=>el.productId)

  //    const productsToDisplay=p1.filter((element)=>p2.includes(element._id))
  //    console.log('p')
  //    console.log(productsToDisplay)
  

  

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const response = await axios.get(`${GET_A_ORDER}/${userid}`);
      console.log("respponsef");
      console.log(response.data.response);
      setProductData(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelOrder=async () =>{
  
  }

  return (
    <div className="w-[80%] ms-[17%] h-fit border border-black pt-[10%] p-[5%]">
      <div className="p-[3%]  w-full h-fit shadow-2xl">
        <div className=" mb-[6%] flex flex-col">
          <h1 className="text-3xl font-bold">My Purchases</h1>
          <div className="mt-[3%] flex border h-[100px]"></div>
        </div>

        <div className="border mb-[3%] h-fit">
          {productData
            .map((el) => {
               
                
                
              return el.items;
            })
            .map((el) => el.map((el) =>{
               
                return  el.productId 
            }
                 ))
            .map((el) => {
              return (
                <div className="h-1/2 flex flex-col    p-[2%] shadow-2xl">
                    
                  {el.map((el2) => {
                     
                    return <div className=" p-[2%] h-[200px] flex">
                    <img src={el2.image} width={100} />
                    <h1 className="text-2xl uppercase p-5 font-thin">{el2.productName}</h1>
                    </div>
                  })}
                  <div className="h-[100px]  flex justify-between  pt-[2%] p-[4%]">
                    <button
                    onClick={()=>{cancelOrder()}}
                     className="hover:bg-slate-700 hover:text-white border h-[50px] border-slate-700 p-[1%]">CANCEL ORDER</button>
                   
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
