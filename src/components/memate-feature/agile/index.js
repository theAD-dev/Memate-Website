import React from "react";
import FeatureCard from "../card";
import Images from "../../../assests/images";
import './style.css';
// import PopupImage from "../../../svg/PopupImage";
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
          // maxImage={<img src={Images.popup} type="image/svg+xml"/>}
          // https://memate-website.s3.ap-southeast-2.amazonaws.com/media/agile1x.png
          maxImage={
            <img
              srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/agile3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/agile2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/agile1x.png'} 1800w`}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
              src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/agile3x.png'}
            />
          }
          // change
          // maxImage={<PopupImage/>}
        />
      </div>
    </div>
  );
};

export default MeMateFeatureAgile;
