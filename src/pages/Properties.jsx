import React from 'react'
import ServicesImage from '../assets/servicesImage.jpg'
import Portfolio1 from '../assets/portfolio1.png'

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

const Properties = () => {
  return (
    <div>
        <div className='lg:pt-[18%] md:pt-[18%] pt-[25%] w-full pb-[9%] bg-gray-900' style={{ backgroundImage: `url(${ServicesImage})` }}>
            <p className='lg:text-6xl md:text-4xl text-3xl leading-relaxed text-center font-bold text-white lg:mx-0 md:mx-0 mx-3'> OUR PROPERTIES</p>
            <p className='text-white text-center lg:text-xl md:text-xl text-sm lg:w-full md:w-full w-5/6 mx-auto my-6'>Search our portfolio of properties</p>
        </div>
        
        <div>
            <p className='text-center text-3xl font-medium my-4'>Properties</p>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 p-4'>
                {availableProperties.map((properties, index) => (
                <div key={index} className="card w-full px-5">
                    <img src={properties.image} alt={properties.name} className='object-cover w-full'/>
                    <p className='text-center font-medium text-md my-2'>{properties.name}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Properties