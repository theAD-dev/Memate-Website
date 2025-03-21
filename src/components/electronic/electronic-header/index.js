import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
const ElectronicHeader = () => {
  return (
    <div className='electronic-header-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <h1 className='electronic-top-heading'>Software that helps Australian repair shops<br/>
      operate efficiently</h1>
      <p className='electronic-middle-heading'>Electronic <br></br>Repair <br></br>Specialists</p>
      <p className='electronic-heading-content'>With MeMate, you can effortlessly communicate with clients and effortlessly submit jobs, all from a centralised and streamlined interface. Say goodbye to scattered systems and embrace the convenience of MeMate for unparalleled business management in the  electronics repair industry.</p>
      <Link to="https://app.memate.com.au/requestdemo" target="_blank"><button className='electronic-heading-button'>Book a Demo</button></Link>
    </div>
  )
}

export default ElectronicHeader
