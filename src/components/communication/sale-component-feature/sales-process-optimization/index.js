import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-process-optimization-wrapper ">
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
