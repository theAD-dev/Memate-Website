import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
const AgilePipeLineManagement = () => {
  return (
    <div className="aglie-pipeline-management-wrapper marginSpaceTop">
      <img src={Images.proCustomisable} />
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
