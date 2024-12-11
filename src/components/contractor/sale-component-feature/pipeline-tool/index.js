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
          <img src={Images.ContractorTeam} className="filter-pipelineimage"/>
         
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Collaborative</p>
        <p className="sales-heading-sales">System</p>
        <p className="sales-type">for your team </p>
        <p className="sales-description-sales">
        Submit work to contractors, approve upon <br/>completion, 
        and automatically receive their<br/> invoice.
         Assign contracts like any other job or task <br/>within the project with a simple click.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
