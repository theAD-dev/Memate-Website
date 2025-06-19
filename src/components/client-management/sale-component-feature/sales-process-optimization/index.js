import React from "react";
import "./style.css";
import Images from "../../../../assests/images";


const CMWise = () => {

  return (
    <div className="sales-management-wrapper-dataF " data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Wise</p>
        <p className="sales-heading-salesF">Complete</p>
        <p className="sales-typeF">optimisation <br></br> software</p>
        <p className="sales-description-salesF">
        A CRM where you can see all your client requests,<br/>complete projects, and ongoing projects with 
        just a few<br/> clicks. That’s what we call smart and simple software for <br/>client database management.
        </p>
      </div>
       <div className="sales-imageF">
      <img src={Images.ClientHistory}  className="section2 sales-process-optimization-image" type="image/svg+xml"/>
      </div>
    </div>
  );
};

export default CMWise;
