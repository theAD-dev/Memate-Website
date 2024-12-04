import React from "react";
import FeatureCard from "../card";
import Images from "../../../assests/images";
import './style.css';
const MeMateWorkForce = () => {
  return (
    <div className="workforce-container mainOperationRight mainOperationspace"  data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1700"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
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
