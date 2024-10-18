import React from "react";
import "./style.css";
import FeatureCard from "../card";
import Images from "../../../assests/images";
const MeMateFinanceInsights = () => {
  return (
    <div className="efficiency-section-wrapper">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="Finance"
          topHeading="Real-time financial"
          mainHeading="insights"
          description="Oversee company performance by product or service type. Reward managers based on actual performance, and view transparent, easy-to-understand statistics."
          cardButton="See All Features "
          maxImage={<img src={Images.financeImage} />}
        />
      </div>
    </div>
  );
};

export default MeMateFinanceInsights;
