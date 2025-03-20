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
        <p className="sale-title">Effective</p>
        <p className="sales-heading-sales">Shift and</p>
        <p className="sales-type">job templates</p>
        <p className="sales-description-sales">
        Create templates for shifts and jobs to streamline<br/> your weekly 
        scheduling and allocation process.<br/> Save time by reusing templates 
        for recurring <br/>tasks, ensuring quick and efficient job<br/> management.
        </p>
      </div>
      <img src={Images.jobEffective01} alt="jobEffective01"  className="sales-process-optimization-image" type="image/svg+xml" />
    </div>
  );
};

export default SalesProcessOptimiation;
