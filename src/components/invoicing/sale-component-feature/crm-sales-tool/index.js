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
