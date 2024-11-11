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
      <div className="content-wrapper">
        <p className="sale-title">Agile</p>
        <p className="sales-heading-sales">invoices Due  </p>
        <p className="sales-type">followups   </p>
        <p className="sales-description-sales">
        Follow up on invoices with preset templates in just <br></br>a few clicks, reminding your 
        customers when an <br></br>invoice is due. This helps reduce the volume of <br></br>unpaid invoices and ensures timely payments.
        </p>
      </div>
      <img src={Images.invoAgile}  className="sales-process-optimization-image"/>
    </div>
  );
};

export default SalesProcessOptimiation;
