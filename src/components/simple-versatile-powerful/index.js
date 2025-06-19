import React from "react";
import PostCard from "./post";
import Images from "../../assests/images";
import "./style.css";
const SimpleVersatilePowerful = () => {
  return (
    <div className="simple-box ">
      <div className="section-heading">
        <div className="simpleH2Heading sequel_sans">Simple. Versatile. Powerful.</div>
      </div>
      <div className="powerful-client-wrapper " data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="2500"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom">
        <div className="powerful-client shadowRightline4 shadowLeftline4">
          <PostCard
            userImage={<img src={Images.owners} alt="owners" type="image/svg+xml" />}
            storiesDisp="Built for regular business owners"
          />
          <PostCard
            userImage={<img src={Images.industries} alt="industries" type="image/svg+xml" />}
            storiesDisp="Suitable for 90% of all industries"
          />
          <PostCard
            userImage={<img src={Images.business} alt="business" type="image/svg+xml" />}
            storiesDisp="Redefining the way business operates"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleVersatilePowerful;
