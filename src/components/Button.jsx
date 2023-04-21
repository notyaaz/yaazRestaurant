import React from 'react'

export default function Button({text}) {
  return (
    <div className='bg-golden hover:bg-orange-200 transition-colors  px-[20x] py-[10px] flex justify-center items-center w-44 cursor-pointer'>
        <p className='font-[700] text-black text-[16px] leading-[28px] font-baseF '>{text}</p>
    </div>
  )
}
