import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const CRMSalesTool = () => {
  return (
    <div className="crmtool-manager-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper">
        <p className="sale-title">Comprehensive </p>
        <p className="sales-heading-sales">Project Updates & </p>
        <p className="sales-type">Notifications</p>
        <p className="sales-description-sales">
        We’ve developed multiple features that allow you <br></br>to update clients via email or 
        SMS directly from <br></br>the project card, keeping 
        them informed about<br></br> current progress. You can also view the entire<br></br> communication 
        history in one place.
        </p>
      </div>
      <div className="">
        <div className="modal-contact">
          <img src={Images.commComprehensive} alt="commComprehensive" type="image/svg+xml" />
          
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
