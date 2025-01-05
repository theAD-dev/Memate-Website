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
      <img src={Images.reportInsightful} alt="reportInsightful" />
      <div className="content-wrapper">
        <p className="sale-title">Insightful</p>
        <p className="sales-heading-sales">Executive    </p>
        <p className="sales-type"> reports      </p>
        <p className="sales-description-sales">
        At meMate, we strive to make things easier <br></br>without compromising functionality. Our executive <br></br>reports are designed 
        based on feedback from<br></br> business owners and continuous surveys,<br></br> ensuring they meet the real needs of your<br></br> business.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
