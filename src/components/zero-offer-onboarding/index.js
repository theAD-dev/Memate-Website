import React from "react";
import "./style.css";
// import Images from "../../assests/images";
import { Link } from "react-router-dom";
// import ZeroScreenShot from "../../svg/ZeroScreenShot";


const ZeroOfferOnboarding = () => {

  return (
    <div className="onboarding-section" >
      <div className="onboarding-section-content">
        <div className="offer-opt">
          <div className="sab-heading">
            <div className="h2HeadingHome"> We offer zero fees for</div>
            <div className="headingSimmer">onboarding</div>
            <p>
            Plus, we provide a 14-day free trial because we believe our software will become indispensable to your business.
            </p>
            <div className="button-container">
              <Link to="https://app.memate.com.au/requestdemo"><button className="book-a-demo">Book a Demo</button></Link>
            </div>
            {/* <div id='request-btn-pricing' className="request-btn request-btn-bg">
            <Link to="https://dev.memate.com.au/onboarding" target="_blank" className="nav-btn--get-started get-started-border-box  navbar-link"><TronButton  text="Request a Demo" /></Link>
          </div> */}
            {/* <div className="request-btn request-btn-transpaent">
        <Link to='https://dev.memate.com.au/onboarding' target="_blank" className="nav-btn--get-started navbar-link"><TronButton text="Request a Demo" /></Link>
      </div> */}
          </div>
          <div className="offer-screen-shot" data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1100"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom">
            {/* <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/zero-onboarding.svg" alt="zeroScreenShot" type="image/svg+xml" /> */}
            <img
                srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/onboarding3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/onboarding2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/onboarding1x.png'} 1800w`}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/onboarding3x.png'} 
                alt="zeroScreenShot"
/>
            {/* <ZeroScreenShot/> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeroOfferOnboarding;
