import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useSelector } from "react-redux";

const ViewAddress = () => {
    let token = useSelector(store => store.user.token);
    const id=useSelector(store=> store.user.id);
    const [addressData,setAddressData]=useState()
    const GET_ADDRESS = `/user/get-address/${id}`;
    console.log(addressData)

  let headers;
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  useEffect(() => {
    
    getAddress()
  }, []);

  const getAddress = async () => {
    try {
      const response=await axios.get(GET_ADDRESS, { headers });
      console.log(response.data.address[0]?.firstname)
      setAddressData(response.data.address[0])
    } catch (error) {
        console.log(error)
    }
  };
 

  return (
    <div className="ms-[15%] h-fit w-[50%] mt-56">
      <div className="grid grid-cols-1 gap-1">
        <div className="border h-[100px] bg-slate-300 text-center text-2xl pt-10">
          MANAGE ADDRESS
        </div>

        <div className="grid grid-cols-1 gap-1 border">
          <div className="bg-slate-100 h-[300px] mt-7 shadow-2xl p-10">
            <div className="flex flex-col justify-between">
                <h1 className="text-2xl font-bold">{addressData?.firstname+` ${addressData?.lastname }`}</h1>
                <h1 className="text-2xl">{addressData?.address}</h1>
                <h1 className="text-2xl">{addressData?.city}</h1>
                
                <h1 className="text-2xl">{addressData?.state}</h1>
                <h1 className="text-2xl">{addressData?.pincode}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAddress;
