import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-data">
      <img src={Images.economicalMobile} />
      <div className="content-wrapper">
        <p className="sale-title">Economical </p>
        <p className="sales-heading-sales">Clock-In</p>
        <p className="sales-type">Clock-Out Solution   </p>
        <p className="sales-description-sales">
        meMate’s integrated time management feature<br></br> allows employees to use the meMate mobile 
        <br></br>application as a time-tracking device. 
        They can<br></br> easily clock in and clock out via their mobile<br></br> devices,
         with timesheets automatically submitted<br></br> for approval the following week.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
