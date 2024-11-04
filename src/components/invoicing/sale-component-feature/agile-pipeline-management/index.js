import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
const AgilePipeLineManagement = () => {
  return (
    <div className="aglie-pipeline-management-wrapper marginSpaceTop">
      <img src={Images.invOrganised} />
      <div className="content-wrapper">
        <p className="sale-title">Organised</p>
        <p className="sales-heading-sales">Client </p>
        <p className="sales-type">statements</p>
        <p className="sales-description-sales">
        Send your clients a complete statement of <br></br> outstanding invoices to keep them informed. 
        You<br></br>  can also print out the invoices that need your<br></br>  team’s attention for easy follow-up.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
