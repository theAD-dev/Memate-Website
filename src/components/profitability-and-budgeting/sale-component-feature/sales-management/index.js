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
      <img src={Images.budEfficient} />
      <div className="content-wrapper">
        <p className="sale-title">Efficient</p>
        <p className="sales-heading-sales">Quotation  </p>
        <p className="sales-type">system   </p>
        <p className="sales-description-sales">
        In meMate, we developed the quotation system to <br></br>set a budget for each position, 
        calculating every<br></br> margin or markup. This allows your business to <br></br>
        turn those figures into operational profit, providing <br></br>clear financial insight from the start.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
