import React from "react";
import "./style.css";
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
        <p className="sale-title">Reliable</p>
        <p className="sales-heading-sales">Time Tracking</p>
        <p className="sales-type">and Reporting</p>
        <p className="sales-description-sales">
        Track time for each shift and contractor in real<br/> time, with automated weekly reporting. 
        meMate <br/>provides tools for complete business automation, <br/>ensuring accurate time
         management and<br/> streamlined reporting processes.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/time-traker-report.svg" alt="traker-report" />
     
      </div>
    </div>
  );
};

export default SuitableTender;
