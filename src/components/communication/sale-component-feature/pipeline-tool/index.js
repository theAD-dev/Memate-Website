import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const PipeLineTool = () => {
  return (
    <div className="pipeline-tool-wrapper marginSpaceBottom marginSpaceTop" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="pipeline-image-wrapper">
          <img src={Images.commDynamic} className="filter-pipelineimage"/>
         
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Dynamic</p>
        <p className="sales-heading-sales">Integration with</p>
        <p className="sales-type">your team</p>
        <p className="sales-description-sales">
        You can start a chat on meMate to discuss your <br></br>project, assign tasks 
        to your team, and use the <br></br>meMate mobile app to communicate seamlessly <br></br>on the go.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
