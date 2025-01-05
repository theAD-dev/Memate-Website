import React from "react";
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
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/time-traker-workhours.svg" alt="workhours"/>
      <div className="content-wrapper">
        <p className="sale-title">Advanced</p>
        <p className="sales-heading-sales">Monitor Employee</p>
        <p className="sales-type">Work Hours</p>
        <p className="sales-description-sales">
        Track your employees’ work hours both in the <br/>office and on-site with meMate. 
        Using dedicated<br/> applications for employees and contractors, 
        you <br/>can monitor time with ease while providing a <br/>convenient and user-friendly experience for your <br/>team.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
