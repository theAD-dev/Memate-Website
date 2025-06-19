import React from "react";
import "./style.css";
import FeatureCard from "../card";
import Images from "../../../assests/images";
// import InsightImage from "../../../svg/InsightImage";
const MeMateFinanceInsights = () => {
  return (
    <div className="efficiency-section-wrapper mainOperationRight"  data-aos="fade-up"
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
           className="shadowRightline2 shadowLeftline2"
          description="Oversee company performance by product or service type. Reward managers based on actual performance, and view transparent, easy-to-understand statistics."
          cardButton="See All Features "
          // maxImage={<img src={Images.financeImage} type="image/svg+xml" />}
          maxImage={
            <img
              srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/finance3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/finance2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/finance1x.png'} 1800w`}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
              src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/finance3x.png'}
            />
          }
          // change
          // maxImage={<InsightImage/>}
        />
      </div>
    </div>
  );
};

export default MeMateFinanceInsights;
