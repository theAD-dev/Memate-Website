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
      <img src={Images.employeeAdvanced} />
      <div className="content-wrapper">
        <p className="sale-title">Advanced</p>
        <p className="sales-heading-sales">meMate</p>
        <p className="sales-type">Work Application</p>
        <p className="sales-description-sales">
        The meMate Work Application is designed to <br></br>keep each team member informed about <br></br>everything happening in your company. 
        It <br></br>features a built-in to-do list and calendar for seamless and<br></br> comfortable workflow management.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
