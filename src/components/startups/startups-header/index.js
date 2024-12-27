import React from 'react'
import './style.css'
const StartupsHeader = () => {
  return (
    <div className='startup-header-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className='startup-top-heading'>Management Software for </h1>
      <p className='startup-middle-heading'>Startups and<br/> New Businesses</p>
      <p className='startup-heading-content'>meMate is designed to help you kickstart your business with the right workflow from day one. It’s the ideal tool to set up your operations smoothly and efficiently as you grow.</p>
      <button className='startup-heading-button'>Request a Demo</button>
    </div>
  )
}

export default StartupsHeader
