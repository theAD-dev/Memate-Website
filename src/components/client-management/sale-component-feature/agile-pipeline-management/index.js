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
      <img src={Images.ClientInformation} alt="ClientInformation" className="" type="image/svg+xml"/>
      <div className="content-wrapper ">
        <p className="sale-title">Dynamic</p>
        <p className="sales-heading-sales">Detailed</p>
        <p className="sales-type">client information </p>
        <p className="sales-description-sales">
        You can add multiple client locations, including<br></br> detailed company descriptions, 
        key personnel,<br></br> and addresses formatted to Australian standards.<br></br> We’ve thought of everything.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
