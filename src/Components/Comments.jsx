import React from 'react'

const Comments = () => {
    return (
        <div className="h-auto w-auto bg-[#FEFEFE]">
            <div className="px-[145px] py-[50px]">
                <h1 className='not-italic font-semibold text-[42px] leading-[52px] text-[#1A1A1A] mb-[60px]'>Comments From People</h1>
                <div className='md:flex sm:flex-wrap justify-between'>

                    {/* FIRST CARD */}
                    <div className='w-[350px] h-[280px] rounded-[15px] border-[2px] px-[24px] py-[24px] mb-7'>

                        <div className='flex justify-between mb-[21px]'>
                            <div className='flex gap-[15px]'>
                                <img src="Ovali.png" alt="" />

                                <div className='not-italic font-urbanist'>
                                    <h1 className='font-semibold text-[20px] leading-[24px] text-[#1A1A1A] mb-[9px]'>Sean Reinard</h1>
                                    <p className='font-normal text-[15px] leading-[22px] text-[#767676]'>Studio Photographer</p>
                                </div>
                            </div>

                            <div>
                                <img src="More.png" alt="" />
                            </div>

                        </div>
                        <div>
                            <h1 className='not-italic font-urbanist font-normal text-[16px] leading-[26px] text-[#767676]'>
                                Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process Gorgeous, high-quality design system for mobile, tablet & desktop devices a few reasons digital
                            </h1>
                        </div>
                    </div>


                    {/* SECOND CARD */}
                    <div className='md:flex sm:flex-wrap justify-between'>
                        <div className='w-[350px] h-[280px] rounded-[15px] border-[2px] px-[24px] py-[24px] mb-7'>

                            <div className='flex justify-between mb-[21px]'>
                                <div className='flex gap-[15px]'>
                                    <img src="Oval.png" alt="" />

                                    <div className='not-italic font-urbanist'>
                                        <h1 className='font-semibold text-[20px] leading-[24px] text-[#1A1A1A] mb-[9px]'>Bella Reed</h1>
                                        <p className='font-normal text-[15px] leading-[22px] text-[#767676]'>Art Director at ArtStudio</p>
                                    </div>
                                </div>

                                <div>
                                    <img src="More.png" alt="" />
                                </div>

                            </div>
                            <div>
                                <h1 className='not-italic font-urbanist font-normal text-[16px] leading-[26px] text-[#767676]'>
                                    Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process Gorgeous, high-quality design system for mobile, tablet & desktop devices a few reasons digital
                                </h1>
                            </div>
                        </div>
                    </div>
                    

                    {/* THIRD CARD */}
                    <div className='md:flex sm:flex-wrap justify-between'>
                        <div className='w-[350px] h-[280px] rounded-[15px] border-[2px] px-[24px] py-[24px]'>

                            <div className='flex justify-between mb-[21px]'>
                                <div className='flex gap-[15px]'>
                                    <img src="Oval1.png" alt="" />

                                    <div className='not-italic font-urbanist'>
                                        <h1 className='font-semibold text-[20px] leading-[24px] text-[#1A1A1A] mb-[9px]'>Jeremy Willson</h1>
                                        <p className='font-normal text-[15px] leading-[22px] text-[#767676]'>CEO at ArtStudio</p>
                                    </div>
                                </div>

                                <div>
                                    <img src="More.png" alt="" />
                                </div>

                            </div>
                            <div>
                                <h1 className='not-italic font-urbanist font-normal text-[16px] leading-[26px] text-[#767676]'>
                                    Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process Gorgeous, high-quality design system for mobile, tablet & desktop devices a few reasons digital
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Comments