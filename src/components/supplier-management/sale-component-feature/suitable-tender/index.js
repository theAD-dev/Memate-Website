import React from "react";
import "./style.css";
import Images from "../../../../assests/images";

const SuitableTender = () => {
 

  return (
    <div className="suitable-tender-wrapper marginSpaceTop" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3300"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper ">
        <p className="sale-title">Convenient</p>
        <p className="sales-heading-sales">Supplier</p>
        <p className="sales-type">reports</p>
        <p className="sales-description-sales">
        Get a clear supplier overview that highlights<br></br> where you spend the most. This feature helps you <br></br>identify key suppliers, 
        allowing you to make <br></br>informed executive decisions based on spending <br></br>patterns.
        </p>
      </div>
      <div className="suitable-table-image-wrapper section2">
      <img src={Images.SupplierReport} />
     
      </div>
    </div>
  );
};

export default SuitableTender;
