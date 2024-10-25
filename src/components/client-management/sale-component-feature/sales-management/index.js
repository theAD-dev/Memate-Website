import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-data">
      <img src={Images.ClientTable} />
      <div className="content-wrapper">
        <p className="sale-title">Intelligent </p>
        <p className="sales-heading-sales">Clients</p>
        <p className="sales-type">management</p>
        <p className="sales-description-sales">
        Keep all your existing clients or manage your <br></br>prospective clients in one place. 
        One of the most<br></br> important CRM tools for small businesses is to <br></br>keep your 
        client database organised, secure, and <br></br>well-structured. 
        Easily accessible for marketing <br></br>and statistics.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
