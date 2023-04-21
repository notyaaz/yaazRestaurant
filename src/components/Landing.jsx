import React from 'react'
import images from '../images'

import Button from './Button'

export default function Landing() {
  return (
    <section id='landing' className='xl:px-[200px] lg:px-[120px] px-[28px] flex md:flex-row flex-col bg-black justify-between items-center py-[50px]'>

        <div className="flex-col flex md:items-start items-center justify-center text-center">

            <p className='text-white font-baseF mb-[5px] text-[23px] leading-[30px]'>Chase The New Flavour</p>
            <img className='h-[9px] w-[40px]' src={images.spoon} alt="spoon" />

            <h1 className='md:text-[90px] text-[45px] md:leading-[117px] leading-[70px] font-[500] text-golden  font-baseF'>The Key To <br/> Fine Dining</h1>
            <p className="text-left md:pl-0 pl-[20px] my-[25px] text-grey max-w-[450px] font-altF font-[400] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam doloribus consequatur ad dolore reprehenderit id eum. Omnis, quis maxime.</p>
            <Button text="Explore Menu"/>

        </div>

        <img className='lg:w-[667px] lg:h-[736px] md:w-[457px] md:h-[500px] w-[300px] h-[330px] lg:mt-0 mt-[80px]' src={images.welcome} alt="" />
    </section>
  )
}
