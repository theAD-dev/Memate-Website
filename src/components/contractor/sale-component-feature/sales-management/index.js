import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-data" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img src={Images.ContractorManagement} type="image/svg+xml" />
      <div className="content-wrapper">
        <p className="sale-title">Effective</p>
        <p className="sales-heading-sales">Contractor</p>
        <p className="sales-type">Management </p>
        <p className="sales-description-sales">
        Designed for companies with multiple <br />
        subcontractors working regularly, meMate’s <br />
        Contractor Management feature enables you to <br />
        assign, track, and manage jobs efficiently. This <br />
        tool keeps project coordination straightforward <br />
        and organized for companies working closely with <br />
        external partners.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
