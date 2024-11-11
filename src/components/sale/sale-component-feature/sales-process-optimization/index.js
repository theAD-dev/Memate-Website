import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-process-optimization-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper">
        <p className="sale-title">Powerful and simple</p>
        <p className="sales-heading-sales">Sales Process</p>
        <p className="sales-type">optimisation <br></br> software</p>
        <p className="sales-description-sales">
          Encourage your employees and subcontractors <br></br>with customised bonus
          schemes and incentives<br></br> for each project, fostering a motivated and<br></br>
          productive workforce.
        </p>
      </div>
      <img src={Images.salesProtestOptimization}  className="sales-process-optimization-image"/>
    </div>
  );
};

export default SalesProcessOptimiation;
