import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
const AgilePipeLineManagement = () => {
  return (
    <div className="aglie-pipeline-management-wrapper marginSpaceTop">
      <img src={Images.jobEssential} />
      <div className="content-wrapper">
        <p className="sale-title">Essential</p>
        <p className="sales-heading-sales">Dashboard</p>
        <p className="sales-type">View</p>
        <p className="sales-description-sales">
        View each team member’s availability, annual and<br></br> sick leaves, 
        along with their assigned jobs and<br></br> shifts—all in one 
        screen for easy management.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
