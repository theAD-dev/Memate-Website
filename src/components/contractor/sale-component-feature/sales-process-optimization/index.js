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
        <p className="sales-heading-sales">Design</p>
        <p className="sales-type">and functionality</p>
        <p className="sales-description-sales">
        Designed to centralise all your contractors in one <br/>place. Submit work to individuals or groups, set <br/>tasks at an hourly or 
        fixed rate, and monitor <br/>performance with ease.
        </p>
      </div>
      <img src={Images.ContractorFuncti}  className="sales-process-optimization-image"/>
    </div>
  );
};

export default SalesProcessOptimiation;
