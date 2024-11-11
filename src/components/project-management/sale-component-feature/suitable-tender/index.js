import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SuitableTender = () => {
  return (
    <div className="suitable-tender-wrapper marginSpaceTop" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="4000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper">
        <p className="sale-title">Organised</p>
        <p className="sales-heading-sales">Business </p>
        <p className="sales-type">Dashboard</p>
        <p className="sales-description-sales">
        The Management Tab is designed to give you a <br></br>real-time overview of all 
        your ongoing projects,<br></br> allowing you to track progress, 
        performance, <br></br>efficiency, and budgeting. We’ve made sure this is<br></br> the main screen for your everyday use.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
      <img src={Images.proOrganised} />
     
      </div>
    </div>
  );
};

export default SuitableTender;
