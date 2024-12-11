import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SuitableTender = () => {
  return (
    <div className="suitable-tender-wrapper marginSpaceTop" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper">
        <p className="sale-title">Centralised</p>
        <p className="sales-heading-sales">software</p>
        <p className="sales-type">for your business</p>
        <p className="sales-description-sales">
        Create tasks, assign them to individual <br/>contractors,
         monitor progress in real time,<br/> approve upon completion, 
         and communicate all <br/>within one platform.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
      <img src={Images.ContractorBusiness} />
     
      </div>
    </div>
  );
};

export default SuitableTender;
