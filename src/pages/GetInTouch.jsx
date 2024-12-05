import React from 'react'
import TouchImage from '../assets/touchImage.jpg'
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div>
        <div className='lg:pt-[18%] md:pt-[18%] pt-[25%] w-full pb-[15%] bg-gray-900' style={{ backgroundImage: `url(${TouchImage})` }}>
            <p className='lg:text-6xl md:text-4xl text-3xl leading-relaxed text-center font-bold text-white lg:mx-0 md:mx-0 mx-3'> GET IN TOUCH</p>
            <p className='text-white text-center lg:text-xl md:text-xl text-sm lg:w-full md:w-full w-5/6 mx-auto my-6'>Our team is ready to help</p>
        </div>

        <div className='flex gap-4 lg:flex-row md:flex-col flex-col'>
            <div className="intouch_left lg:w-[24%] md:w-full w-full bg-gray-100 p-6 flex flex-col gap-12 py-16">
                <p className='font-bold text-xl'>ST. JOHN'S OFFICE</p>
                <div className='flex gap-2'>
                    <FaMailBulk className='w-8 h-8'/>
                    <p className='text-sm font-semibold'>PO Box 29072 Torbay Rd
                    St. John’s, NL, A1A5B5</p>
                </div>

                <div className='flex gap-2'>
                    <FaPhone className='w-4 h-4'/>
                    <p className='text-sm font-semibold'>+1 (709) 700 8727</p>
                </div>

                <div className='flex gap-2'>
                    <p className='font-bold'>@</p>
                    <p className='text-sm font-semibold'>info@signalmanagement.ca</p>
                </div>

                <div className='flex gap-2'>
                    <FaClock className='w-4 h-4'/>
                    <p className='text-sm font-semibold'>Mon – Fri,  9:00am – 1:00pm</p>
                </div>
            </div>

            <div className='intouch_right p-8 flex flex-col gap-8'>
                <p className='text-3xl font-medium text-center my-3'>Talk To Us - We're Here to Help</p>

                <p className='text-center w-5/6 mx-auto text-sm leading-loose'>
                    Let us know how we can help. Whether you’re a landlord looking for assistance with your investment, or a tenant looking for a property; our team is here for you.
                </p>

                <form className='mx-auto lg:w-2/3 md:w-2/3 w-5/6 bg-gray-300'>
                    <div className='first_and_last_name flex lg:flex-row md:flex-row flex-col justify-between px-5 w-full gap-8 my-5'>
                        <div className="lg:w-1/2 md:w-1/2 w-full">
                            <p className='text-sm my-2 font-medium'>FIRST NAME *</p>

                            <input type='text' className='w-full p-3' />
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 w-full">
                            <p className='text-sm my-2 font-medium'>LAST NAME *</p>

                            <input type='text' className='w-full  p-3' />
                        </div>
                    </div>

                    <div className='email_and_phone flex lg:flex-row md:flex-row flex-col justify-between px-5 w-full gap-8'>
                        <div className="lg:w-1/2 md:w-1/2 w-full">
                            <p className='text-sm my-2 font-medium'>EMAIL ADDRESS *</p>

                            <input type='text' className='w-full  p-3' />
                        </div>

                        <div className="lg:w-1/2 md:w-1/2 w-full">
                            <p className='text-sm my-2 font-medium'>PHONE NUMBER *</p>

                            <input type='text' className='w-full  p-3' />
                        </div>
                    </div>

                    <div className='px-5 py-6'>
                        <p className='text-sm my-2 font-medium'>SUBJECT *</p>

                        <input type='text' className='w-full p-3' />
                    </div>

                    <div className='px-5 py-3'>
                        <p className='text-sm my-2 font-medium'>HOW CAN WE HELP? *</p>

                        <textarea className='w-full p-3 h-64' />
                    </div>

                    <div className='w-full flex '>
                        <button className='lg:w-1/3 md:w-1/ w-3/4 my-2 border-2 bg-blue-700 mx-auto text-white hover:bg-blue-900 font-semibold py-2'>GET IN TOUCH</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch