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
        <p className="sale-title">Seamless</p>
        <p className="sales-heading-sales">Accessible </p>
        <p className="sales-type">Data history </p>
        <p className="sales-description-sales">
        We’ve designed everything for you to easily store <br></br>information related to your business 
        projects. With <br></br>just two clicks, you can retrieve the complete<br></br> project history.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
      <img src={Images.commSeamless} alt="commSeamless" type="image/svg+xml" />
     
      </div>
    </div>
  );
};

export default SuitableTender;
