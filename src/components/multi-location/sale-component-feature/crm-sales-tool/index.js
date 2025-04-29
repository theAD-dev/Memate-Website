import React from "react";
import "./style.css";
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
        <p className="sale-title">Secure </p>
        <p className="sales-heading-sales">Shared</p>
        <p className="sales-type">Database</p>
        <p className="sales-description-sales">
        Keep all client and supplier data centralized while<br></br> allowing each office to access necessary records <br></br>in real time.
        </p>
      </div>
      <div className="">
        <div className="modal-contact">
          <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/secure-image02.png"  alt="Secure"/>
          
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
