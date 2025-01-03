import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-data" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/job-pproval-iphone-mockup.svg" alt="job-pproval-iphone-mockup" />
      <div className="content-wrapper">
        <p className="sale-title">Centralised</p>
        <p className="sales-heading-sales">Workflow</p>
        <p className="sales-type">Approval</p>
        <p className="sales-description-sales">
        meMate replaces all your traditional clock-in and <br/>clock-out time-tracking devices. With the meMate<br/> mobile app,
         tracking shifts becomes simpler and <br/> more efficient, streamlining workforce time<br/> management in your office.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
