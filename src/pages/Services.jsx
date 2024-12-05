import React, { useState } from 'react'
import ServicesImage from '../assets/servicesImage.jpg'
import MarketingImage from '../assets/marketingImage.jpg'
import HandShake from '../assets/hand-shake.jpg'
import Maintenance from '../assets/maintenance.jpg'

const Services = () => {
    const [activeService, setActiveService] = useState('overview');

  return (
    <div className=''>
        <div className='lg:pt-[18%] md:pt-[18%] pt-[25%] w-full pb-[9%] bg-gray-950' style={{ backgroundImage: `url(${ServicesImage})` }}>
            <p className='lg:text-6xl md:text-4xl text-3xl leading-relaxed text-center font-bold text-white lg:mx-0 md:mx-0 mx-3'> MANAGEMENT SERVICES</p>
            <p className='text-white text-center lg:text-xl md:text-xl text-sm lg:w-full md:w-full w-5/6 mx-auto my-6'>We help you capitalize on your investment</p>
        </div>

        <div className='flex gap-6 w-full lg:px-[8%] md:px-[6%] px-6 py-9 lg:flex-row md:flex-row flex-col'>
            <div className="services_side_bar lg:w-[18%] md:w-[20%] w-full grid lg:grid-cols-1 md:grid-cols-1 grid-cols-2 gap-3">
                <p onClick={() => setActiveService('overview')} className={activeService === "overview" ? `bg-red-500 cursor-pointer flex justify-center items-center py-2 px-2` : `bg-gray-200 py-2 px-2 cursor-pointer flex justify-center items-center`}>Services Overview</p>
                <p onClick={() => setActiveService('property')} className={activeService === "property" ? `bg-red-500 cursor-pointer flex justify-center items-center py-2 px-2` : `bg-gray-200 py-2 px-2 cursor-pointer flex justify-center items-center`}>Property Mangement</p>
                <p onClick={() => setActiveService('snow')} className={activeService === "snow" ? `bg-red-500 cursor-pointer flex justify-center items-center py-2 px-2` : `bg-gray-200 py-2 px-2 cursor-pointer flex justify-center items-center`}>Snow Clearing</p>
                <p onClick={() => setActiveService('land')} className={activeService === "land" ? `bg-red-500 cursor-pointer flex justify-center items-center py-2 px-2` : `bg-gray-200 py-2 px-2 cursor-pointer flex justify-center items-center`}>Landscaping</p>
                <p onClick={() => setActiveService('custom')} className={activeService === "custom" ? `bg-red-500 cursor-pointer flex justify-center items-center py-2 px-2` : `bg-gray-200 py-2 px-2 cursor-pointer flex justify-center items-center`}>Custom Solutions</p>
                <p onClick={() => setActiveService('discount')} className={activeService === "discount" ? `bg-red-500 cursor-pointer flex justify-center items-center py-2 px-2` : `bg-gray-200 py-2 px-2 cursor-pointer flex justify-center items-center`}>Discounted Bundles</p>
            </div>

            <div className="services_content lg:w-[82%] md:w-[82%] w-full">
                <div className={activeService === 'overview' ? `flex w-full flex-col lg:px-8 md:px-6 px-0 gap-5`: `hidden`}>
                    <p className='lg:text-3xl font-medium md:text-2xl text-xl'>Let Us Help Manage Your Rental Property</p>

                    <p className='text-justify leading-loose text-sm'>
                        Our goal as your property management company is to partner with you so that your captalize on your investment property's highest potential. In order to do this, we utilize the industries best software and tie it with quality management. We keep track of every dollar that flows through every unit, which in turn will make you profitable. The success of your real estate investment portfolio is our highest priority.
                    </p>

                    <p className='text-justify leading-loose text-sm'>
                        You do not need to pay premium rates to get great service. We are among the most competitive management companies in the St. John’s area. Our commitment to technology is second to none. This keeps our rates low and our properties full. City Wide Property Management Inc offers a wide range of services to ensure the property owners’ experience is as satisfying and profitable as possible!
                    </p>

                    <div className="benefits text-justify leading-loose text-sm" >
                        <p className='text-lg my-3'>Benefits of using City Wide Property Management Inc.</p>

                        <ul>
                            <li>No hassle management</li>
                            <li>Peace of mind</li>
                            <li>Industry leading marketing tools</li>
                            <li>24/7 maintenance request handling</li>
                            <li>Prompt Response to Tenant Requests</li>
                            <li>Low vacancy rate</li>
                            <li>Low time on market</li>
                            <li>Industry specific local knowledge</li>
                        </ul>

                    </div>

                    <div className="activities text-justify leading-loose text-sm">
                        <p className='text-lg my-3'>What we do as your St. John's area property manager:</p>

                        <ul>
                            <li>Fill vacancies</li>
                            <li>Advertise your rental</li>
                            <li>Handle tenant inquiries</li>
                            <li>Background and credit investigations</li>
                            <li>Application processing</li>
                            <li>Lease signing</li>
                            <li>Full service repair</li>
                            <li>Rent collection</li>
                            <li>Accounting</li>
                            <li>Coordinate Evictions</li>
                        </ul>
                    </div>
                </div>   

                <div className={activeService === 'property' ? `flex w-full flex-col lg:px-8 md:px-6 px-0 gap-5` : `hidden`}>
                    <p className='lg:text-3xl font-medium md:text-2xl text-xl'>Property Management Packages</p>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>One-off Property Care - Starting at $399/month</p>

                        <ul>
                            <li>Rent collection and tenant communication</li>
                            <li>Routine inspections and basic maintenance</li>
                            <li>Full-service property management, leasing and vacancy handling</li>
                            <li>$1999 one-off renting fee</li>
                        </ul>
                    </div>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>Standard Property Care - Starting at $199/month</p>

                        <ul>
                            <li>Rent collection and tenant communication</li>
                            <li>Routine inspections and basic maintenance</li>
                            <li>Full-service property management, leasing and vacancy handling</li>
                            <li>$999 one-off renting fee</li>
                        </ul>
                    </div>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>Premium Property Management - Starting at $299/month</p>

                        <ul>
                            <li>All Standard services</li>
                            <li>Dedicated account manager</li>
                            <li>Monthly financial reporting</li>
                            <li>24/7 emergency</li>
                        </ul>
                    </div>

                    <div>
                        <img src={MarketingImage} alt="Marketing" className='object-cover' />
                    </div>
                </div>

                <div className={activeService === 'snow' ? `flex w-full flex-col lg:px-8 md:px-6 px-0 gap-5` : `hidden`}>
                    <p className='lg:text-3xl font-medium md:text-2xl text-xl'>Snow Clearing (Jan - May)</p>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>One-off Snow Clearing - Starting at $39 - $99 per call</p>

                        <ul>
                            <li>On-call service depending on location and availability (price variation)</li>
                        </ul>
                    </div>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>Basic Snow Clearing - Starting at $399/month</p>

                        <ul>
                        <li>Regular driveway and sidewalk clearing</li>
                        <li>On-call service</li>
                        </ul>
                    </div>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>Seasonal Package - $1,299 for the season</p>

                        <ul>
                        <li>Basic snow clearing service for the entire winter season from January to May</li>
                        </ul>
                    </div>                  

                    <div className='px-[10%]'>
                        <img src={HandShake} alt="Hand Shake" className='object-cover' />
                    </div>
                </div>

                <div className={activeService === 'land' ? `flex w-full flex-col lg:px-8 md:px-6 px-0 gap-5` : `hidden`}>
                    <p className='lg:text-3xl font-medium md:text-2xl text-xl'>Lawn Care Packages (June-Nov)</p>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>One-off Snow Clearing - Starting at $49-$99 per call</p>

                        <ul>
                            <li>On-call service depending on location and availability (price variation)</li>
                        </ul>
                    </div>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>Standard Lawn Care - Starting at $49/month</p>

                        <ul>
                            <li>Regular mowing and edging</li>
                            <li>Basic cleanup and trimming</li>
                        </ul>
                    </div>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>Premium Landscaping - Starting at $149/month</p>

                        <ul>
                            <li>Bi-weekly mowing, edging and trimming</li>
                            <li>Flower bed maintenance and seasonal cleanup</li>
                        </ul>
                    </div>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>Seasonal Package - $449 for the season</p>

                        <ul>
                            <li>Full landscaping services for June to November</li>
                        </ul>
                    </div>
                </div>

                <div className={activeService === 'custom' ? `flex w-full flex-col lg:px-8 md:px-6 px-0 gap-5` : `hidden`}>
                    <p className='lg:text-3xl font-medium md:text-2xl text-xl'>Custom Property Solutions</p>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>Tailored packages for larger clients or multiple properties
                            <a href='mailto:citywideproperties@gmail.com' className='text-blue-800 font-bold'> Contact us</a> for pricing.
                        </p>

                    </div>
                </div>

                <div className={activeService === 'discount' ? `flex w-full flex-col lg:px-8 md:px-6 px-0 gap-5` : `hidden`}>
                    <p className='lg:text-3xl font-medium md:text-2xl text-xl'>Discounted Bundles</p>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>Ultimate Seasonal Care Bundle - $1,599/year</p>

                        <ul>
                            <li>Snow Clearing + Lawn Care.</li>
                            <li>Seasonal maintenance for year-round peace of mind.</li>
                            <li>Include 5 on-call visits for free salt delivery.</li>
                            <li>Save $3000</li>
                        </ul>
                    </div>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>Premium All-Year Bundle - $2,399/year</p>

                        <ul>
                            <li>Property Management (Standard)</li>
                            <li>Snow Clearing + Lawn Care</li>
                            <li>Seasonal maintenance for year-round peace of mind</li>
                            <li>Includes 5 on-call visits for the free salt delivery</li>
                            <li>Priority Support with a dedicated account manager.</li>
                            <li>Save $1,900</li>
                        </ul>
                    </div>

                    <div className='text-justify leading-loose text-sm'>
                        <p className='text-lg font-medium'>Elite Property Owner Bundle - $4,999/year</p>

                        <ul>
                            <li>Property Management (Premium)</li>
                            <li>Complete Winter Care (Snow Clearing)</li>
                            <li>Premium Landscaping (Lawn Care)</li>
                            <li>Seasonal maintenance for year-round peace of mind</li>
                            <li>Includes 5 on-call visits for the free salt delivery</li>
                            <li>Priority Support with a dedicated account manager.</li>
                            <li>Includes 24/7 emergency response and financial reporting</li>
                            <li>Save $3,000</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div className='why_bundle_with_us flex flex-col gap-4 px-[7%]'>
            <p className='lg:text-3xl md:text-2xl text-xl font-medium text-center'>Why Bundle With Us?</p>

            <ul className='flex flex-col gap-4'>
                <li>Save More: Bundles offer up to 25% savings compared to individual services.</li>
                <li>One-Stop Solution: Simplify your property management with all services in one place.</li>
                <li>Priority Care: Bundle clients enjoy first-priority service.</li>
            </ul>
        </div>

        <div className="limited_offer my-5 text-center w-full">
            <p className='bg-blue-800 p-3 w-[30%] mx-auto text-white'>Limited-Time Offer!</p>

            <p className='my-5 font-bold text-blue-800 w-5/6 mx-auto'>Sign up for any service before 10th December 2024 and receive 2 FREE salt deliveries or $50 off your first month!</p>
        </div>

    </div>
  )
}

export default Services