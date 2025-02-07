import React from 'react'
import Image from "next/image";

const Gallery = () => {
  return (
    <div className='flex flex-col items-center gap-2 mt-36 mb-96 max-lg:mb-52'>
        <div className='font-[roboto] text-5xl relative'><div className="glowing-effect-2"></div>hackAbit</div>
        <div className='font-bold text-6xl mb-11 text-center'>Last year's Gallery</div>
        <div className='flex gap-4'>
            <div className='bg-gray-600 w-[25vw] h-[25vw] rounded-3xl object-cover'></div>
            <div className='bg-gray-600 w-[25vw] h-[25vw] rounded-3xl object-cover'></div>
            <div className='bg-gray-600 w-[25vw] h-[25vw] rounded-3xl object-cover'></div>
        </div>
    </div>
  )

}


export default Gallery