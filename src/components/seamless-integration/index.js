import React from "react";
import "./style.css";
// const IntegrationImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/integration.png"

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
        {/* <img src={IntegrationImage} alt="Integration"/> */}
        <img
              srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memateIntigration3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memateIntigration2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memateIntigration1x.png'} 1800w`}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
              src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memateIntigration3x.png'}
              alt="Integration"
            />
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
