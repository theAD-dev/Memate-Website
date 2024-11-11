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
          <img src={Images.proPowerful} className="filter-pipelineimage"/>
         
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Powerful</p>
        <p className="sales-heading-sales">Management </p>
        <p className="sales-type">Tool   </p>
        <p className="sales-description-sales">
        Send SMS or email updates to your clients, add<br></br> notes, link documentation, and keep a
         complete <br></br>record of the project with its entire history<br></br> available whenever you need it.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
