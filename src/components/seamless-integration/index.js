import React from "react";
import "./style.css";
const IntegrationImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/integration.png"

const SeamlessInegration = () => {
  return (
    <div className="integration-section" >
      <div className="integation-title">
        <h3>Memate</h3>
        <span className="gradientAnimenate">seamless</span>
        <span className="gradientAnimenate">integration</span>
      </div>
      <div className="integration-brand-container" data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1800"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom">
        <img src={IntegrationImage} alt="Integration" />
      </div>
      <div className="integration-disp" data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1900"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom">
          <p>We use Stripe for payments, AWS to securely store your data, and Google Analytics to provide valuable insights.</p>
      </div>
    </div>
  );
};

export default SeamlessInegration;
