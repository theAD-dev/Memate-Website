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
          <img src={Images.jobPowerful} className="filter-pipelineimage"/>
         
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Powerful</p>
        <p className="sales-heading-sales">tool for</p>
        <p className="sales-type">your team </p>
        <p className="sales-description-sales">
        Manage every team member from one screen—<br></br>whether you need to 
        schedule shifts for <br></br>employees or assign jobs to contractors, 
        meMate<br></br> makes it simple and efficient.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
