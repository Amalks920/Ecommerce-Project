import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../api/axios";
import { setProducts } from "../../utils/productSlice";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const URL = `/admin/get-all-products`;


const ViewProduct = () => {
  const navigate=useNavigate()

  const [data,setData]=useState([])
  const token = useSelector((store) => store.user.token);
  const dispatch = useDispatch();
 
console.log(data)
  let headers;
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }


  //api call for getting all products

  useEffect(() => {
    axios
      .get(URL, { headers })
      .then((res) => {
        setData(res.data.products);
        console.log('reessss');
        console.log(res)
        dispatch(setProducts(res.data.products));
      })
      .catch((err) => console.log(err.message));
  }, []);

// delete product
const deleteProduct=async(id)=>{
  const DELETE_URL=`/admin/delete-a-product/${id}`
  try {
    const response=await axios.put(DELETE_URL,{id},{headers})
    console.log(response)
   navigate('/admin/view-products')
  } catch (error) {
    console.log(error)
  }
}

  return (
    <>
      <div className="flex justify-left ps-[4%] font-bold text-lg  items-center h-[15%] shadow-xl">
        <h1 className="text-2xl">VIEW PRODUCT</h1>
      </div>

      <div className="w-[60%] ms-[20%] mt-[10%]">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium bg-black text-white">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Product Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Stock Quantity
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Edit Product
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Delete Product
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {

                    data.map((el)=>{
                           
                   
                   return  <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{el.productName}</td>
                      <td className="whitespace-nowrap px-6 py-4">{el.StockQuantity}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button className="bg-blue-600 text-white w-[50%] p-[4%] font-bold">
                        <Link to={`/admin/edit-product/${el._id}`}>Edit</Link> 
                        </button>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">

                        
                        <button onClick={()=>{deleteProduct(el._id)}} className="bg-red-600 text-white w-[50%] p-[4%] font-bold">                        
                          Delete
                        </button>
                      </td>
                    </tr>
                     })
                     }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
