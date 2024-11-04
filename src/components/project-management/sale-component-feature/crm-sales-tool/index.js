import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const CRMSalesTool = () => {
  return (
    <div className="crmtool-manager-wrapper">
      <div className="content-wrapper">
        <p className="sale-title">Streamlined </p>
        <p className="sales-heading-sales">Navigation &   </p>
        <p className="sales-type">Control  </p>
        <p className="sales-description-sales">
        Assign jobs to your contractors, shifts to your<br></br> employees,
         and track project-related expenses—<br></br> all with just one click of a button.
        </p>
      </div>
      <div className="">
        <div className="modal-contact">
          <img src={Images.proStreamlined} />
          
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
