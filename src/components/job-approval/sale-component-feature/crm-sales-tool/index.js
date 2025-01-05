import React from "react";
import "./style.css";
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
        <p className="sale-title">Organised </p>
        <p className="sales-heading-sales">Claims</p>
        <p className="sales-type">System</p>
        <p className="sales-description-sales">
        Every job assigned to a contractor in meMate <br/>requires approval upon completion. Once<br/> approved, 
        the job is added to the payment <br/>schedule for the following week, ensuring <br/>accurate and timely processing.
        </p>
      </div>
      <div className="">
        <div className="modal-contact">
          <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/job-claims-img.svg"  alt="job-claims-img"/>
          
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
