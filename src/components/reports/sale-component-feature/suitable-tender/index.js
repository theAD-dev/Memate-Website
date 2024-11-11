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
        <p className="sale-title">Convenient</p>
        <p className="sales-heading-sales">Classic</p>
        <p className="sales-type">Reporting</p>
        <p className="sales-description-sales">
        If you need classic profit and loss reports or<br></br> project cost reports, 
        you can access them easily <br></br>with meMate. If there’s something 
        missing, just<br></br> reach out to us, and we’ll develop the custom<br></br> reporting you need.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
      <img src={Images.reportConvenient} />
     
      </div>
    </div>
  );
};

export default SuitableTender;
