import React from "react";
import "./style.css";
const PipeLineTool = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="sales-imageF">
          <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/collaborative-image.png" alt="job comprehensive" className="Collaborative"/>
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Collaborative</p>
        <p className="sales-heading-salesF">Shared </p>
        <p className="sales-typeF">Contractors & <br></br>Clients  </p>
        <p className="sales-description-salesF">
        Manage contractor assignments and client<br></br> interactions seamlessly across multiple locations.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
