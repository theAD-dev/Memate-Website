import React from "react";
import "./style.css";
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
          <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/job-comprehensive-img.svg" alt="job comprehensive" className="filter-pipelineimage"/>
         
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Collaborative</p>
        <p className="sales-heading-sales">Comprehensive </p>
        <p className="sales-type">Job Details</p>
        <p className="sales-description-sales">
        Every submitted job in meMate includes all<br/> necessary information, such as the initial 
        planned <br/>budget, planned time, actual cost, and actual time<br/> spent. This ensures managers have 
        complete and <br/>clear data for informed decision-making during<br/> the approval process.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
