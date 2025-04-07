import React from "react";
import "./style.css";
import FeatureCard from "../card";
import Images from "../../../assests/images";
// import BoostImage from '../../../svg/BoostImage';

const MemateFeatureBoastEfficiency = () => {
  return (
    <div
      className="efficiency-section-container mainOperationRight"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="1300"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="efficiency-section">
        <FeatureCard
          subHeading="Dashboard"
          topHeading="Boost Profits"
          mainHeading="& efficiency"
          description="See the real-time costs and time spent on each product or service, and adjust pricing by viewing operational profits in real time."
          cardButton="See All Features"
          // maxImage={(<img src={Images.boostImage} type="image/svg+xml" />)}
          maxImage={
            <img
              srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/dashboard3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/dashboard2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/dashboard1x.png'} 1800w`}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
              src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/dashboard3x.png'}
            />
          }
          // change
          // maxImage={(<BoostImage/>)}
        />
      </div>
    </div>
  );
};

export default MemateFeatureBoastEfficiency;
