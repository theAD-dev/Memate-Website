import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Agile</p>
        <p className="sales-heading-salesF">invoices Due  </p>
        <p className="sales-typeF">followups   </p>
        <p className="sales-description-salesF">
        Follow up on invoices with preset templates in just <br></br>a few clicks, reminding your 
        customers when an <br></br>invoice is due. This helps reduce the volume of <br></br>unpaid invoices and ensures timely payments.
        </p>
      </div>
      <div className="sales-imageF">
      <img src={Images.invoAgile}  className="sales-process-optimization-image" type="image/svg+xml" /></div>
    </div>
  );
};

export default SalesProcessOptimiation;
