import React from 'react'
import BackgroundImage from '../assets/bgImage.jpg'
import { useState } from 'react'

const availableProperties = [
  {
    id: 1,
    name: 'Property 1',
    price: 1000,
    location: 'Location 1',
    image: 'image1.jpg',
  },
  {
    id: 1,
    name: 'Property 1',
    price: 1000,
    location: 'Location 1',
    image: 'image1.jpg',
  },
  {
    id: 1,
    name: 'Property 1',
    price: 1000,
    location: 'Location 1',
    image: 'image1.jpg',
  },
  {
    id: 1,
    name: 'Property 1',
    price: 1000,
    location: 'Location 1',
    image: 'image1.jpg',
  },
  {
    id: 1,
    name: 'Property 1',
    price: 1000,
    location: 'Location 1',
    image: 'image1.jpg',
  },
]

const Home = () => {

  const [marketingShow, setMarketingShow] = useState(false);
  const [screeningShow, setScreeningShow] = useState(false);
  const [paymentsShow, setPaymentsShow] = useState(false);

  return (
    <div className=''>
      <div className="home_body pt-[12%] pb-[10%]" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <p className='text-6xl leading-relaxed text-center font-bold text-white'>A SIMPLE APPROACH TO PROPERTY MANAGEMENT</p>
        <p className='text-white text-center text-xl'>We make it a pleasure to be a tenant and profitable to be a landlord</p>

        <div className="explore_and_get_in_touch flex p-6 py-10 justify-center gap-6">
          <div className=' border-2 border-white p-2 px-12 cursor-pointer hover:bg-gray-500'>
            <a href='/' className='text-white font-bold tracking-widest'>Explore Properties</a>
          </div>

          <div className=' border-2 border-white p-2 px-12 cursor-pointer hover:bg-gray-500'>
            <a href='/' className='text-white font-bold tracking-widest'>Get in touch today</a>
          </div>
        </div>
      </div>

      <div className='specialist_in_property_management py-20'>
        <p className='text-3xl text-center py-3'>Specialist in Property Management</p>
        <hr className='bg-blue-800 w-1/4 mx-auto h-1 my-3'/>

        <p className='w-3/4 mx-auto text-md text-center mt-8 leading-loose'>
          As one of the most competitive property management companies in Nigeria, we offer a range of services to fill
          your property management needs. From marketing and screening to rent collection and ongoing maintenance; we make it a breeze to own and operate a rental property.
        </p>

        <div className='marketing_and_co grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-full px-8 py-10'>
        <div
          className="marketing w-full perspective"
          onMouseEnter={() => setMarketingShow(!marketingShow)}
          onMouseLeave={() => setMarketingShow(!marketingShow)}
        >
          <div
            className={`flip-card-inner ${
              marketingShow ? "rotate" : ""
            } w-full h-full`}
          >
            {/* Front Side */}
            <div className="flip-card-front flex flex-col text-center py-8 gap-3 bg-gray-300 justify-center rounded-xl">
              <p className="text-4xl">Marketing</p>
              <p className="text-sm leading-loose w-3/4 mx-auto">
                We minimize the vacancy period of your property with effective and
                inexpensive marketing techniques.
              </p>
            </div>

            {/* Back Side */}
            <div className="flip-card-back flex flex-col text-center py-8 gap-3 bg-blue-800 text-white justify-center rounded-xl">
              <p className="uppercase">Wide Spread Marketing</p>
              <p className='text-sm w-3/4 mx-auto leading-loose'>
                We make sure your property is presented in the best possible way.
                The better the presentation, the better the results.
              </p>
              <p className='border-2 border-white p-2 w-3/4 mx-auto hover:bg-gray-100 hover:text-blue-800'>
                <a href="/">Get In Touch</a>
              </p>
            </div>
          </div>
        </div>

          <div className="screening w-full pespective"
            onMouseEnter={() => setScreeningShow(!screeningShow)}
            onMouseLeave={() => setScreeningShow(!screeningShow)}
          >
            <div
              className={`flip-card-inner ${
                screeningShow ? "rotate" : ""
              } w-full h-full`}
            >
              <div className="flip-card-front flex flex-col text-center py-8 gap-3 bg-gray-300 justify-center rounded-xl">
                <p className='text-4xl'>Screening</p>

                <p className="text-sm leading-loose w-3/4 mx-auto">Experienced property managers are experts at finding good tenants, and will take care of all details</p>
              </div>
            {/* </div> */}

            <div className="flip-card-back flex flex-col text-center py-8 gap-3 bg-blue-800 text-white justify-center rounded-xl">
              <p className='uppercase'>Rent Worry Free</p>

              <p className='text-sm w-3/4 mx-auto leading-loose'>We screen each tenant and make sure that he or she meets our strict requirements; reducing your turnover rate.
              </p>

              <p className='border-2 border-white p-2 w-3/4 mx-auto hover:bg-gray-100 hover:text-blue-800'><a href='/'>Get In Touch</a></p>
            </div>
            </div>
          </div>

          <div className="payments">
            <div>
              <p>Payments</p>

              <p>We are extremely diligent in collecting rent through a systematic, timely process to ensure you get paid on time.</p>
            </div>

            <div>
              <p>Get Paid on Time</p>

              <p>Tenants are offered a variety of ways to pay rent and incentives for paying rent on time, so you can get your money as quickly as possible.
              </p>

              <p><a href='/'>Get In Touch</a></p>
            </div>
          </div>

          <div className="maintenance">
            <div>
              <p>Maintenance</p>

              <p>Save time and money and ensure repairs are completed in a professional manner, by trustworthy personnel.</p>
            </div>

            <div>
              <p>Keep your Unit Fresh</p>

              <p>We have experience with using an extensive network of contractors, vendors and in-house staff to handle property maintenance and repair work.
              </p>

              <p><a href='/'>Get In Touch</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className ="properties_home">
        <p>Properties</p>

        <p>We have an extensive list of properties in our portfolio available for rent by prospective tenants. <a href='/'>Get in Touch</a> for more info if you think something suit your needs.</p>

        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1'>
            {availableProperties.map((properties, index) => (
              <div key={index} className="card">
                <img src={properties.image} alt={properties.name} />
              </div>
            ))}
        </div>

        <p><a href='/'>View All Properties</a></p>
      </div>

      <div className='our_core_values'>
        <p>Our Core Values</p>

        <p>C
          City Wide Property Management Inc considers its core values to be a key tool managing its clients valued property. These values fuel the company's reputation as a place where clients are happy and confident their investment is in good hands.
        </p>

        <div className="values_card">
          <div className="great_services">
            <p>Great Services</p>
          </div>

          <div className="highest_standard">
              <p>Highest Standards</p>
          </div>

          <div className="professional_team">
            <p>Professional Team</p>
          </div>

          <div className="creative_solutions">
            <p>Creative Solutions</p>
          </div>
        </div>

        <div className='helpful_links'>
            <div>
              <p>Helpful Links</p>
            </div>

            <p>Below you will find a comprehensive list of helpful links and resources you may use whether you are a landlord or a tenant.</p>

            <p>If you can't find what you are looking for, we're  here to help - just <a href='/'>contact us</a>.</p>
        </div>
        
        <div className="peace_of_mind">
          <div className='pm_left'>
            <p>Have the peace-of-mind of knowing your investment is in good hands!</p>

            <p>We offer a range of services to fill your property management needs. For more information, get in touch.</p>
          </div>

          <div>
            <p><a href='/'>Get in Touch</a></p>
            <p>Only takes a few seconds!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home