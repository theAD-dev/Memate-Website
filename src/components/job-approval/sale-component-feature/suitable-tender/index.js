import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SuitableTender = () => {
  return (
    <div className="suitable-tender-wrapper marginSpaceTop" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="4000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper">
        <p className="sale-title">Detailed</p>
        <p className="sales-heading-sales">Job, Shift,</p>
        <p className="sales-type">Claim Linking</p>
        <p className="sales-description-sales">
        Link jobs, shifts, and claims to existing projects in<br/> meMate to maintain complete control over 
        project budgets. <br/>This feature keeps all records organised<br/> in one place, ensuring seamless tracking and<br/> financial oversight.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/claim-linking-img.svg" alt="claim linking" />
     
      </div>
    </div>
  );
};

export default SuitableTender;
