import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <nav className='w-screen h-[100px] bg-[#FEFEFE]'>
      <div className='md:px-[80px]'>
        <div className='h-[100px] flex justify-between items-center'>

          <div>
            <img className='items-center cursor-pointer' src="/Logo.png" alt="" />
          </div>

          <div>
            <ul className='hidden md:flex justify-between gap-[37px] cursor-pointer not-italic text-[#767676] font-urbanist font-normal text-[16px] leading-[26px]'>
              <Link to="/features"><li className='hover:text-[#1A1A1A] font-medium'>Features</li></Link>
              <Link to="/pricing"><li className='hover:text-[#1A1A1A] font-medium'>Pricing</li></Link>
              <Link to="/aboutus"><li className='hover:text-[#1A1A1A] font-medium'>About Us</li> </Link>
              <Link to="/help"><li className='hover:text-[#1A1A1A] font-medium'>Help</li></Link>
            </ul>
          </div>

          <div className='cursor-pointer font-urbanist'>
          <img src="/Group 24.png" alt="" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Footer