
import "./style.css";
import { Helmet } from 'react-helmet';
import style from './contactus.module.scss';
import React from "react";
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';
import TronButton from "../../layout/hover-button/tourn-but";
import CallbackNow from "./callbacknow";
import EmailNow from "./emailnow";


const ContactUsMainImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/max.n.max_An_Office_Girl.png"
const ContactUsComponent = () => {



  return (
    <div id="contactUsPage">
    <Helmet>
    <title>Contact Us | meMate Business Management Software Support</title>
    <meta name="description" content="Get in touch with MeMate for support and inquiries about our business management software. We’re here to help Australian businesses thrive with CRM, ERP, and workflow automation solutions" />
    <meta property="og:title" content="Contact Us | meMate Business Management Software Support" />
      <meta property="og:description" content="Get in touch with MeMate for support and inquiries about our business management software. We’re here to help Australian businesses thrive with CRM, ERP, and workflow automation solutions" />
</Helmet>
      <div className="main-section" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className="main-heading" >contact us</div>
        <div className="main-image"><img src={ContactUsMainImage} alt="contact us main image" width={545} height={545}/></div>
        <div className="mid-heading">
          <h1 className="h1tags">Contact the MeMate Team for Business Management <br/>Software Solutions in Australia</h1>
          {/* <p>a friendly memate specialist is ready to help.</p> */}
        </div>
        <div className="small-heading">
          <p>Made for Small to Medium Businesses for Simplicity and Order</p>
        </div>
        <div className="request-btn" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <Link to='https://dev.memate.com.au/requestdemo' target="_blank" className="nav-btn--get-started  navbar-link"><TronButton text="Get started" /></Link>
      </div>
      </div>
      <div className='query-section' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className='query-cards'>
          <div className='query-card query-1 '>
            <div className='query-main '>
              <div className='query-main-heading'>
                <p>Contact</p>
                <p>by phone</p>
              </div>
              <div className='query-small-heading'>
                <p>Call us anytime on 1300 630 00</p>
             
                <p>to request a callback.</p>
              </div>
            </div>
            <div className='query-button'>
              
                <CallbackNow />
             
            </div>
          </div>
          <div className='query-card query-2 '>
            <div className='query-main'>
              <div className='query-main-heading'>
                <p>Chat with</p>
                <p>our experts</p>
              </div>
              <div className='query-small-heading'>
                <p>Chat to us live anytime between:</p>
                <p>8am-6pm (AEST), Monday to Friday</p>
                <p>10am-6pm (AEST), Saturday</p>
                <p>& Sunday</p>
              </div>
            </div>
            <div className='query-button'>
              <div>
                <p>Chat now</p>
              </div>
            </div>
          </div>
          <div className='query-card query-3 '>
            <div className='query-main'>
              <div className='query-main-heading query-color'>
                <p>Email</p>
                <p>our experts</p>
              </div>
              <div className='query-small-heading query-color'>
                <p>Message us anytime</p>
                <p>at hello@memate.com.au</p>
              </div>
            </div>
            <div className='query-button query-button-color'>
              <div>
              <EmailNow />
              </div>
            </div>
          </div>
        </div>
        <div className="small-heading">
          <p>Please send any media or PR enquiries directly to pr@memate.com.au.</p>
          <p>If we have let you down in any way, we want to hear it at complaints@memate.com.au</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUsComponent;
