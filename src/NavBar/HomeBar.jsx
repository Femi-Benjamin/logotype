import React from 'react'
import { Link } from 'react-router-dom'

const HomeBar = () => {
  return (
    <nav className='w-screen h-[80px] bg-[#FEFEFE]'>
      <div className='md:px-[80px]'>
        <div className='h-[74px] flex justify-between items-center'>

          <div>
            <img className='items-center cursor-pointer' src="/Logo.png" alt="" />
          </div>

          <div>
            <ul className='hidden md:flex justify-between gap-[37px] cursor-pointer not-italic text-[#767676] font-urbanist font-normal text-[16px] leading-[26px]'>
              <Link to="/"><li className='hover:text-[#1A1A1A] font-medium'>Home</li></Link>
              <Link to="/features"><li className='hover:text-[#1A1A1A] font-medium'>Features</li></Link>
              <Link to="/pricing"><li className='hover:text-[#1A1A1A] font-medium'>Pricing</li></Link>
              <Link to="/aboutus"><li className='hover:text-[#1A1A1A] font-medium'>About Us</li> </Link>
              <Link to="/help"><li className='hover:text-[#1A1A1A] font-medium'>Help</li></Link>
            </ul>
          </div>

          <div className='cursor-pointer font-urbanist'>
            <Link to="/signin"><button className='mr-[15px] font-normal text-[16px] leading-[26px] text-[#5925DC]'>Sign In</button></Link>
            <Link to="/Signup"> <button className='w-[89px] h-[40px] bg-[#5925DC] text-white rounded-[28px]'>Sign Up</button></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HomeBar