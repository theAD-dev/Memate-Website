import React from "react";
import FeatureCard from "../card";
import Images from "../../../assests/images";
import './style.css';
// import Understand from "../../../svg/Understand";
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
          className="shadowRightline1 shadowLeftline1"
          description="Efficiently track employee and subcontractor hours with real-time updates on their progress. Our system also streamlines timesheet and invoice submissions."
          cardButton="See All Features "
          // maxImage={<img src={Images.underStand} type="image/svg+xml" />}
          maxImage={
            <img
              srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/in-depth3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/in-depth2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/in-depth1x.png'} 1800w`}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
              src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/in-depth3x.png'}
            />
          }
          // maxImage={<Understand/>}
        />
      </div>
    </div>
  );
};

export default MeMateWorkForce;
