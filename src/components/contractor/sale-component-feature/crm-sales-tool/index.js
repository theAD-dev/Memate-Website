import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const CRMSalesTool = () => {
  return (
    <div className="crmtool-manager-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper">
        <p className="sale-title">Convenient</p>
        <p className="sales-heading-sales">Work</p>
        <p className="sales-type">scheduling</p>
        <p className="sales-description-sales">
        With meMate, you can issue work contracts to<br/> individual 
        contractors in your organisation,<br/> allowing them to accept, complete, 
        and report<br/> work for approval directly through the meMate application.
        </p>
      </div>
      <div className="">
        <div className="modal-contact">
          <img src={Images.ContractorSche} />
          
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
