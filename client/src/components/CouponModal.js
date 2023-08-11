import React from 'react'
import CustomInput from '../components/CustomInput'

const CouponModal = (props) => {
  let { open, hideModal, performAction, title } = props;



  

  return (
    <div className={`w-full h-full absolute ${open ? 'flex' : 'hidden'}`}>
    <div className={` w-full   h-screen bg-black opacity-60 rounded-xl  absolute`}></div>
      <div className='bg-white  z-50 w-[25%] h-[50%] ms-[35%] mt-[15%] shadow-2xl p-5'>
        <div className=' w-full h-full p-[2%] mt-[5%]'>
          <h1 className='text-center text-3xl text-orange-600 font-bold'>Select Coupon</h1>
          {/* <div className='border mt-[5%]'>
         <CustomInput type={'text'} i_class={`w-[90%] h-[35px] ms-[5%]`}/>
         </div>
        <button className='bg-black text-white ms-[30%] mt-[4%] h-[10%] w-[40%] text-sm' onClick={()=>{
        hideModal()
      }}>Enter Coupon Code</button> */}
        </div>

      
    </div>
    </div>
  )
}

export default CouponModal