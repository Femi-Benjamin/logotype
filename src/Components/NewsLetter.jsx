import React from 'react'

const NewsLetter = () => {
    return (
        <div className='text-center items-center'>
            <div className='not-italic font-urbanist'>
                <h1 className='font-bold text-[52px] leading-[62px] text-[#1A1A1A] mb-[25px]'>Subscribe on our Newsletter</h1>
                <p className='font-normal text-[16px leading-[26px] text-[#767676] mb-[50px]'>Gorgeous, high-quality design system for mobile, tablet & desktop devices a few reasons <br /> digital lending platforms with streamline on landing pages</p>

                <div className='md:flex sm:flex-wrap justify-center gap-5 mb-[25px]'>
                    <input
                        className='w-[263px] h-[48px] border rounded-[6px] font-normal text-[16px] leading-[26px] text-[#767676] placeholder:p-5 mb-6'
                        type="text"
                        id='email'
                        placeholder='@ Enter your email'
                    />

                    <button className='w-[263px] h-[48px] bg-[#5925DC] rounded-[6px] font-normal text-[16px] leading-[26px] text-white'>Subscribe</button>
                </div>

                <p className='font-normal text-[16px] leading-[26px] text-[#767676] pb-[100px] border-b'>We will never spam you. Only useful mails with promo and events</p>
            </div>
        </div>
    )
}

export default NewsLetter