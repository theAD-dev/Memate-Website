import React from "react";
import Images from "../../../../assests/images";
import "./style.css";

const AgilePipeLineManagement = () => {

  return (
    <div className="aglie-pipeline-management-wrapper marginSpaceTop" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img src={Images.OrderHistory} className=""/>
      <div className="content-wrapper ">
        <p className="sale-title">Essential</p>
        <p className="sales-heading-sales">Supplier</p>
        <p className="sales-type">order history</p>
        <p className="sales-description-sales">
        Easily view your previous orders for each<br></br> supplier. This feature helps you track order<br></br> history,
         review past transactions, and make<br></br> informed decisions, all in one convenient location.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
