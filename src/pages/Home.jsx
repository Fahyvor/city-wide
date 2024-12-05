import React from 'react'
import BackgroundImage from '../assets/bgImage.jpg'
import { useState } from 'react'
import Portfolio1 from '../assets/portfolio1.png'
import LowerImage from '../assets/917.jpg'
import { IoIosHome, IoMdPeople } from "react-icons/io";
import { MdSettingsSuggest } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";
import { TbBrandSpeedtest } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrVmMaintenance } from "react-icons/gr";

const availableProperties = [
  {
    id: 1,
    name: 'Property 1',
    price: 1000,
    location: 'Location 1',
    image: Portfolio1,
  },
  {
    id: 1,
    name: 'Property 1',
    price: 1000,
    location: 'Location 1',
    image: Portfolio1,
  },
  {
    id: 1,
    name: 'Property 1',
    price: 1000,
    location: 'Location 1',
    image: Portfolio1,
  },
  {
    id: 1,
    name: 'Property 1',
    price: 1000,
    location: 'Location 1',
    image: Portfolio1,
  },
  {
    id: 1,
    name: 'Property 1',
    price: 1000,
    location: 'Location 1',
    image: Portfolio1,
  },
]

const Home = () => {

  const [marketingShow, setMarketingShow] = useState(false);
  const [screeningShow, setScreeningShow] = useState(false);
  const [paymentShow, setPaymentShow] = useState(false);
  const [maintenanceShow, setMaintenanceShow] = useState(false);

  return (
    <div className=' w-full'>
      <div className="home_body lg:pt-[12%] md:pt-[18%] pt-[25%] w-full pb-[10%]" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <p className='lg:text-6xl md:text-4xl text-3xl leading-relaxed text-center font-bold text-white lg:mx-0 md:mx-0 mx-3'>A SIMPLE APPROACH TO PROPERTY MANAGEMENT</p>
        <p className='text-white text-center lg:text-xl md:text-xl text-sm lg:w-full md:w-full w-5/6 mx-auto'>We make it a pleasure to be a tenant and profitable to be a landlord</p>

        <div className="explore_and_get_in_touch flex lg:flex-row md:flex-row flex-col p-6 py-10 justify-center gap-6">
          <div className=' border-2 border-white p-2 px-12 cursor-pointer text-center hover:bg-gray-500'>
            <a href='/properties' className='text-white font-bold tracking-widest'>Explore Properties</a>
          </div>

          <div className=' border-2 border-white p-2 px-12 cursor-pointer text-center hover:bg-gray-500'>
            <a href='/get-in-touch' className='text-white font-bold tracking-widest'>Get in touch today</a>
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

        <div className='marketing_and_co grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-full px-8 py-10 lg:h-[400px] md:h-[600px] h-[1300px]'>
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
            <div className="flip-card-front flex flex-col text-center py-8 gap-3 bg-gray-300 h-full justify-center rounded-xl">
              <FaPeopleLine className='mx-auto w-24 h-24 p-3 bg-blue-600 text-white rounded-lg'/>
              <p className="lg:text-4xl md:2xl text-lg">Marketing</p>
              <p className="text-sm leading-loose w-3/4 mx-auto">
                We minimize the vacancy period of your property with effective and
                inexpensive marketing techniques.
              </p>
            </div>

            {/* Back Side */}
            <div className="flip-card-back h-full flex flex-col text-center py-8 gap-3 bg-blue-800 text-white justify-center rounded-xl">
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

          <div className="screening w-full perspective"
            onMouseEnter={() => setScreeningShow(!screeningShow)}
            onMouseLeave={() => setScreeningShow(!screeningShow)}
          >
            <div
              className={`flip-card-inner ${
                screeningShow ? "rotate" : ""
              } w-full h-full`}
            >
              <div className="flip-card-front h-full flex flex-col text-center py-8 gap-3 bg-gray-300 justify-center rounded-xl">
                <TbBrandSpeedtest className='mx-auto w-24 h-24 p-3 bg-blue-600 text-white rounded-lg'/>
                <p className='lg:text-4xl md:2xl text-lg'>Screening</p>

                <p className="text-sm leading-loose w-3/4 mx-auto">Experienced property managers are experts at finding good tenants, and will take care of all details</p>
              </div>

            <div className="flip-card-back h-full flex flex-col text-center py-8 gap-3 bg-blue-800 text-white justify-center rounded-xl">
              <p className='uppercase'>Rent Worry Free</p>

              <p className='text-sm w-3/4 mx-auto leading-loose'>We screen each tenant and make sure that he or she meets our strict requirements; reducing your turnover rate.
              </p>

              <p className='border-2 border-white p-2 w-3/4 mx-auto hover:bg-gray-100 hover:text-blue-800'><a href='/'>Get In Touch</a></p>
            </div>
            </div>
          </div>

          <div className="payments w-full perspective"
            onMouseEnter={() => setPaymentShow(!paymentShow)}
            onMouseLeave={() => setPaymentShow(!paymentShow)}
          >
            <div
              className={`flip-card-inner ${
                paymentShow ? "rotate" : ""
              } w-full h-full`}
            >
              <div className="flip-card-front h-full flex flex-col text-center py-8 gap-3 bg-gray-300 justify-center rounded-xl">
                <RiSecurePaymentLine className='mx-auto w-24 h-24 p-3 bg-blue-600 text-white rounded-lg'/>
                <p className='lg:text-4xl md:2xl text-lg'>Payments</p>

                <p className="text-sm leading-loose w-3/4 mx-auto">We are extremely diligent in collecting rent through a systematic, timely process to ensure you get paid on time.</p>
              </div>

              <div className="flip-card-back h-full flex flex-col text-center py-8 gap-3 bg-blue-800 text-white justify-center rounded-xl">
                <p className='uppercase'>Get Paid on Time</p>

                <p className='text-sm w-3/4 mx-auto leading-loose'>Tenants are offered a variety of ways to pay rent and incentives for paying rent on time, so you can get your money as quickly as possible.
                </p>

                <p className='border-2 border-white p-2 w-3/4 mx-auto hover:bg-gray-100 hover:text-blue-800'><a href='/'>Get In Touch</a></p>
              </div>
            </div>
          </div>

          <div className="maintenance w-full perspective"
            onMouseEnter={() => setMaintenanceShow(!maintenanceShow)}
            onMouseLeave={() => setMaintenanceShow(!maintenanceShow)}
          >
            <div
              className={`flip-card-inner ${
                maintenanceShow ? "rotate" : ""
              } w-full h-full`}
            >
              <div className="flip-card-front h-full flex flex-col text-center py-8 gap-3 bg-gray-300 justify-center rounded-xl">
                <GrVmMaintenance className='mx-auto w-24 h-24 p-3 bg-blue-600 text-white rounded-lg'/>
                <p className='lg:text-4xl md:2xl text-lg'>Maintenance</p>

                <p className="text-sm leading-loose w-3/4 mx-auto">Save time and money and ensure repairs are completed in a professional manner, by trustworthy personnel.</p>
              </div>

              <div className="flip-card-back h-full flex flex-col text-center py-8 gap-3 bg-blue-800 text-white justify-center rounded-xl">
                <p className='uppercase'>Keep your Unit Fresh</p>

                <p className='text-sm w-3/4 mx-auto leading-loose'>We have experience with using an extensive network of contractors, vendors and in-house staff to handle property maintenance and repair work.
                </p>

                <p className='border-2 border-white p-2 w-3/4 mx-auto hover:bg-gray-100 hover:text-blue-800'><a href='/'>Get In Touch</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className ="properties_home bg-gray-100 py-10">
        <p className='text-4xl text-center'>Properties</p>
        <hr className='bg-blue-800 w-1/6 mx-auto h-1 my-3'/>

        <p className='text-center w-3/4 leading-loose mx-auto text-md my-5'>We have an extensive list of properties in our portfolio available for rent by prospective tenants. <a href='/'>Get in Touch</a> for more info if you think something suit your needs.</p>

        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 p-4'>
            {availableProperties.map((properties, index) => (
              <div key={index} className="card w-full px-5">
                <img src={properties.image} alt={properties.name} className='object-cover w-full'/>
                <p className='text-center font-medium text-md my-2'>{properties.name}</p>
              </div>
            ))}
        </div>

      </div>

      <div className='our_core_values w-full py-10'>
        <p className='text-3xl text-center text-blue-900 font-semibold'>Our Core Values</p>

        <p className='lg:text-md md:text-md text-sm w-3/4 text-center mx-auto my-4 leading-loose'>
          City Wide Property Management Inc considers its core values to be a key tool managing its clients valued property. These values fuel the company's reputation as a place where clients are happy and confident their investment is in good hands.
        </p>

        <div className="values_card grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 p-5 gap-7">
          <div className="great_services w-full flex flex-col items-center gap-4">
              <IoIosHome className='w-20 h-20 text-white bg-green-700 p-5 rounded-full hover:border-4 hover:border-white'/>
              <p className='text-sm font-semibold'>Great Services</p>
          </div>

          <div className="highest_standard w-full flex flex-col items-center gap-4">
              <MdSettingsSuggest className='w-20 h-20 text-white bg-blue-500 p-5 rounded-full hover:border-4 hover:border-white'/>
              <p className='text-sm font-semibold'>Highest Standards</p>
          </div>

          <div className="professional_team w-full flex flex-col items-center gap-4">
            <IoMdPeople className='w-20 h-20 text-white bg-amber-600 p-5 rounded-full hover:border-4 hover:border-white'/>
            <p className='text-sm font-semibold'>Professional Team</p>
          </div>

          <div className="creative_solutions w-full flex flex-col items-center gap-4">
            <FaRegLightbulb className='w-20 h-20 text-white bg-green-600 p-5 rounded-full hover:border-4 hover:border-white'/>
            <p className='text-sm font-semibold'>Creative Solutions</p>
          </div>
        </div>

        {/* <div className='helpful_links'>
            <div>
              <p>Helpful Links</p>
            </div>

            <p>Below you will find a comprehensive list of helpful links and resources you may use whether you are a landlord or a tenant.</p>

            <p>If you can't find what you are looking for, we're  here to help - just <a href='/'>contact us</a>.</p>
        </div> */}
        
        <div className="peace_of_mind flex lg:flex-row md:flex-row flex-col gap-4 lg:p-16 md:p-12 p-7 py-[10%]" style={{ backgroundImage: `url(${LowerImage})` }}>
          <div className='pm_left lg:w-[65%] md:w-[65%] w-full'>
            <p className='lg:text-3xl md:text-2xl text-xl lg:leading-loose md:leading-loose leading-normal text-white font-semibold text-justify'>Have the peace-of-mind of knowing your investment is in good hands!</p>
            <hr className='bg-white w-1/2 h-1 my-3'/>

            <p className='lg:text-lg md:text-lg text-sm my-3 lg:w-3/4 md:w-3/4 w-full text-white'>We offer a range of services to fill your property management needs. For more information, get in touch.</p>
          </div>

          <div className='lg:w-[35%] md:w-[35%] w-full flex flex-col gap-4 justify-center'>
            <p className='border-white  text-white text-center lg:py-4 md:py-4 py-2 border-2 hover:bg-gray-800'><a href='/'>Get in Touch</a></p>
            <p className='text-white font-semibold'>Only takes a few seconds!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home