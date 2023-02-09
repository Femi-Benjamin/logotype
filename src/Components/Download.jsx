import React from 'react'

const Download = () => {
    return (
        <div className="h-auto w-auto bg-[#FEFEFE]">
            <div className='pl-[145px] py-[101px]'>
                <div className='md:flex sm:flex-wrap justify-between'>

                    <div className='not-italic font-urbanist'>
                        <button className='w-[123px] h-[32px] bg-[#BDB4FE] rounded-[28px] font-bold text-[12px] leading-[14px] uppercase text-[#FEFEFE] mb-[40px]'>Digital Ocean</button>
                        <h1 className='font-bold text-[52px] leading-[62px] text-[#1A1A1A] mb-[44px]'>Headline of Modern and <br /> Digital Lending Platform</h1>
                        <p className='font-normal text-[20px] leading-[26px] text-[#767676] mb-[70px]'>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending <br /> strategy to streamline the lending process Gorgeous</p>

                        <div className='flex gap-[30px] mb-[370px]'>
                            <button className='h-[60px] w-[170px] bg-black p-4 rounded-[6px]'>
                                <img src="/Logoi.png" alt="" />
                            </button>

                            <button className='h-[60px] w-[170px] bg-black p-4 rounded-[6px]'>
                                <img src="/Logo1.png" alt="" />
                            </button>
                        </div>

                        <div className='flex gap-[50px] cursor-pointer'>
                            <p className='not-italic font-medium text-[20px] leading-[24px] text-[#1A1A1A]'>Learn more about our community in social</p>
                            <img src="/Group 24.png" alt="" />
                        </div>

                    </div>


                    <div >
                        <img src="/Group 23.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download