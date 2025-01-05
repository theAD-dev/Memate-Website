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
      <img src={Images.ContractorSystem} alt="ContractorSystem" />
      <div className="content-wrapper">
        <p className="sale-title">Versatile</p>
        <p className="sales-heading-sales">new</p>
        <p className="sales-type">System</p>
        <p className="sales-description-sales">
        The system is designed to assist your contractors<br/> by reminding them about shifts, jobs, and <br/>payments. 
        This helps both the company and<br/> contractors work seamlessly, stay motivated, and<br/> collaborate in one space.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
