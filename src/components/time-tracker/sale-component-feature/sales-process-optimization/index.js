import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-process-optimization-wrapper " data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper">
        <p className="sale-title">Productive</p>
        <p className="sales-heading-sales">Project</p>
        <p className="sales-type">Time Tracking</p>
        <p className="sales-description-sales">
        Connect your business projects with the time<br/> spent by your team. 
        meMate allows you to monitor <br/>and control the hours dedicated to each project,<br/> ensuring 
        better time management and resource<br/> allocation.
        </p>
      </div>
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/time-traker-Productive.svg" alt="Productive"  className="sales-process-optimization-image"/>
    </div>
  );
};

export default SalesProcessOptimiation;
