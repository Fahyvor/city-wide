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
        <div className='bg-blue-950 py-2 px-9'>
          <p className='text-sm'>Call us today! +1 123 456 7890 | info@citywidemanagement.com</p>
        </div>
      <div className=' w-full flex gap-3 border-2 border-gray-50 py-8 items-center shadow-lg '>
        <div className='lg:w-1/3 md:w-1/3 w-1/4 lg:px-5 md:px-5 px-2 '>
          <a href='/' className='font-bold'>
            <p className='uppercase'>City Wide Management</p>
            {/* <img src={Logo} alt="" className='w-28 object-cover'/> */}
          </a>
        </div>

        <div className='lg:w-1/2 md:w-2/3 w-3/4 gap-8 lg:flex md:flex hidden items-center justify-end px-10'>
          <a href='/' className='text-base md:text-md text-nowrap uppercase'>Home</a>
          <a href='/about' className='text-base md:text-md text-nowrap uppercase'>About</a>
          <a href='/contact-us' className='text-base md:text-md text-nowrap uppercase'>Services</a>
          <a href='/our-works' className='text-base md:text-md text-nowrap uppercase'>Properties</a>
          <a href='/our-works' className='text-base md:text-md text-nowrap uppercase'>Pricing</a>
          <div className="get-in-touch flex-nowrap">
            <a className='uppercase text-nowrap'>Get In Touch</a>
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
        <div className="p-4 pt-6 flex flex-col gap-6">
          <a href='/'>Home</a>
          <a href='/about'>About Us</a>
          <a href='/contact-us'>Contact Us</a>
          <a href='/our-works'>Our Works</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
