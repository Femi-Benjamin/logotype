import React from 'react';
import Comments from '../Components/Comments';
import Download from '../Components/Download';
import Feature from '../Components/Feature';
import Footer from '../Components/Footer';
import NewsLetter from '../Components/NewsLetter';
import Prices from '../Components/Prices';
import Tutorial from '../Components/Tutorial';

const Home = () => {
    return (
        <div className='h-auto w-auto bg-[#FEFEFE]'>
            <div className='px-[145px] sm:px-[179px] md:py-[100px] sm:py-[70px]'>
                <div className='md:flex justify-between sm:flex-wrap'>
                    <div>
                        <img src="/Group 39.png" alt="" />
                    </div>


                    <div className='not-italic font-urbanist'>
                        <h1 className='font-bold md:text-[64px] sm:text-[40px] md:leading-[74px] sm:leading-[40px] text-[#1A1A1A] md:mb-[24px] mb-4 mt-3 md:text-left sm:text-center'>Headline of Modern <br /> and Digital Lending <br /> Platform Seconds</h1>
                        <p className='font-normal text-[20px] leading-[24px] text-[#767676] mb-[55px] md:text-left sm:text-center'>Nowadays, it isn’t uncommon to see lenders rapidly <br /> adopting a digital lending strategy to streamline the <br /> lending process</p>
                        <button className='w-[144px] h-[56px] rounded-[6px] bg-[#5925DC] text-[#FEFEFE] font-normal text-[18px] leading-[28px] md:mb-[120px]'>Get Started </button>


                        <div className='md:flex sm:flex-wrap sm: justify-between items-center cursor-pointer pt-[40px] sm:text-left md:text-center'>
                            <img className='mb-5 w-[116px]' src="/1.png" alt="" />
                            <img className='mb-3 w-[151px]' src="/2.png" alt="" />
                            <img className='mb-5 w-[132px]' src="/3.png" alt="" />
                            <img className='mb-3 w-[122px]' src="/4.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <Feature />
            <Tutorial />
            <Download />
            <Comments />
            <Prices />
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default Home