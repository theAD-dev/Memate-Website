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
          <img src={Images.reportModern} alt="reportModern" />
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
