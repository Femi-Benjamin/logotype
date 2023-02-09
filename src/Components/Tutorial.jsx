import React from 'react'

const Tutorial = () => {
    return (
        <div className="h-auto w-auto bg-[#FEFEFE]">
            <div className="px-[145px] py-[101px]">
                <div className='md:flex sm:flex-wrap justify-between'>
                    <div className='relative'>
                        <img className='mb-7' src="/Group 15.png" alt="" />
                        <p className='absolute top-[400px] left-[22px] font-urbanist font-normal text-[20px] leading-[24px] text-[#FEFEFE]'>Video store with 10 <br /> samples on 20 min</p>
                    </div>

                    <div className='not-italic font-urbanist '>
                        <h1 className='font-bold text-[12px] leading-[14px] uppercase text-[#5925DC] mb-[24px]'>Long Label text as headline</h1>
                        <h1 className='font-bold text-[52px] leading-[62px] text-[#1A1A1A] mb-[24px]'>Headline of Modern and <br /> Digital Lending Platform In a <br /> Few Seconds for You</h1>
                        <p className='font-normal text-[20px] leading-[26px] text-[#767676] mb-[51px]'>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending <br /> strategy to streamline the lending process Gorgeous, high-quality design system <br /> for mobile, tablet & desktop devices a few reasons digital</p>

                        <div className='flex items-center gap-[14px] cursor-pointer'>
                            <img src="/Group 21.png" alt="" />
                            <p className='font-bold text-[16px] leading-[26px] text-[#1A1A1A]'>Play Tutorial</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutorial
