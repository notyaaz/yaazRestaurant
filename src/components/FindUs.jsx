import React from 'react'
import images from '../images'
import Button from './Button'

export default function FindUs() {
  return (
    <section className='bg flex md:flex-row flex-col justify-center items-center px-[28px] py-[120px] lg:gap-[120px] gap-[60px]'>

        <div className="flex flex-col md:items-start items-center justify-center">
            <div>
                <p className='text-[23px] font-baseF leading-[30px] text-white'>Contact</p>
                <img className='h-[9px] w-[40px] mb-[16px] mt-[10px]' src={images.spoon} alt="spoon" />
                <h2 className='font-baseF text-[64px] leading-[82px] text-golden'>Find Us</h2>
            </div>

            <p className='font-altF text-[16px] leading-[28px] text-grey mb-[32px] mt-[64px]'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>

            <p className='text-[25px] font-baseF leading-[30px] text-golden'>Opening Hours</p>

            <p className='font-altF text-[18px] leading-[28px] text-white my-[16px]'>Mon - Fri: 10:00 am - 02:00 am</p>
            <p className='font-altF text-[18px] leading-[28px] text-white mb-[72px]'>Sat - Sun: 10:00 am - 03:00 am</p>
            
            <Button text={"Visit Us"}/>

        </div>



        <img className='md:w-[670px] md:h-[740px] w-[420px] h-[460px]' src={images.findus} />
    </section>
  )
}
