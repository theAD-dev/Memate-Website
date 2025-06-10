import React from "react";
import "./style.css";
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
        <p className="sale-title">Productive</p>
        <p className="sales-heading-sales">Individual </p>
        <p className="sales-type">Project Calendar</p>
        <p className="sales-description-sales">
        Each office gets its own project schedule while <br></br>still being part of the overall business structure.
        </p>
      </div>
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/productive-image.png" alt="Productive"  className="geolocation"/>
    </div>
  );
};

export default SalesProcessOptimiation;
