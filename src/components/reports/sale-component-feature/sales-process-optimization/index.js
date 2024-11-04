import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-process-optimization-wrapper ">
      <div className="content-wrapper">
        <p className="sale-title">Detailed</p>
        <p className="sales-heading-sales">conversion </p>
        <p className="sales-type">reports</p>
        <p className="sales-description-sales">
        Track your conversions in real time—from <br></br>catching requests to processing quotes and <br></br>
        turning them into projects. See exact numbers at<br></br> each stage, empowering you to 
        make informed<br></br> executive decisions.
        </p>
      </div>
      <img src={Images.reportDetailed}  className="sales-process-optimization-image"/>
    </div>
  );
};

export default SalesProcessOptimiation;
