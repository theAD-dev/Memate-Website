import React from "react";
import "./style.css";
const CRMSalesTool = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Proactive </p>
        <p className="sales-heading-salesF">Control</p>
        <p className="sales-typeF">Contractor Time</p>
        <p className="sales-description-salesF">
        Easily monitor and track your contractors’ time<br/> through a single,
        integrated dashboard. meMate<br/> provides real-time updates, giving you complete <br/>control over contractor time management and <br/>performance.
        </p>
      </div>
      <div className="sales-imageF">
          <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/contractor-time-img.svg"  alt="contractor-time"/>
      </div>
    </div>
  );
};

export default CRMSalesTool;
