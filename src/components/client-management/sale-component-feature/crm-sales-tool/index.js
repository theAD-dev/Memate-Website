import React from "react";
import "./style.css";
import Images from "../../../../assests/images";

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
          <img src={Images.ClientRelationship} type="image/svg+xml" />

        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
