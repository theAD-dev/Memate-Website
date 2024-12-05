import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
const AgilePipeLineManagement = () => {
  return (
    <div className="aglie-pipeline-management-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img src={Images.pipeLineManagement} alt="pipeLineManagement"/>
      <div className="content-wrapper">
        <p className="sale-title">Agile</p>
        <p className="sales-heading-sales">Pipeline</p>
        <p className="sales-type">management</p>
        <p className="sales-description-sales">
        Streamline your sales process with our intuitive<br /> pipeline management tool. View all stages of your <br />sales funnel in one place, making it easy to track<br /> progress, manage leads, and close deals faster.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
