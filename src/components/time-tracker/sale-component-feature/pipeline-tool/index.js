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
          <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/time-traker-comprehensive.svg" alt="comprehensive" className="filter-pipelineimage"/>
         
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Comprehensive</p>
        <p className="sales-heading-sales">Contractors</p>
        <p className="sales-type">job scheduling</p>
        <p className="sales-description-sales">
        Schedule jobs for contractors and view all<br/> assignments in a 
        single calendar. Track the time <br/>spent on each job, monitor job 
        statuses, and <br/>review notes for seamless contractor <br/>management.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
