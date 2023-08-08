import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSidebar = () => {
  const [isAccountOverViewOpened, setisAccountViewOpened] = useState(false);
  const [isBuyingOpened, setIsBuyingOpened] = useState(false);
  return (
    <div className="h-screen  flex w-[350px]  mt-[110px] rounded-2xl fixed shadow-2xl bg-slate-800">
      <ul className="w-full text-white mt-[15%] ">
        <li className="ps-16 p-5 hover:border-r-8 hover:border-r-violet-900  hover:text-violet-900 cursor-pointer font-bold text-2xl">
          <h1
            onClick={() => {
              isAccountOverViewOpened
                ? setisAccountViewOpened(false)
                : setisAccountViewOpened(true);
            }}>
            Account
          </h1>
        </li>

        {isAccountOverViewOpened && (
          <>
            <li className="ps-16 border-r-8 border-r-violet-900 p-5  text-violet-900 text-bold text-xl cursor-pointer font-bold">
              <h1>View Profile</h1>
            </li>
            <li className="ps-16 border-r-8 border-r-violet-900 p-5  text-violet-900 text-bold text-xl cursor-pointer font-bold">
              <Link to={"/user-dashboard/add-address"}>Add Address</Link>
            </li>
            <li className="ps-16 border-r-8 border-r-violet-900 p-5  text-violet-900 text-bold text-xl cursor-pointer font-bold">
              <Link to={"/user-dashboard/address"}>View Address</Link>
            </li>
          </>
        )}

        <li className="ps-16  hover:border-r-8 hover:border-r-violet-900 p-5 hover:text-violet-900 cursor-pointer font-bold text-2xl">
          <Link
            onClick={() => {
              isBuyingOpened
                ? setIsBuyingOpened(false)
                : setIsBuyingOpened(true);
            }}>
            Buying
          </Link>
        </li>
        {isBuyingOpened && (
          <li className="ps-16 border-r-8 border-r-violet-900 p-5  text-violet-900 text-bold text-xl cursor-pointer font-bold">
            <Link to={"/user-dashboard/view-orders-user"}>My Purchases</Link>
          </li>
        )}

      

      </ul>
    </div>
  );
};

export default UserSidebar;
