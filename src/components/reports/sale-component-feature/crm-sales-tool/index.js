import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const CRMSalesTool = () => {
  return (
    <div className="crmtool-manager-wrapper">
      <div className="content-wrapper">
        <p className="sale-title">Modern </p>
        <p className="sales-heading-sales">targets    </p>
        <p className="sales-type">reports   </p>
        <p className="sales-description-sales">
        Set monthly targets for your team and let them <br></br>track their results in real time. 
        Clear and objective<br></br> targets are essential 
        for motivating both<br></br> management and sales teams, and meMate<br></br> makes it easy to monitor progress.
        </p>
      </div>
      <div className="">
        <div className="modal-contact">
          <img src={Images.reportModern} />
          
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
