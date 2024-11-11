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
        <p className="sale-title">Comprehensive</p>
        <p className="sales-heading-sales">Budget </p>
        <p className="sales-type">management </p>
        <p className="sales-description-sales">
        Keep track of your budget and operational profit<br></br> with ease. All linked expenses and jobs assigned <br></br>to contractors or 
        time logged by employees are<br></br> automatically reflected in real-time.
        </p>
      </div>
      <img src={Images.proComprehensive}  className="sales-process-optimization-image"/>
    </div>
  );
};

export default SalesProcessOptimiation;
