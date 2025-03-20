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
      <img src={Images.reportProactive} alt="reportProactive" type="image/svg+xml" />
      <div className="content-wrapper">
        <p className="sale-title">Proactive</p>
        <p className="sales-heading-sales">Department</p>
        <p className="sales-type">performance</p>
        <p className="sales-description-sales">
        Each department’s performance is automatically<br></br> tracked based on project cost breakdowns,<br></br> 
        allowing you to identify strong and weak 
        products<br></br> or services. This helps you make informed <br></br>decisions to optimise your business.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
