import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
const AgilePipeLineManagement = () => {
  return (
    <div className="aglie-pipeline-management-wrapper">
      <img src={Images.ClientInformation} />
      <div className="content-wrapper">
        <p className="sale-title">Dynamic</p>
        <p className="sales-heading-sales">Detailed</p>
        <p className="sales-type">client information </p>
        <p className="sales-description-sales">
        You can add multiple client locations, including<br></br> detailed company descriptions, 
        key personnel,<br></br> and addresses formatted to Australian standards.<br></br> We’ve thought of everything.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
