import React from 'react'
import images from '../images'

export default function Chef() {
  return (
    <section className='bg flex flex-col-reverse md:flex-row justify-center items-center px-[28px] py-[120px]'>
        <img className='md:w-[643px] md:h-[790px] w-[420px] h-[500px] md:mr-[80px] md:mt-0 mt-[40px]' src={images.chef} alt="chef" />

        <div className="flex-col flex md:items-start items-center justify-center">

            <p className='text-white font-baseF mb-[5px] text-[23px] leading-[30px]'>Chef's word</p>
            <img className='h-[9px] w-[40px] mb-[16px]' src={images.spoon} alt="spoon" />
            <h2 className='text-[64px] leading-[64px] text-golden font-baseF'>What We Believe In</h2>
            
            <div className="flex flex-row justify-start md:mt-[75px] mt-[30px]">
                <img className='w-[45px] h-[40px] sm:block hidden' src={images.quote} alt="" />
                <p className=" text-grey max-w-[500px] pt-[20px] font-altF font-[400] italic ml-[5px] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.</p>
            </div>
            <p className="text-grey max-w-[550px] font-altF font-[400] italic mb-[64px] text-[16px]">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
            
            <h4 className='text-golden font-baseF font-[400] text-[32px] leading-[40px] mb-[8px]'>Kevin Luo</h4>
            <p className='font-altF font-[400] text-[16px] leading-[2px] text-gray mb-[64px]'>Chef & Founder</p>

            <img className='w-[230px] h-[80px]' src={images.sign} alt="" />
        </div>

    </section>
  )
}
