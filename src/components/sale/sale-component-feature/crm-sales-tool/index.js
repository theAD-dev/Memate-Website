import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const CRMSalesTool = () => {
  return (
    <div className="crmtool-manager-wrapper">
      <div className="content-wrapper">
        <p className="sale-title">Unique</p>
        <p className="sales-heading-sales">CRM Sales Tool</p>
        <p className="sales-type">for small business</p>
        <p className="sales-description-sales">
          Elevate your small business with our tailored CRM <br></br>software.
          Designed to streamline customer<br></br> relations, our tool helps you
          manage interactions,<br></br> enhance engagement, and drive sales, all
          within a<br></br>
          user-friendly platform built for growth and<br></br> efficiency.
        </p>
      </div>
      <div className="crmtool-image-wrapper">
        <div className="modal-contact">
          <img src={Images.ModalSaleContact} />
          <div className="menu-contact">
            <img src={Images.MenuContact} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
