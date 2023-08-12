import { React, useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createCoupon,deleteACoupon,getACoupon,getAllCoupon,resetState,updateACoupon } from "../../features/coupon/couponSlice";
import 'react-toastify/dist/ReactToastify.css';


let schema = yup.object().shape({
    name: yup.string().required("Coupon Name is Required"),
    expiry: yup.date().required("Expiry Date is Required"),
    discount: yup.number().required("Discount Percentage is Required"),
  });

  


  const AddCoupon=()=>{
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getCouponId = location.pathname.split("/")[3];
    const newCoupon = useSelector((state) => state.coupon);
    
    const { 
        isSuccess,
        isError,
        isLoading,
        createdCoupon,
        couponName,
        couponDiscount,
        couponExpiry,
        updatedCoupon,
    }=newCoupon

    console.log(isSuccess)
    console.log('isSuccesss');

    
    useEffect(() => {
        if (getCouponId !== undefined) {
          dispatch(getACoupon(getCouponId));
        } else {
          dispatch(resetState());
        }
      }, [getCouponId]);
    
      useEffect(() => {
        if (isSuccess && createdCoupon) {
          console.log('hi')
          toast.success("Coupon Added Successfullly!");
        }
        if (isSuccess && updatedCoupon) {
          toast.success("Coupon Updated Successfullly!");
          navigate("/admin/coupon-list");
        }
        if (isError && couponName && couponDiscount && couponExpiry) {
          toast.error("Something Went Wrong!");
        }
      }, [isSuccess, isError, isLoading]);


    const changeDateFormat = (date) => {
        const newDate = new Date(date).toLocaleDateString();
        const [month, day, year] = newDate.split("/");
        return [year, month, day].join("-");
      };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          name: couponName || "",
          expiry: changeDateFormat(couponExpiry) || "",
          discount: couponDiscount || "",
        },
        validationSchema: schema,
        onSubmit:(values) => {
          if (getCouponId !== undefined) {
            const data = { id: getCouponId, couponData: values };
            dispatch(updateACoupon(data));
            dispatch(resetState());
          } else {
            console.log('dispatch create coupon')
            dispatch(createCoupon(values));
            formik.resetForm();
            setTimeout(() => {
              dispatch(resetState);
            }, 300);
          }
        },
      });




    return (
    //     <div className=" ms-[400px] mt-[350px] border border-black w-1/2 h-screen">
    //     <h3 className="mb-4 title text-center text-2xl p-4">
    //       {getCouponId !== undefined ? "Edit" : "Add"} Coupon
    //     </h3>
    //     <div className="flex flex-row justify-center">
    //       <form action="" className="w-full"  onSubmit={formik.handleSubmit}>
    //         <CustomInput
    //           type="text"
    //           name="name"
    //           i_class="w-1/2"
    //           onChng={formik.handleChange("name")}
    //           onBlr={formik.handleBlur("name")}
    //           val={formik.values.name}
    //           label="Enter Coupon Name"
    //           id="name"
    //         />

    //         <div className="error">
    //           {formik.touched.name && formik.errors.name}
    //         </div>
    //         <CustomInput
    //           type="date"
    //           name="expiry"
    //           onChng={formik.handleChange("expiry")}
    //           onBlr={formik.handleBlur("expiry")}
    //           val={formik.values.expiry}
    //           label="Enter Expiry Data"
    //           id="date"
    //         />

    //         <div className="error">
    //           {formik.touched.expiry && formik.errors.expiry}
    //         </div>

    //         <CustomInput
    //           type="number"
    //           name="discount"
    //           onChng={formik.handleChange("discount")}
    //           onBlr={formik.handleBlur("discount")}
    //           val={formik.values.discount}
    //           label="Enter Discount"
    //           id="discount"
    //         />
    //         <div className="error">
    //           {formik.touched.discount && formik.errors.discount}
    //         </div>
    //         <button
    //           className="bg-green border border-green-800 rounded-3 my-5"
    //           type="submit"
    //         >
    //           {getCouponId !== undefined ? "Edit" : "Add"} Coupon
    //         </button>
    //       </form>
    //     </div>
    //   </div>
        <form action="" onSubmit={formik.handleSubmit} className="relative left-[20%] flex flex-col pt-[20%]  w-full items-center justify-center h-fit pb-[10%]">
                <h1 className="relative text-3xl right-[16%] bottom-6 font-bold text-slate-600">
                {getCouponId !== undefined ? "Edit" : "Add"} Coupon
                </h1>
            <div className="w-[70%]  h-fit bg-white p-3 ">
                <CustomInput
                type="text"
                name="name"
                 onChng={formik.handleChange("name")}
                 onBlr={formik.handleBlur("name")}
                 val={formik.values.name}
                 label="Enter Coupon Name"
                 i_class={'w-1/2 h-[50px] text-slate-600 bg-blue-100'}/>
                  <ToastContainer />
                 <div className="error text-red-600">
                 
            {formik.touched.name && formik.errors.name}
          </div>
            </div>
            

            <div className="w-[70%]  h-fit bg-white p-3">
                <CustomInput
                type="date"
                name="expiry"
                onChng={formik.handleChange("expiry")}
                onBlr={formik.handleBlur("expiry")}
                val={formik.values.expiry}
                label="Enter Expiry Data"
                id="date"
                 i_class={'w-1/2 h-[50px] text-slate-600 bg-blue-100'}/>

<           div className="error text-red-600">
            {formik.touched.expiry && formik.errors.expiry}
          </div>
            </div>

            <div className="w-[70%]  h-fit bg-white p-3">
                <CustomInput
                 type="number"
                 name="discount"
                 onChng={formik.handleChange("discount")}
                 onBlr={formik.handleBlur("discount")}
                 val={formik.values.discount}
                 label="Enter Discount"
                 id="discount"
                 i_class={'w-1/2 h-[50px] text-slate-600 bg-blue-100'}/>
                  <div className="error text-red-600">
            {formik.touched.discount && formik.errors.discount}
          </div>
            </div>
            <button type="submit" className=" relative border rounded-xl w-[300px] p-3 bg-black text-white right-[300px] top-4">
            {getCouponId !== undefined ? "Edit" : "Add"} Coupon
            </button>


            
        </form>
    );
  
  }

  export default AddCoupon