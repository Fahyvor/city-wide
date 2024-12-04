import React, { useState, useEffect } from 'react';
import { FaBarsProgress } from 'react-icons/fa6';
import { GiCancel } from 'react-icons/gi';
import { LuSunMoon } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";
// import Logo from '../assets/logo.png'; 

const Nav = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={`fixed w-full z-20  ${ isScrolled ? 'bg-white text-black' : 'bg-transparent text-white' }
          `}>
        <div className='bg-gray-900 py-2 lg:px-9 md:px-7 px-2'>
          <p className='lg:text-sm md:text-sm text-xs text-white text-nowrap'>Call us today! +1 123 456 7890 | info@citywidemanagement.com</p>
        </div>
      <div className=' w-full flex gap-3 border-2 border-gray-50 items-center shadow-lg '>
        <div className='lg:w-1/3 md:w-1/3 w-1/4 lg:px-5 md:px-5 px-2 lg:py-0 md:py-0 py-3'>
          <a href='/' className='font-semibold'>
            <p className='uppercase lg:text-sm md:text-sm text-xs text-nowrap'>City Wide Management</p>
            {/* <img src={Logo} alt="" className='w-28 object-cover'/> */}
          </a>
        </div>

        <div className='lg:w-2/3 md:w-2/3 w-3/4 gap-8 lg:flex md:flex hidden items-center justify-end px-10'>
          <a href='/' className='md:text-md text-nowrap uppercase text-sm hover:border-t-4 hover:border-t-blue-800 py-8'>Home</a>
          <a href='/about' className='md:text-md text-nowrap uppercase text-sm hover:border-t-4 hover:border-t-blue-800 py-8'>About</a>
          <a href='/contact-us' className='md:text-md text-nowrap uppercase text-sm hover:border-t-4 hover:border-t-blue-800 py-8'>Services</a>
          <a href='/our-works' className='md:text-md text-nowrap uppercase text-sm hover:border-t-4 hover:border-t-blue-800 py-8'>Properties</a>
          <a href='/our-works' className='md:text-md text-nowrap uppercase text-sm hover:border-t-4 hover:border-t-blue-800 py-8'>Pricing</a>
          <div className="get-in-touch flex-nowrap border-2 border-white p-3">
            <a href='/contact-us' className='uppercase text-sm text-nowrap'>Get In Touch</a>
          </div>
        </div>


        <div className='mobile_nav_icon px-4 w-full lg:hidden md:hidden flex justify-end items-center'>
          {isMenuOpen ? (
            <GiCancel className='w-6 h-6' onClick={() => setIsMenuOpen(!isMenuOpen)} />
          ) : (
            <FaBarsProgress className='w-6 h-6' onClick={() => setIsMenuOpen(!isMenuOpen)} />
          )}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '60%' }}
      >
        <div className="p-4 pt-6 flex flex-col gap-6 bg-white text-gray-950 h-screen">
          <a href='/'>Home</a>
          <a href='/about'>About Us</a>
          <a href='/properties'>Properties</a>
          <a href='/pricing'>Pricing</a>
          <a href='/get-in-touch'>Get In Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
