import React from 'react'
import style from './coming-soon-module.css';
import Images from "../assests/images";

const ComingSoon = () => {
  return (
    <div className={`ComingSonnBg`} style={{ backgroundImage: `url(${Images.backgroundPattern})` }} >
<h1 data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">coming <br></br>soon</h1>
<p data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">We couldn’t wait to launch our updated website, so a few sections are still under construction. Stay tuned—new content is on its way!</p>
<img src={Images.comingsoonPic} alt={Images.comingsoonPic} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"/>
      </div>
    
    
    
  )
}

export default ComingSoon