import React from "react";
import "./style.css";
import Images from "../../assests/images";

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
              <button className="book-a-demo">Request a Demo</button>
            </div>
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
