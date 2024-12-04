import React from "react";
import FeatureCard from "../card";
import Images from "../../../assests/images";
import './style.css';
const MeMateFeatureAgile = () => {
  return (
    <div className="agile-container-section mainOperationRight"  data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1600"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="Agile"
          topHeading="Total control"
          mainHeading="anywhere"
          description="At any stage, view projects, work, linked expenses, employee time, and subcontractors. Gain a clear overview of what’s happening in your company at any time."
          cardButton="See All Features "
          maxImage={<img src={Images.popup} />}
        />
      </div>
    </div>
  );
};

export default MeMateFeatureAgile;
