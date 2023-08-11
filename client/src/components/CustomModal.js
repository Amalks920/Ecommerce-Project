import { set } from "lodash";
import React, { useEffect, useState } from "react";

const CustomModal = (props) => {
  let { open, hideModal, performAction, title } = props;
  
 

  return (
        
    <div className={`fixed inset-0 ${open ? 'flex' : 'hidden'} items-center justify-center z-50 border`}>
      
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="bg-white rounded-lg w-96 p-6 z-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
          onClick={()=>{hideModal()}}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="text-gray-700">{title}</p>
        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
            onClick={()=>{hideModal()}}
          >
            Ok
          </button>
          <button
            className="ml-2 px-4 py-2 text-gray-600 border rounded hover:text-gray-800 hover:border-gray-800 focus:outline-none"
           
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
