import React from 'react'
import images from '../images'
import Button from './Button'

const Lplates = [
    {
        title: 'Chapel Hill Shiraz',
        price: '$56',
        from: 'AU | Bottle'
    },
    {
        title: 'Catena Malbec',
        price: '$59',
        from: 'AR | Bottle'
    },
    {
        title: 'La Vieille Rosé',
        price: '$44',
        from: 'FR | 750 ml'
    },
    {
        title: 'Rhino Pale Ale',
        price: '$31',
        from: 'CA | 750 ml'
    },
    {
        title: 'Irish Guinness',
        price: '$26',
        from: 'IE | 750 ml'
    },
]
const Rplates = [
    {
        title: 'Aperol Spritz',
        price: '$20',
        from: 'Aperol | Villa Marchesi prosecco | soda | 30ml'
    },
    {
        title: 'Dark `N` Stormy',
        price: '$16',
        from: 'Dark rum | Ginger beer | Slice of lime. '
    },
    {
        title: 'Daiquiri',
        price: '$10',
        from: 'Rum | Citrus juice | Sugar'
    },
    {
        title: 'Old Fashioned',
        price: '$31',
        from: 'Gin | Sweet Vermouth | Campari | Orange garnish'
    },
    {
        title: 'Negroni',
        price: '$26',
        from: 'AU | Bottle'
    },
]



export default function Menu() {
  return (
    <section className='flex flex-col justify-center items-center bg-black py-[127px] px-[15px]'>

        <div className="flex flex-col justify-center items-center">
            <p className='text-white font-baseF mb-[5px] text-[23px] leading-[30px]'>Menu That Fits Your Pallate</p>
            <img className='h-[9px] w-[40px] mb-[10px]' src={images.spoon} alt="spoon" />
            <h2 className='text-[60px] text-center leading-[80px] font-baseF text-golden'>Today's Special</h2>
        </div>

        <div className="md:flex-row flex-col flex justify-center items-center mt-[64px] text-center">

            <div className='flex flex-col gap-[40px]'>
                <h3 className='text-white text-[45px] font-[500] font-baseF leading-[58.5px] mb-[9px]'>Wine & Beer</h3>

                {Lplates.map((plate, index) => (
                    <div key={index} className='flex flex-col text-left gap-[8px]'>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='text-[23px] font-[700]  leading-[30px] font-baseF text-golden'>{plate.title}</p>
                            <div className='lg:block md:hidden block w-[120px] h-[1px] bg-grey mx-[32px]'></div>
                            <p className='text-white text-[23px] leading-[30px] font-[700] font-baseF '>{plate.price}</p>
                        </div>
                        <p className='font-[400] font-altF text-[16px] leading-[28px] text-grey'>{plate.from}</p>
                    </div>
                ))}

            </div>

            <img className='w-[444px] h-[660px] mx-[50px]' src={images.menu} alt="menu" />

            <div className='flex flex-col gap-[40px] md:mt-[0px] mt-[64px]'>
                <h3 className='text-white text-[45px] font-[500] font-baseF leading-[58.5px] mb-[9px]'>Cocktails</h3>

                {Rplates.map((plate, index) => (
                    <div key={index} className='flex flex-col text-left gap-[8px]'>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='text-[23px] font-[700]  leading-[30px] font-baseF text-golden'>{plate.title}</p>
                            <div className='lg:block md:hidden block w-[120px] h-[1px] bg-grey mx-[32px]'></div>
                            <p className='text-white text-[23px] leading-[30px] font-[700] font-baseF '>{plate.price}</p>
                        </div>
                        <p className='font-[400] font-altF text-[16px] leading-[28px] text-grey'>{plate.from}</p>
                    </div>
                ))}

            </div>
        </div>
        <div className="mt-[70px]"></div>
        <Button text={'View More'}/>
    </section>
  )
}
