
import "./style.css";
import { Helmet } from 'react-helmet';
import style from './contactus.module.scss';
import React from "react";
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';
import TronButton from "../../layout/hover-button/tourn-but";
import CallbackNow from "./callbacknow";
import EmailNow from "./emailnow";
import TronRequestADemo from "../../layout/hover-button/TronRequestADemo";


// const ContactUsMainImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/max.n.max_An_Office_Girl.png"
const ContactUsComponent = () => {



  return (
    <div id="contactUsPage">
    <Helmet>
    <title>Contact Us | meMate Business Management Software Support</title>
    <meta name="description" content="Get in touch with MeMate for support and inquiries about our business management software. We’re here to help Australian businesses thrive with CRM, ERP, and workflow automation solutions" />
    <meta property="og:title" content="Contact Us | meMate Business Management Software Support" />
      <meta property="og:description" content="Get in touch with MeMate for support and inquiries about our business management software. We’re here to help Australian businesses thrive with CRM, ERP, and workflow automation solutions" />
</Helmet>
      <div className="main-section contact-section" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className="main-heading" >contact us</div>
        <div className="main-image">
          {/* <img src={ContactUsMainImage} alt="contact us main image" width={400} height={400}/> */}
          <img
              // className="dog-img"
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ContactUs3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ContactUs2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ContactUs1x.png'} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ContactUs3x.png'}
            alt="contact us main image"
            width={400} height={400}
          />
          </div>
        <div className="mid-heading">
          <h1 className="h1tags">Contact the MeMate Team for Business Management <br/>Software Solutions in Australia</h1>
          {/* <p>a friendly memate specialist is ready to help.</p> */}
        </div>
        <div className="small-heading">
          <p className="contactParagraph">Made for Small to Medium Businesses for Simplicity and Order</p>
        </div>
        <div className="request-btn marginTop">
        <Link to='https://app.memate.com.au/requestdemo' target="_blank" className="nav-btn--get-started  navbar-link"><TronRequestADemo text="Book a Demo" /></Link>
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
                <p className="contactText">Contact</p>
                <p className="contactText">by phone</p>
              </div>
              <div className='query-small-heading'>
                <p className="ContactSubText">Request a callback.</p>
              </div>
            </div>
           
              
                <CallbackNow />
             
            
          </div>
          <div className='query-card query-2 '>
            <div className='query-main'>
              <div className='query-main-heading'>
                <p className="contactText">Chat with</p>
                <p className="contactText">our experts</p>
              </div>
              <div className='query-small-heading'>
                <p className="ContactSubText">Chat to us live anytime between:</p>
                <p className="ContactSubText">8am-6pm (AEST), Monday to Friday</p>
              </div>
            </div>
            <div className='query-button'>
             
                <button>Chat now</button>
           
            </div>
          </div>
          <div className='query-card query-3 '>
            <div className='query-main'>
              <div className='query-main-heading query-color'>
                <p className="contactText">Email</p>
                <p className="contactText">our experts</p>
              </div>
              <div className='query-small-heading query-color'>
                <p className="ContactSubText">Message us anytime.</p>
                
              </div>
            </div>
        
              <EmailNow />
              
            
          </div>
        </div>
        <div className="small-heading">
          <p className="ContactSubText">Please send any media or PR enquiries directly to pr@memate.com.au.</p>
          <p className="ContactSubText">If we have let you down in any way, we want to hear it at complaints@memate.com.au</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUsComponent;
