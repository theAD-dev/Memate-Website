import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const PipeLineTool = () => {
  return (
    <div className="pipeline-tool-wrapper marginSpaceBottom marginSpaceTop" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="pipeline-image-wrapper">
          <img src={Images.invoConvenient} className="filter-pipelineimage" type="image/svg+xml"/>
         
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
