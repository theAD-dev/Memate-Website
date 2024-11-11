import React from "react";
import "./style.css";
import Images from "../../../../assests/images";

const SalesProcessOptimiation = () => {

  return (
    <div className="sales-process-optimization-wrapper " data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper ">
        <p className="sale-title">Insightful</p>
        <p className="sales-heading-sales">Help</p>
        <p className="sales-type">your managers </p>
        <p className="sales-description-sales">
        Quickly find your preferred suppliers with just a <br></br>few clicks. This feature allows management to <br></br>easily 
        access and select the suppliers you need,<br></br> streamlining your workflow and saving time.
        </p>
      </div>
      <img src={Images.Insightful}  className="section2 sales-process-optimization-image"/>
    </div>
  );
};

export default SalesProcessOptimiation;
