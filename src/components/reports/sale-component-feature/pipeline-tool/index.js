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
          <img src={Images.reportAdvanced} alt="reportAdvanced" className="filter-pipelineimage" type="image/svg+xml"/>
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Advanced</p>
        <p className="sales-heading-sales">business </p>
        <p className="sales-type">overview    </p>
        <p className="sales-description-sales">
        Get a real-time view of key business metrics,<br></br> including quote volumes, 
        payments, receivables,<br></br> invoices, and unpaid amounts. Easily compare<br></br> these 
        figures with last month’s performance to<br></br> track progress and trends.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
