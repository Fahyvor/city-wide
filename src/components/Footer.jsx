import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='logo_and_undertaking flex flex-col items-center bg-gray-900 text-white lg:px-10 md:px-6 px-4 text-center py-9 lg:gap-8 md:gap-8 gap-4'>
            <img src="logo.png" alt="Logo" />
            <p className='uppercase text-2xl font-bold'>City Wide Property Management Inc</p>
            <p className='lg:text-md md:text-md text-sm lg:font-semibold md:font-semibold font-medium lg:w-3/4 md:w-3/4 w-full'>We are specialists in property management. We pride ourselves on delivering outstanding quality and service; we make it a pleasure to be a tenant and profitable to be a landlord.
            </p>

            <p className='text-black bg-white py-2 px-8 font-medium hover:bg-gray-200'><a href='/'>LEARN MORE</a></p>
        </div>

        <div className='bg-gray-950 text-white py-3 text-xs text-center'>
            <p>&copy; CITY WIDE PROPERTY MANAGEMENT INC | <br className='lg:hidden md:hidden flex'/> ALL RIGHTS RESERVED</p>
        </div>

    </div>
  )
}

export default Footer