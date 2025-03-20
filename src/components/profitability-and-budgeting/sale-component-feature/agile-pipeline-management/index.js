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
      <img src={Images.budEssential} alt="budEssential" type="image/svg+xml" />
      <div className="content-wrapper">
        <p className="sale-title">Essential</p>
        <p className="sales-heading-sales">Data  </p>
        <p className="sales-type">at every step</p>
        <p className="sales-description-sales">
        meMate displays only the essential data to help <br></br>you navigate through the 
        numbers with ease, <br></br>without needing a full-time operations person.<br></br> 
        Our system is designed to simplify without <br></br>compromising on depth and detail.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
