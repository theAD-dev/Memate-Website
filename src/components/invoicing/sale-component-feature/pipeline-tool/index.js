import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const PipeLineTool = () => {
  return (
    <div className="pipeline-tool-wrapper marginSpaceBottom marginSpaceTop">
      <div className="pipeline-image-wrapper">
          <img src={Images.invoConvenient} className="filter-pipelineimage"/>
         
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Convenient</p>
        <p className="sales-heading-sales">online </p>
        <p className="sales-type">payments    </p>
        <p className="sales-description-sales">
        Allow your clients to pay invoices online, making<br></br> the payment process 
        quick and easy. This <br></br> convenience ensures a smoother experience for <br></br> every one of your clients.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
