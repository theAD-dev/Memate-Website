import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-data">
      <img src={Images.jobUserFriendly} />
      <div className="content-wrapper">
        <p className="sale-title">User-friendly</p>
        <p className="sales-heading-sales">Shift </p>
        <p className="sales-type">scheduling </p>
        <p className="sales-description-sales">
        meMate allows you to schedule shifts for both part-time and full-time employees. 
        It also acts as a time tracker, 
        automatically generating timesheets based on logged hours.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
