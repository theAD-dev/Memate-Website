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
        <p className="sale-title">Unique</p>
        <p className="sales-heading-sales">CRM Sales Tool</p>
        <p className="sales-type">for small business</p>
        <p className="sales-description-sales">
        It works as your CRM, allowing you to track the <br />progress of your leads, add notes for the entire <br/>team, and manage follow-ups. A simple yet <br/>effective solution.
        </p>
      </div>
      <div className="crmtool-image-wrapper">
        <div className="modal-contact">
          <img src={Images.ModalSaleContact} alt="ModalSaleContact" type="image/svg+xml" />
          <div className="menu-contact">
            <img src={Images.MenuContact} alt="MenuContact" type="image/svg+xml" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
