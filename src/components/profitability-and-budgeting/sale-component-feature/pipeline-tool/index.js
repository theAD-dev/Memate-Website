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
          <img src={Images.budVersatile} className="filter-pipelineimage"/>
         
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Versatile</p>
        <p className="sales-heading-sales">budget</p>
        <p className="sales-type">control</p>
        <p className="sales-description-sales">
        View your overall budget as well as the budget for each position in meMate. 
        Use this data to create jobs for your contractors and 
        schedule time shifts for your team, ensuring efficient resource allocation.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
