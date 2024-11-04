import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const PipeLineTool = () => {
  return (
    <div className="pipeline-tool-wrapper marginSpaceBottom marginSpaceTop">
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
