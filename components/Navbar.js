import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full h-[73px] bg-gray-800 flex gap-4 items-center px-20'>
        <Image src='/acm-logo.svg' width={50} height={50} alt='acm-logo'></Image>
        <div className='text-xl'>PRESENTS</div>
    </div>
  )
}

export default Navbar