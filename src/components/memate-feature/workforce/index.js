import React from "react";
import FeatureCard from "../card";
import Images from "../../../assests/images";
import './style.css';
const MeMateWorkForce = () => {
  return (
    <div className="workforce-container">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="In-depth"
          topHeading="Understand"
          mainHeading="your workforce"
          description="Efficiently track employee and subcontractor hours with real-time updates on their progress. Our system also streamlines timesheet and invoice submissions."
          cardButton="See All Features "
          maxImage={<img src={Images.underStand} />}
        />
      </div>
    </div>
  );
};

export default MeMateWorkForce;
