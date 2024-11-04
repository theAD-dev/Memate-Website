import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const PipeLineTool = () => {
  return (
    <div className="pipeline-tool-wrapper marginSpaceBottom marginSpaceTop">
      <div className="pipeline-image-wrapper">
          <img src={Images.ClientStrategic} className="filter-pipelineimage"/>
         
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Strategic</p>
        <p className="sales-heading-sales">Allocate</p>
        <p className="sales-type">Shifts</p>
        <p className="sales-description-sales">
        Easily allocate shifts for your team <br></br>and allow them to submit sick leave and holiday 
        requests. All of <br></br>this can be managed and viewed within the all-in-<br></br>one team management dashboard.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
