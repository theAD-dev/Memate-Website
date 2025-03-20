import React from "react";
import "./style.css";
import Images from "../../../../assests/images";


const SalesProcessOptimiation = () => {

  return (
    <div className="sales-process-optimization-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper">
        <p className="sale-title">Wise</p>
        <p className="sales-heading-sales">Complete</p>
        <p className="sales-type">optimisation <br></br> software</p>
        <p className="sales-description-sales">
        A CRM where you can see all your client requests,<br></br> complete projects, and ongoing projects with 
        just<br></br> a few clicks. That’s what we call smart and simple <br></br>software for client database management.
        </p>
      </div>
      <img src={Images.ClientHistory}  className="section2 sales-process-optimization-image" type="image/svg+xml"/>
    </div>
  );
};

export default SalesProcessOptimiation;
