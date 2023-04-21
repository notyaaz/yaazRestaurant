import React from 'react'
import CTA from './CTA'
import images from '../images'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

export default function Footer() {
  return (
    <section className='bg flex flex-col items-center justify-center px-[28px] pb-[140px] relative'>
        <CTA/>
        
        <div className="flex md:flex-row flex-col justify-center items-center gap-[120px] mt-[128px] text-center">

            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-golden text-[32px] leading-[42px] font-baseF'>Contact Us</h2>
                <p className='text-[16px] text-grey font-altF leading-[28px] mt-[24px] mb-[8px]'>9 W 53rd St, New York, NY 10019, USA</p>
                <p className='text-[16px] text-grey font-altF leading-[28px]'>+1 212-344-1230 <br /> +1 212-555-1230</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-baseF text-[64px] leading-[64px] text-golden uppercase'>Gerícht</h1>
                <p className='font-altF text-[16px] leading-[28px] text-white max-w-[440px] mt-[32px] mb-[16px]'>"The best way to find yourself is to lose yourself in the service of others.”</p>
                <img className='h-[9px] w-[40px] mb-[25px]' src={images.spoon} alt="spoon" />

                <div className="flex flex-row justify-center items-center gap-[22px]">
                    <FaFacebookF className='w-[22px] h-[19px] text-white cursor-pointer'/>
                    <FaTwitter className='w-[22px] h-[19px] text-white cursor-pointer'/>
                    <FaInstagram className='w-[22px] h-[19px] text-white cursor-pointer'/>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-golden text-[32px] leading-[42px] font-baseF'>Working Hours</h2>
                <p className='text-[16px] text-grey font-altF leading-[28px] mt-[24px] mb-[8px]'>Monday-Friday: <br /> 08:00 am -12:00 am</p>
                <p className='text-[16px] text-grey font-altF leading-[28px]'>Saturday-Sunday: <br /> 07:00am -11:00 pm</p>
            </div>
            
        </div>

        <p className='font-altF text-[16px] leading-[28px] text-grey absolute left-[50%] bottom-[50px] -translate-x-[33%]'>2021 Gerícht. All Rights reserved.</p>
    </section>
  )
}
