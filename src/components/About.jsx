import React from 'react'
import images from '../images'
import Button from './Button'

export default function About() {
  return (
    <section id='about' className='bg flex md:flex-row flex-col justify-center items-center px-[28px] py-[200px]'>


        <div className="text-right flex flex-col items-end justify-center z-[1]">
            <h2 className='text-[60px] leading-[80px] font-baseF text-golden'>About Us</h2>
            <img className='w-[40px] h-[9px] rotate-180 mt-[10px]' src={images.spoon} alt="spoon" />
            <p className='font-altF my-[30px] text-[16px] font-[400] leading-[28px] text-grey max-w-[450px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis atque sint unde ducimus nisi dolorem consequuntur. Magni quia unde harum.</p>
            <Button text={'Know More'}/>
        </div>

        <div className="relative mx-[90px] md:my-0 my-[25px]">
            <img className='w-[82px] h-[700px] z-[2] relative' src={images.knife} alt="knife" />
            <img className='min-w-[391px] h-[415px] top-[125px] z-[0] -translate-x-[40%] absolute' src={images.G} alt="G" />
        </div>

        <div className="text-left flex flex-col items-start justify-center z-[1]">
            <h2 className='text-[60px] leading-[80px] font-baseF text-golden'>Our History</h2>
            <img className='w-[40px] h-[9px] mt-[10px]' src={images.spoon} alt="spoon" />
            <p className='font-altF my-[30px] text-[16px] leading-[28px] font-[400] text-grey max-w-[450px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis atque sint unde ducimus nisi dolorem consequuntur. Magni quia unde harum.</p>
            <Button text={'Know More'}/>
        </div>

    </section>
  )
}
