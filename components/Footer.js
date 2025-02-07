import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex justify-center bg-black'>
    <div className='flex flex-col w-[80vw] bg-black'>
        <div className='flex justify-between items-center mb-11 max-sm:flex-col max-sm:gap-5'>
            <div className='flex items-center gap-4'>
                <Image src='/acm-logo.svg' width={70} height={70} alt='acm-logo'></Image>
                <div className='font-[roboto] text-4xl'>hackAbit</div>
            </div>
            <div className='flex gap-7 items-center'>
                <Link href={'https://www.facebook.com/groups/acmbitm/'} target='_blank'><Image src='/facebook.svg' width={30} height={30} alt='acm-logo' className='hover:scale-110'></Image></Link>
                <Link href={'https://www.instagram.com/acmbitm/'} target='_blank'><Image src='/instagram.svg' width={30} height={30} alt='acm-logo' className='hover:scale-110'></Image></Link>
                <Link href={'https://www.linkedin.com/company/acmbitm/'} target='_blank'><Image src='/linkedin.svg' width={30} height={30} alt='acm-logo' className='hover:scale-110'></Image></Link>
            </div>
        </div>
        <div className='text-2xl px-28 mb-11 text-center max-lg:text-lg'>JOIN US IN PUSHING BOUNDARIES AND UNLOCKING POTENTIAL AT <span className='font-[roboto] text-3xl max-sm:text-xl'> hackAbit</span>. TOGETHER, WE INNOVATE, INSPIRE, AND IMPACT!</div>
        <div className='bg-white w-full h-[2px] rounded-full opacity-25'></div>
        <div className='text-center font-[roboto] text-2xl my-4'>&copy; 1947 Association for Computing Machinery</div>
    </div>
    </div>
  )
}

export default Footer