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
      <img src={Images.OrderHistory} alt="OrderHistory" className="" type="image/svg+xml" /></div>
      <div className="content-wrapperF ">
        <p className="sale-titleF">Essential</p>
        <p className="sales-heading-salesF">Supplier</p>
        <p className="sales-typeF">order history</p>
        <p className="sales-description-salesF">
        Easily view your previous orders for each supplier. This<br/> feature helps you track order history,
         review past <br/>transactions, and make informed decisions, all in one<br/> convenient location.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
