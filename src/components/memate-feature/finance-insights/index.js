import React from "react";
import "./style.css";
import FeatureCard from "../card";
import Images from "../../../assests/images";
const MeMateFinanceInsights = () => {
  return (
    <div className="efficiency-section-wrapper"  data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1400"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
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
