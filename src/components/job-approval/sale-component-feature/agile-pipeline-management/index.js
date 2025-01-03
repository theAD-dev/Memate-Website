import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
const AgilePipeLineManagement = () => {
  return (
    <div className="aglie-pipeline-management-wrapper marginSpaceTop" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/job-variations-img.svg" alt="variations"/>
      <div className="content-wrapper">
        <p className="sale-title">Advanced</p>
        <p className="sales-heading-sales">Variations</p>
        <p className="sales-type">Bonus & Deduction</p>
        <p className="sales-description-sales">
        meMate offers a simple system to adjust job<br/> prices based on specific circumstances. This<br/> feature streamlines 
        claims, ensures an official <br/>workflow, and facilitates clear communication<br/> between all parties involved.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
