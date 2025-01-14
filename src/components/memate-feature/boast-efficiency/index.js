import React from 'react'
import './style.css';
import FeatureCard from '../card';
import Images from '../../../assests/images';

const MemateFeatureBoastEfficiency = () => {
  return (
    <div className="efficiency-section-container mainOperationRight" data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="1300"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom">
        <div className="efficiency-section">
            <FeatureCard
                subHeading="Dashboard"
                topHeading="Boost Profits"
                mainHeading="& efficiency"
                description="See the real-time costs and time spent on each product or service, and adjust pricing by viewing operational profits in real time."
                cardButton="See All Features"
                maxImage={(<img src={Images.boostImage} />)}
            />
        </div>
    </div>
  )
}

export default MemateFeatureBoastEfficiency;
