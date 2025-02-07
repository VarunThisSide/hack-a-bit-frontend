import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
  return (
    <div className='flex flex-col w-[82vw] m-auto gap-5'>
        <div className='text-3xl font-bold opacity-80'>SPONSORED BY</div>
        <div className='bg-[#272d2e] flex gap-16 px-12 py-8 justify-around items-center max-xl:flex-col'>
            <Image src='/image_6.svg' width={300} height={300} alt='sponsor-company'></Image>
            <Image src='/image_5.svg' width={270} height={270} alt='sponsor-company'></Image>
            <Image src='/image_7.svg' width={100} height={100} alt='sponsor-company'></Image>
            <Image src='/image_8.svg' width={210} height={200} alt='sponsor-company'></Image>
        </div>
    </div>
  )
}

export default Sponsors