import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
const AgilePipeLineManagement = () => {
  return (
    <div className="aglie-pipeline-management-wrapper marginSpaceTop" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img src={Images.commOrganised} alt="commOrganised" type="image/svg+xml" />
      <div className="content-wrapper">
        <p className="sale-title">Organised</p>
        <p className="sales-heading-sales">Internal</p>
        <p className="sales-type">To-Do list </p>
        <p className="sales-description-sales">
        meMate includes an internal to-do list for you and<br></br> your team. You can add 
        project segments and<br></br> assign them to different contractors, improving <br></br>
        communication and reducing mistakes.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
