import React from 'react'

const Home = () => {
  return (
    <div className='pt-[10%]'>
      <div className="home_body">
        <p>A SIMPLE APPROACH TO PROPERTY MANAGEMENT</p>
        <p>We make it a pleasure to be a tenant and profitable to be a landlord</p>

        <div className="explore_and_get_in_touch">
          <div>
            <a>Explore Properties</a>
          </div>

          <div>
            <a>Get in touch today</a>
          </div>
        </div>
      </div>

      <div className='specialist_in_property_management'>
        <p>Specialist in Property Management</p>

        <p>As one of the most competitive property management companies in Nigeria, we offer a range of services to fill
          your property management needs. From marketing and screening to rent collection and ongoing maintenance; we make it a breeze to own and operate a rental property.
        </p>

        <div className='marketing_and_co'>
          <div className='marketing'>
            <div>
              <p>Marketing</p>

              <p>We minimize the vacancy period of your property with effective and inexpensive marketing techniques</p>
            </div>

            <div>
              <p>Wide Spread Marketing</p>

              <p>We make sure your property is presented in the best possible way. The better the presentation, the better the results.
              </p>

              <p><a href='/'>Get In Touch</a></p>
            </div>
          </div>

          <div className="screening">
            <div>
              <p>Screening</p>

              <p>Experienced property managers are experts at finding good tenants, and will take care of all details</p>
            </div>

            <div>
              <p>Rent Worry Free</p>

              <p>We screen each tenant and make sure that he or she meets our strict requirements; reducing your turnover rate.
              </p>

              <p><a href='/'>Get In Touch</a></p>
            </div>
          </div>

          <div className="payments">
            
          </div>

          <div className="maintenance">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home