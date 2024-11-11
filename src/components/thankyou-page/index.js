import React from 'react'
import style from './thankyou.module.scss';
import Images from "../../assests/images";
import { Link } from "react-router-dom";
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

const ThankYouComponents  = () => {
  return (
    <div className={`${style.Errorpage}`}>
    <div className={`${style.imgText}`}>
        <h1>thank <br></br> You</h1>
        <img className={style.images} src={Images.koalaTransparent} alt={Images.koalaTransparent} />
      </div>
    <div className={`${style.TextHead}`}>
        <h2>Thank You for Being Awesome!</h2>
        <p>Your support means the world to us. We’re excited to continue this journey together!</p>
        <div className={`${style.button}`}>
        <Link to="/contact-us" ><img src={arrowIconBack} alt="Arrow" /> <span>Back</span></Link>
        <Link to="/" >Home</Link>
      </div>
      </div>
      </div>
    
    
    
  )
}

export default ThankYouComponents 