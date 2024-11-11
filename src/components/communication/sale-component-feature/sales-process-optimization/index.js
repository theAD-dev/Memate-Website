import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-process-optimization-wrapper " data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper">
        <p className="sale-title">Modern</p>
        <p className="sales-heading-sales">Ways of  </p>
        <p className="sales-type">communication </p>
        <p className="sales-description-sales">
        Use our mobile application to receive notes from<br></br> contractors 
        and<br></br> employees, store photos, and keep all 
        communication organized within the<br></br> project card.
        </p>
      </div>
      <img src={Images.commModern}  className="sales-process-optimization-image"/>
    </div>
  );
};

export default SalesProcessOptimiation;
