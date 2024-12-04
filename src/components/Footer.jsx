import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='logo_and_undertaking'>
            <img src="logo.png" alt="Logo" />
            <p className='uppercase'>City Wide Property Management Inc</p>
            <p>We are specialists in property management. We pride ourselves on delivering outstanding quality and service; we make it a pleasure to be a tenant and profitable to be a landlord.
            </p>

            <p><a href='/'>LEARN MORE</a></p>
        </div>

        <div>
            <p>&copy; Copyright CITY WIDE PROPERTY MANAGEMENT INC | ALL RIGHTS RESERVED</p>
        </div>

    </div>
  )
}

export default Footer