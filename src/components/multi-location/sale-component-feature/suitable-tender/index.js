import React from "react";
import "./style.css";
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
        <p className="sale-title">Centralised</p>
        <p className="sales-heading-sales">Chat & </p>
        <p className="sales-type">To-Do List</p>
        <p className="sales-description-sales">
        Enable smooth communication and task<br></br> management across all locations with a shared <br></br>chat and task system.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/centralised-image.png" alt="Centralised" />
     
      </div>
    </div>
  );
};

export default SuitableTender;
