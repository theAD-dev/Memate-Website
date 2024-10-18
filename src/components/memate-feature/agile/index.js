import React from "react";
import FeatureCard from "../card";
import Images from "../../../assests/images";
import './style.css';
const MeMateFeatureAgile = () => {
  return (
    <div className="agile-container-section">
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
