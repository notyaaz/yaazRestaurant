import React from 'react'
import Button from './Button'
import images from '../images'

export default function CTA() {
  return (
    <div className='bg-black flex flex-col justify-center items-center py-[64px] lg:px-[260px] md:px-[130px] px-[28px] text-center'>

        <div className='flex flex-col justify-center items-center mb-[24px]'>
            <p className='text-[23px] font-baseF leading-[30px] text-white'>Newsletter</p>
            <img className='h-[9px] w-[40px] mb-[16px] mt-[10px]' src={images.spoon} alt="spoon" />
            <h2 className='font-baseF text-[64px] leading-[82px] text-golden'>Subsicribe To Our Newsletter</h2>
        </div>

        <p className='text-[16px] font-baseF leading-[38px] text-white mb-[64px] mt-[24px]'>And never miss latest Updates!</p>
        
        <div className="flex flex-row justify-center items-center gap-[32px] w-[100%] ">
            <input className='w-[100%] bg-black outline-none py-[10px] border-grey border-[1px] px-[16px]' placeholder='Email Address' type="text" />
            <Button text={'Subscribe'}/>
        </div>

    </div>
  )
}
