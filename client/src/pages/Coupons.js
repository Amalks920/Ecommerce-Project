import React, { useEffect,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCoupon } from '../features/coupon/couponSlice'
import { Button } from '@material-tailwind/react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'

const Coupons = () => {
    let dispatch=useDispatch()
    let navigate=useNavigate()

    useEffect(()=>{
        dispatch(getAllCoupon())
    },[])

    const coupons=useSelector(store=>store.coupon)

    const handleSubmit=(couponcode)=>{
       const findCoupon=coupons.coupons.filter((discount)=>{
        return discount.name===couponcode
       })
        if(findCoupon){
        navigate('/order',{state:findCoupon})
        }
        
    }

  return (
    <div>
    <div className='flex justify-center mt-[15%] overflow-x-hidden'>
        <div className='border border-black w-[1050px] h-fit shadow-2xl p-6 flex flex-wrap'>

    {
        coupons.coupons.map((el)=>{

       
            return <div className='w-fit  h-fit p-7 m-4 '>
    
<ul className="grid w-full gap-1 md:grid-cols-1 ">
    <li>
        <input type="checkbox" id="react-option" value="" className="hidden peer" required=""/>
        <label htmlFor="react-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div className="block">
                <h1 className="w-full text-lg font-semibold"><span>Coupon Code : </span>{el?.name}</h1>
                <div className="w-full text-sm"><span>Expiry : </span><span>{el?.expiry}</span></div>
                <div className="w-full text-sm"><span>Discount : </span><span>{el?.discount}</span></div>

            </div>
        </label>
    </li>
    
   
</ul>
    
                   </div>
             })
    }
        </div>
        
    </div>
    <h1 className='text-center mt-[5%] text-2xl font-bold'>OR</h1>

    <Formik
    initialValues={{couponcode:''}}
    validate={(values)=>{
        const errors={};
        if(!values.couponcode){
            errors.couponcode="Required"
        }else if(/[a-z]+$/.test(values.couponcode)){
            errors.couponcode="Invalid Coupon code"
        }
        return errors
    }}
    onSubmit={(values,{setSubmitting})=>{

        handleSubmit(values.couponcode)
        setSubmitting(false)
        // setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));

        //     setSubmitting(false);
        //   }, 400);
    }}
    >
        {({ isSubmitting }) => (
       <Form>
    <div className=' h-fit  flex justify-center p-5 mt-[5%] mb-[5%]'>
        <div className='w-1/4 shadow-2xl flex flex-col text-center items-center p-10'>
           <div className='mb-8 text-2xl font-bold'><label>Enter Coupon Code</label></div> 
           <div className='mb-5  w-full'> <Field name="couponcode" type="text" className='h-[40px] w-full' placeholder='Enter Coupon Code'/></div>
           <ErrorMessage className='text-red-400' name="couponcode" component="div" />
            <Button type='submit' className='w-[70%]'>submit code</Button>
        </div>
    </div>
    </Form> 
        )}
    </Formik>
    </div>
  )
}

export default Coupons





