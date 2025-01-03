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
      <img src={Images.jobPlanning} />
      <div className="content-wrapper">
        <p className="sale-title">Convenient</p>
        <p className="sales-heading-sales">Shift Scheduling and</p>
        <p className="sales-type">Planning</p>
        <p className="sales-description-sales">
        With meMate, you can schedule jobs seamlessly from one mobile device to your dashboard. 
        The meMate Work application is designed to collaborate effectively with all your contractors and employees. Schedule shifts and jobs, 
        while using the application as a clock-in/clock-out time tracker to generate accurate timesheets.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
