import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-process-optimization-wrapper ">
      <div className="content-wrapper">
        <p className="sale-title">Integrated</p>
        <p className="sales-heading-sales">Timesheets &</p>
        <p className="sales-type">Invoices</p>
        <p className="sales-description-sales">
        Based on submissions and approvals, your team <br></br>can send timesheets and 
        invoices directly to your <br></br>manager screen 
        for processing. This is a truly<br></br> unique functionality that streamlines the workflow.
        </p>
      </div>
      <img src={Images.jobIntegrated}  className="sales-process-optimization-image"/>
    </div>
  );
};

export default SalesProcessOptimiation;
