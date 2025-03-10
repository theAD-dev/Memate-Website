import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
const PhotoHeader = () => {
  return (
    <div className='photo-video-header-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <h1 className='photo-video-top-heading'>Project management software for </h1>
      <p className='photo-video-middle-heading'>Photo & Video <br></br>Agency</p>
      <p className='photo-video-heading-content'>meMate is designed to suit creative agencies that produce content. It is ideal for companies that need to manage employees and contractors to produce photo and video content, keep track of all variables and people, and ensure the project stays within budget. meMate – project management software for creative agencies.</p>
      <Link to="https://app.memate.com.au/requestdemo" target="_blank"><button className='photo-video-heading-button'>Book a Demo</button></Link>
    </div>
  )
}

export default PhotoHeader
