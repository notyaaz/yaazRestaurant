import React from 'react'
import images from '../images'
import Button from './Button'
export default function Gallery() {
  return (
    <section className='bg-black flex md:flex-row flex-col justify-center items-center py-[50px] px-[28px] gap-[64px]'>

        <div className="flex flex-col justify-center md:items-start items-center">
            <p className='text-[23px] font-baseF leading-[30px] text-white'>Instagram</p>
            <img className='h-[9px] w-[40px] mb-[16px] mt-[10px]' src={images.spoon} alt="spoon" />
            <h2 className='font-baseF text-[64px] leading-[82px] text-golden'>Photo Gallery</h2>

            <p className='font-altF text-[16px] leading-[28px] text-grey max-w-[400px] my-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <Button text={'View More'}/>
        </div>


        <div className="flex flex-row flex-wrap gap-[32px] justify-center items-center">
            <div>
                <img className='w-[280px] h-[425px] mb-[32px]' src={images.gallery01} />
                <img className='w-[280px] h-[425px]' src={images.gallery02} />

            </div>
            <div>
                <img className='w-[280px] h-[425px] mb-[32px]' src={images.gallery03} />
                <img className='w-[280px] h-[425px]' src={images.gallery04} />
            </div>
        </div>

    </section>
  )
}
