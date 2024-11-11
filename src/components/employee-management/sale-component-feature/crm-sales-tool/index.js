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
        <p className="sale-title">Centralised </p>
        <p className="sales-heading-sales">Smart  </p>
        <p className="sales-type">Timesheets  </p>
        <p className="sales-description-sales">
        No need for third-party applications—everything<br></br> can be 
        done within meMate. Your team can submit<br></br> their time, and the meMate Work 
        Application <br></br>automatically generates timesheets based 
        on <br></br>every approved time entry from the previous<br></br> week.
        </p>
      </div>
      <div className="">
        <div className="modal-contact">
          <img src={Images.CentralisedClient} />
          
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
