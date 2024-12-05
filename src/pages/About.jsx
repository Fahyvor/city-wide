import React from 'react'
import AboutImage from '../assets/aboutBg.jpg'
import AboutContract from '../assets/aboutContract.jpg'
import FooterAbout from '../assets/footerAbout.jpg'

const About = () => {
  return (
    <div className='w-full'>
        <div className='lg:pt-[18%] md:pt-[18%] pt-[25%] w-full pb-[12%]' style={{ backgroundImage: `url(${AboutImage})` }}>
            <p className='lg:text-6xl md:text-4xl text-3xl leading-relaxed text-center font-bold text-white lg:mx-0 md:mx-0 mx-3'> MANAGEMENT WITH A DIFFERENCE</p>
            <p className='text-white text-center lg:text-xl md:text-xl text-sm lg:w-full md:w-full w-5/6 mx-auto'>City Wide Properties Management Inc. focuses on exceptional service</p>
        </div>

        <div className='about_text pt-8'>
            <p className='text-center lg:text-5xl md:text-4xl text-2xl font-semibold'>About</p>
            <hr className='bg-blue-800 w-1/6 mx-auto h-1 my-3'/>
            
            <p className='lg:w-3/4 md:w-3/4 w-5/6 mx-auto lg:text-center md:text-center text-justify lg:text-sm md:text-sm text-xs lg:leading-loose md:leading-loose leading-loose my-5'>
                Locally owned and operated, City Wide Property Management Inc has over 5 years of experience serving the St. John’s and surrounding area. Our team strives to provide exceptional service to its clients by taking on the responsibilities associated with owning a rental property to give you a stress-free experience. We take extra care in selecting suitable tenants and efficiently collecting rent, meticulously maintaining your property to reduce major repairs down the road, and maximising your return investment.
            </p>

            <p className='lg:w-3/4 md:w-3/4 w-5/6 mx-auto lg:text-center md:text-center text-justify lg:text-sm md:text-sm text-xs lg:leading-loose md:leading-loose leading-loose my-5'>
                Our company has built a solid reputation as a place where our clients are satisfied and confident that their investment property is in good hands. When you hire us, you’re not just hiring a property management company; you’re hiring a full service team who is available 24/7 365 to take care of your property.
            </p>
        </div>

        <div className='lg:px-[25%] md:px-[20%] px-[5%] py-7'>
            <img src={AboutContract} alt="About Contract" className='w-full'/>
        </div>

        <div className=' w-full py-8' 
        style={{ backgroundImage: `url(${FooterAbout})` }}
        >
            <form className='mx-auto lg:w-1/2 md:w-1/2 w-5/6 bg-gray-300'>
                <p className='bg-blue-900 text-white  py-4 text-center'>Get In Touch Today</p>

                <p className='text-sm m-5'>Let us know how we can help</p>

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
  )
}

export default About