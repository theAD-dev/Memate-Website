import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const CRMSalesTool = () => {
  return (
    <div className="crmtool-manager-wrapper">
      <div className="content-wrapper">
        <p className="sale-title">Automated </p>
        <p className="sales-heading-sales">invoice  </p>
        <p className="sales-type">management   </p>
        <p className="sales-description-sales">
        All your invoices are in one place, with easy<br></br> options to mark partial or full payments. A simple<br></br> 
         follow-up button helps you reduce the time spent<br></br>  chasing overdue invoices for your business.
        </p>
      </div>
      <div className="">
        <div className="modal-contact">
          <img src={Images.invoAutomated} />
          
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
