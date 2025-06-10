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
          <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/collaborative-image.png" alt="job comprehensive" className="Collaborative"/>
         
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Collaborative</p>
        <p className="sales-heading-sales">Shared </p>
        <p className="sales-type">Contractors & <br></br>Clients  </p>
        <p className="sales-description-sales">
        Manage contractor assignments and client<br></br> interactions seamlessly across multiple locations.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
