import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
const AgilePipeLineManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="sales-imageF">
      <img src={Images.jobIphone06} alt="jobIphone06" type="image/svg+xml" /></div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Modern</p>
        <p className="sales-heading-salesF">Utilise meMate</p>
        <p className="sales-typeF">mobile application</p>
        <p className="sales-description-salesF">
        With the meMate mobile application, your team of<br/> employees and contractors can view, approve,<br/> and 
        perform shifts and jobs assigned to them.<br/> This ensures clear communication and 
        smooth <br/>task execution directly from their mobile devices.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
