
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
 
export function CarouselTransition() {

const slides=[

  {
    url:"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=8"

  },

  // {
  //   url:"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fi"

  // },

  // {
  //   url:"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"

  // },

  // {
  //   url:"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"

  // }
]
    
const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  setCurrentIndex(newIndex);
};

const nextSlide = () => {
  const isLastSlide = currentIndex === slides.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};

const goToSlide = (slideIndex) => {
  setCurrentIndex(slideIndex);
};


return (
  <div className='mt-[3%] w-screen h-screen m-auto   group'>
  <div
    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
  ></div>
  {/* Left Arrow */}
  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlide} size={30} />
  </div>
  {/* Right Arrow */}
  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactRight onClick={nextSlide} size={30} />
  </div>
  <div className='flex top-4 justify-center py-2'>
    {slides.map((slide, slideIndex) => (
      <div
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
        className='text-2xl cursor-pointer'
      >
        <RxDotFilled />
      </div>
    ))}
  </div>
</div>
)
  
}




export default CarouselTransition;