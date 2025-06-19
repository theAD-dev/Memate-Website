import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
const AgilePipeLineManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="sales-imageF">
      <img src={Images.invOrganised} alt="invOrganised" type="image/svg+xml" /></div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Organised</p>
        <p className="sales-heading-salesF">Client </p>
        <p className="sales-typeF">statements</p>
        <p className="sales-description-salesF">
        Send your clients a complete statement of <br></br> outstanding invoices to keep them informed. 
        You<br></br>  can also print out the invoices that need your<br></br>  team’s attention for easy follow-up.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
