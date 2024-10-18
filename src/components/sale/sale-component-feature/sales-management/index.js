import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-data">
      <img src={Images.leadsTable} />
      <div className="content-wrapper">
        <p className="sale-title">Leads</p>
        <p className="sales-heading-sales">Sales</p>
        <p className="sales-type">management</p>
        <p className="sales-description-sales">
          Our software automates your workflows, making your business operations
          easier. It’s based on proven strategies and is designed for quick
          setup, boosting efficiency from day one.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
