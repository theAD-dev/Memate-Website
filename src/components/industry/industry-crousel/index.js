import React from "react";
import "./style.css";
import IndustryImages from "../../../assests/industry-images";
const IndustryCrousel = () => {
  return (
    <div className="industry-crousel-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="industry-crousel-content">
        <span className="industry-crousel-heading">
          MeMate has been a game-changer for our private membership<br/>club.
        </span>
        <div className="industry-crousel-body-content">
          <div className="industry-circle-logo">
            <span>EL</span>
          </div>

          <p className="industry-crousel-1-heading">Elite Life</p>
          <p className="industry-crousel-1-sub-heading">
            Head of Design, Layers
          </p>
          <div className="industry-crousel-star-rating">
            <img
              src={IndustryImages.starIcon}
              style={{ height: "20px", width: "20px" }}
            />
            <img
              src={IndustryImages.starIcon}
              style={{ height: "20px", width: "20px" }}
            />
            <img
              src={IndustryImages.starIcon}
              style={{ height: "20px", width: "20px" }}
            />
            <img
              src={IndustryImages.starIcon}
              style={{ height: "20px", width: "20px" }}
            />
            <img
              src={IndustryImages.starIcon}
              style={{ height: "20px", width: "20px" }}
            />
          </div>
          <div className="crousel-indication">
            <div className="crousel-selected-page"></div>
            <div className="crousel-non-selected-page"></div>
            <div className="crousel-non-selected-page"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCrousel;
