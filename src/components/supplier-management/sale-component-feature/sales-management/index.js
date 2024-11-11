import React from "react";
import "./style.css";
import Images from "../../../../assests/images";

const SalesManagement = () => {
  
  return (
    <div className="sales-management-wrapper-data" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img src={Images.SupplierTable} className="" />
      <div className="content-wrapper ">
        <p className="sale-title">Organised </p>
        <p className="sales-heading-sales">Supplier</p>
        <p className="sales-type">database</p>
        <p className="sales-description-sales">
        Keep your supplier information organised and <br></br>accessible with our database feature. 
        Easily <br></br>manage details, track orders, and improve<br></br> communication with your 
        suppliers, all in one<br></br> place. This tool helps you streamline your supply<br></br> chain operations.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
