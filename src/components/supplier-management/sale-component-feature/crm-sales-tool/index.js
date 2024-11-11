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
      <div className="content-wrapper ">
        <p className="sale-title">Helpful </p>
        <p className="sales-heading-sales">Supplier </p>
        <p className="sales-type">management </p>
        <p className="sales-description-sales">
        Our Supplier Management feature simplifies<br></br> handling your supplier relationships. 
        It shows all <br></br>previous and existing orders, 
        payment statuses, <br></br>and overall turnover, helping you navigate exact<br></br> expenses efficiently.
        </p>
      </div>
      <div className="">
        <div className="modal-contact ">
          <img src={Images.HelpfullSupplier} />
          
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
