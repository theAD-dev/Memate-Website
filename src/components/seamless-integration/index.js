import React from "react";
import "./style.css";

const SeamlessInegration = () => {
  return (
    <div className="integration-section" >
      <div className="integation-title ">
        <span className="gradientAnimenate">seamless integration</span>
      </div>
      <div className="integration-brand-container shadowRightline3 shadowLeftline3">
        <img
              srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memateIntigration3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memateIntigration2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memateIntigration1x.png'} 1800w`}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
              src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memateIntigration3x.png'}
              alt="Integration"/>
      </div>
      <div className="integration-disp" >
          <p className="sequel_sans_roman_head">We use Stripe for payments, AWS to securely store your data, and Google Analytics to provide valuable insights.</p>
      </div>
    </div>
  );
};

export default SeamlessInegration;
