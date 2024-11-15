import React from "react";
import "./style.css";
import Images from "../../assests/images";
import { Link } from "react-router-dom";
import TronButton from "../../layout/hover-button/tourn-but";

const ZeroOfferOnboarding = () => {

  return (
    <div className="onboarding-section" >
      <div className="onboarding-section-content">
        <div className="offer-opt">
          <div className="sab-heading">
            <h2> We offer zero fees for</h2>
            <h1>onboarding</h1>
            <p>
            Plus, we provide a 14-day free trial because we believe our software will become indispensable to your business.
            </p>
            <div className="button-container">
              <Link to="https://dev.memate.com.au/requestdemo"><button className="book-a-demo">Request a Demo</button></Link>
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
            <img src={Images.zeroScreenShot} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeroOfferOnboarding;
