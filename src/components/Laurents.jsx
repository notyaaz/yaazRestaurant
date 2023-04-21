import React from 'react'
import images from '../images'


export default function Laurents() {
  return (
    <section className='bg flex flex-col md:flex-row justify-center items-center relative py-[120px] px-[28px]'>
        <img className='lg:w-[145px] lg:h-[145px] md:w-[100px] md:h-[100px] w-[90px] h-[90px] lg:top-[60px] lg:left-[60px] md:top-[50px] md:left-[45%] top-[30px] left-[30px] absolute' src={images.logo} alt="logo" />

        <div className="flex-col flex md:items-start items-center justify-center">
            
            <div className="flex flex-col justify-center lg:items-start items-center w-[100%]">
                <p className='text-white font-baseF mb-[5px] text-[23px] leading-[30px]'>Awards & recognition</p>
                <img className='h-[9px] w-[40px] mb-[16px]' src={images.spoon} alt="spoon" />
                <h2 className='text-[64px] leading-[64px] text-golden font-baseF mb-[64px]'>Our Laurels</h2>
            </div>
            
            <div className="flex flex-col md:flex-row flex-wrap max-w-[640px] justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-[25px] mb-[60px]">
                    <img className='w-[80px] h-[70px]' src={images.award02}/>
                    <div>
                        <p className='text-[23px] leading-[30px] font-baseF text-golden'>Rising Star</p>
                        <p className='text-[16px] font-[400] leading-[28px] max-w-[190px] font-altF text-grey'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center gap-[25px] mb-[60px]">
                    <img className='w-[80px] h-[70px]' src={images.award01}/>
                    <div>
                        <p className='text-[23px] leading-[30px] font-baseF text-golden'>Bib Gourmond</p>
                        <p className='text-[16px] font-[400] leading-[28px] max-w-[190px] font-altF text-grey'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center gap-[25px] mb-[60px]">
                    <img className='w-[80px] h-[70px]' src={images.award05}/>
                    <div>
                        <p className='text-[23px] leading-[30px] font-baseF text-golden'>AA Hospitality</p>
                        <p className='text-[16px] font-[400] leading-[28px] max-w-[190px] font-altF text-grey'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center gap-[25px] mb-[60px]">
                    <img className='w-[80px] h-[70px]' src={images.award03}/>
                    <div>
                        <p className='text-[23px] leading-[30px] font-baseF text-golden'>Outstanding Chef</p>
                        <p className='text-[16px] font-[400] leading-[28px] max-w-[190px] font-altF text-grey'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

            </div>

        </div>

        <img className='w-[500px] h-[700px] ml-0 lg:ml-[100px]' src={images.laurels} alt="laurels"/>


    </section>
  )
}
