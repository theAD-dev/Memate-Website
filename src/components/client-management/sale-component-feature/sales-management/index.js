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
      <img className="section1" src={Images.ClientTable} alt="ClientTable" type="image/svg+xml" />
      <div className="content-wrapper ">
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
