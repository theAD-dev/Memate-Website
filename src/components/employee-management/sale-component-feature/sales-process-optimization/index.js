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
        <p className="sale-title">Powerful</p>
        <p className="sales-heading-sales">Accountable </p>
        <p className="sales-type">Time Tracking </p>
        <p className="sales-description-sales">
        Make the time spent by your team accountable.<br></br> Based on individual rates and submitted hours, <br></br>
        meMate provides real-time visibility of your<br></br> operating costs, ensuring accurate<br></br> financial tracking.
        </p>
      </div>
      <img src={Images.PowerfulEmployee}  className="sales-process-optimization-image"/>
    </div>
  );
};

export default SalesProcessOptimiation;
