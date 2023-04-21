import React, { useState } from 'react'

import images from '../images'

const navs = ['home', 'pages', 'contact us', 'blog', 'landing']

export default function Navbar() {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='bg-black px-[20px] ss:px-[45px] lg:px-[120px] py-[32px] flex items-center justify-between'>

      <img className=' ss:w-[199px] w-[130px] ss:h-[57px] h-[34.5px]' src={images.gericht} alt="" />

      <div className="md:flex hidden justify-center items-center">
        {navs.map((nav, index) => (
          <a key={nav} href={`#${nav}`} className={`capitalize text-[16px] leading-[28px] font-[500] font-altF text-white ${index !== navs.length-1? 'mr-[32px]' : 'mr-0'}`}>{nav}</a>
        ))}
      </div>

      <div className="md:hidden flex min-w-[32px] justify-center items-center relative z-[5]  ss:mr-0 mr-[50px]">

          <img className='w-[32px] h-[32px] object-contain cursor-pointer' 
          src={toggle? images.close : images.open} 
          onClick={()=>setToggle(prev => !prev)}
          />          

          <div className={`${toggle ? 'flex' : 'hidden'} flex-col items-center justify-center slide-bottom absolute top-[10px] -right-50% bg-black border-[10px] border-golden p-[20px]`}>
              {navs.map((nav, index) => (
                <a key={nav} href={`#${nav}`} className={`capitalize text-[16px] min-w-[80px] leading-[28px] font-[500] font-altF text-white ${index !== navs.length-1? 'mb-[8px]' : 'mb-0'}`}>{nav}</a>
              ))}

              <a href='#' className={`block ss:hidden text-[16px] leading-[28px] font-altF text-white mt-[20px]`}>Log in / Registration</a>  
              <a href='#' className={`block ss:hidden text-[16px] leading-[28px] font-altF text-white mt-[8px]`}>Book Table</a>

          </div>

      </div>

      <div className="ss:flex hidden justify-center items-center">
        <a href='#' className={`text-[16px] font-[600] leading-[28px] font-altF text-white`}>Log in / Registration</a>
        <div className="lg:mx-[50px] md:mx-[25px] mx-[15px] border-[1px] h-[32px] border-grey"></div>
        <a href='#' className={`text-[16px] font-[600] leading-[28px] font-altF text-white`}>Book Table</a>
      </div>

    </div>
  )
}
