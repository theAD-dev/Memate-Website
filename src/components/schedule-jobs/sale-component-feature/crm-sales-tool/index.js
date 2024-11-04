import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const CRMSalesTool = () => {
  return (
    <div className="crmtool-manager-wrapper">
      <div className="content-wrapper">
        <p className="sale-title">Versatile </p>
        <p className="sales-heading-sales">job  </p>
        <p className="sales-type">scheduling</p>
        <p className="sales-description-sales">
        Through the application, you can communicate<br></br> with your 
        contractors to assign jobs, track their<br></br> performance, 
        schedule work, and process their<br></br> invoices seamlessly.
        </p>
      </div>
      <div className="">
        <div className="modal-contact">
          <img src={Images.jobVersatile} />
          
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
