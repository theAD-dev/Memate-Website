import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SuitableTender = () => {
  return (
    <div className="suitable-tender-wrapper marginSpaceTop" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="4000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper">
        <p className="sale-title">Agile</p>
        <p className="sales-heading-sales">Tool  </p>
        <p className="sales-type">for your business</p>
        <p className="sales-description-sales">
        This is unprecedented functionality, available <br></br>exclusively in meMate, providing complete <br></br>
        transparency, control, and motivation for your<br></br> entire business team.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
      <img src={Images.jobAgile} />
     
      </div>
    </div>
  );
};

export default SuitableTender;
