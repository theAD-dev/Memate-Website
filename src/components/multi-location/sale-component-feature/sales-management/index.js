import React from "react";
import "./style.css";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-data" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/accessible-image01.png" alt="Accessible" />
      <div className="content-wrapper">
        <p className="sale-title">Accessible</p>
        <p className="sales-heading-sales">Share Templates </p>
        <p className="sales-type">Across Offices </p>
        <p className="sales-description-sales">
        Standardise your operations by sharing templates<br></br> for quotes, invoices, and reports across all<br></br> locations.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
