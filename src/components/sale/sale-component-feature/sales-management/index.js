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
      <img src={Images.leadsTable}  alt="leadsTable" type="image/svg+xml"/>
      <div className="content-wrapper">
        <p className="sale-title">Leads</p>
        <p className="sales-heading-sales">Sales</p>
        <p className="sales-type">management</p>
        <p className="sales-description-sales">
        The Sales tab functions as a central hub for all 
        your active sales, requests, quotes, drafts, and 
        proposals. It’s a simplified version of a sales 
        pipeline for any business.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
