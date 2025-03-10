import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
const IndustryHeader = () => {
  return (
    <div className='industry-header-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <h1 className='industry-top-heading'>Empowering Creative Agencies with<br/> Business Management Software</h1>
      <p className='industry-middle-heading'>marketing & <br></br>creative <br></br>agencies</p>
      <p className='industry-heading-content'>MeMate – Comprehensive Business Management Software for Creative Agencies. Allows you to combine the best features of project management, accounting, quoting, and invoicing. Communicate with clients and submit jobs from a single, centralised platform.</p>
      <Link to="https://app.memate.com.au/requestdemo" target="_blank"><button className='industry-heading-button'>Book a Demo</button></Link>
    </div>
  )
}

export default IndustryHeader
