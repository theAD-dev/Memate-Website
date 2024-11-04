import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-process-optimization-wrapper ">
      <div className="content-wrapper">
        <p className="sale-title">Powerful</p>
        <p className="sales-heading-sales">projects  </p>
        <p className="sales-type">overview  </p>
        <p className="sales-description-sales">
        View all your projects on one screen, including the <br></br>cost of sales, 
        contracts, invoices, and operational <br></br>expenses allocated to each project. This provides <br></br>a 
        truly unique system that calculates the exact<br></br> operational profit for each project.
        </p>
      </div>
      <img src={Images.budPowerful}  className="sales-process-optimization-image"/>
    </div>
  );
};

export default SalesProcessOptimiation;
