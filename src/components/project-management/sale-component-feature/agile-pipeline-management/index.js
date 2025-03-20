import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
const AgilePipeLineManagement = () => {
  return (
    <div className="aglie-pipeline-management-wrapper marginSpaceTop" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img src={Images.proCustomisable} alt="proCustomisable" type="image/svg+xml"/>
      <div className="content-wrapper">
        <p className="sale-title">Customisable</p>
        <p className="sales-heading-sales">Statuses &</p>
        <p className="sales-type">Project Highlights</p>
        <p className="sales-description-sales">
        Utilise multiple tools to view project statuses,<br></br> customisable by colour and status name. 
        Multiple<br></br> filters allow you to quickly find and see exactly <br></br>what you’re looking for.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
