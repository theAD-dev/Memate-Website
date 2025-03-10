import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
const AutomotiveHeader = () => {
  return (
    <div className='automotive-header-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
     <h1 className='startup-top-heading'>Business Management Software <br/>for the Automotive Industry</h1>
      <p className='startup-middle-heading'>For Car<br/> Wrapping & <br/>Detailing  </p>
      <p className='startup-heading-content'>meMate streamlines operations for car wrapping and detailing services, managing workflows, contractors, and customer communication—all in one easy-to-use platform.</p>
      <Link to="https://app.memate.com.au/requestdemo" target="_blank"><button className='startup-heading-button'>Book a Demo</button></Link>
    </div>
  )
}

export default AutomotiveHeader
