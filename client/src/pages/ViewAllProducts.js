import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const ViewAllProducts = () => {
const products=useSelector(store=>store.products)


//state variables
const [selectedCategories,setSelectedCategories]=useState([]);
console.log(selectedCategories)


const handleCategoryChange = (category) => {
  if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
  } else {
      setSelectedCategories([...selectedCategories, category]);
  }
};

const filteredProducts=products.products.products
.filter((el=>selectedCategories.includes(el.category.category)))

console.log(filteredProducts)

  return (
    <div className='flex mt-[5.5%]'>

        <div className='w-1/4 border border-black text-center p-[5%]'>
          <ul  className='text-left'>
            <li className=' text-2xl p-1'>Category</li>
            <li className='p-1'><input  type='checkbox'
             checked={selectedCategories.includes("Men")}
             onChange={()=>{handleCategoryChange("Men")}}
            /><span>Men</span></li>
            <li className='p-1'><input type='checkbox'
            checked={selectedCategories.includes('Women')}
            onChange={()=>{handleCategoryChange("Women")}}
            /><span>Women</span></li>
            <li className='p-1'><input type='checkbox'
            checked={selectedCategories.includes('Kids')}
            onChange={()=>{handleCategoryChange("Kids")}}
            /><span>Kids</span></li>
          </ul>

          <ul className='text-left mt-[35%]'>
            <li className=' text-2xl p-1'>Size</li>
            <li className='p-1'><input type='checkbox'/><span>xl</span></li>
            <li className='p-1'><input type='checkbox'/><span>2xl</span></li>
            <li className='p-1'><input type='checkbox'/><span>xxl</span></li>
          </ul>

          <ul className='text-left mt-[35%]'>
            <li className=' text-2xl p-1'>Brand</li>
            <li className='p-1'><input type='checkbox'/><span>Men</span></li>
            <li className='p-1'><input type='checkbox'/><span>Women</span></li>
            <li className='p-1'><input type='checkbox'/><span>Kids</span></li>
          </ul>
         
          
        </div>

    <div className='h-screen flex flex-wrap mt-[5%]'>

        {
            filteredProducts.map((el)=>{

            
           return  <ProductCard products={el} />
        })
        }
        
    </div>
    </div>
  )
}

export default ViewAllProducts