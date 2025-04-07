import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
const AgilePipeLineManagement = () => {
  return (
    <div className="aglie-pipeline-management-wrapper marginSpaceTop" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img src={Images.jobIphone06} alt="jobIphone06" type="image/svg+xml" />
      <div className="content-wrapper">
        <p className="sale-title">Modern</p>
        <p className="sales-heading-sales">Utilise meMate</p>
        <p className="sales-type">mobile application</p>
        <p className="sales-description-sales">
        With the meMate mobile application, your team of<br/> employees and contractors can view, approve,<br/> and 
        perform shifts and jobs assigned to them.<br/> This ensures clear communication and 
        smooth <br/>task execution directly from their mobile devices.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
