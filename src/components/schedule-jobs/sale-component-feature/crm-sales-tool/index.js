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
        <p className="sale-title">Proactive </p>
        <p className="sales-heading-sales">Shift Management  </p>
        <p className="sales-type">app for employees</p>
        <p className="sales-description-sales">
        meMate offers employee rostering with complete <br/>control. Employees can 
        use the meMate<br/> application to easily view all their assigned shifts<br/> and 
        track their work time efficiently.
        </p>
      </div>
      <div className="">
        <div className="modal-contact">
          <img src={Images.jobProactive} />
          
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
