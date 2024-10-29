import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const CRMSalesTool = () => {
  return (
    <div className="crmtool-manager-wrapper">
      <div className="content-wrapper">
        <p className="sale-title">Intuitive</p>
        <p className="sales-heading-sales">Client relationship</p>
        <p className="sales-type">management <br></br> database</p>
        <p className="sales-description-sales">
        The structured database of clients is of great <br></br>value to the business and helps with business <br></br>
        growth. meMate is designed with firm CRM <br></br>capabilities to help your management keep the<br></br> database clean, safe, 
        and accessible. It also allows<br></br> them to upload new clients quickly and easily.
        </p>
      </div>
      <div className="">
        <div className="modal-contact">
          <img src={Images.ClientRelationship} />

        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
