import React from "react";
import Images from "../../../assests/images";
import "./style.css";
import { Link } from "react-router-dom";
import TronButton from "../../../layout/hover-button/tourn-but";
import WhiteNormalButton from "../../../layout/hover-button/WhiteNormalButton";
// import PowerfulMotivateImage from "../../../svg/PowerfulMotivateImage";
const MeMateFeatureMotivateTeam = () => {
  return (
    <div
      className="motivate-team-wrapper"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="1500"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="efficiency-section">
        <div className="all-in-one ">
          <div className="strean-line ">
            <div className="boost-profits shadowRightline1 shadowLeftline1">
              <div className="operation-left">
                <p className="all-text">Powerful</p>
                <div className="smallH2Heading">Motivate</div>
                <div className="mediumHeadText">your team</div>
                <div className="operation-desp">
                  <p>
                    Motivate your team by showing real-time results and
                    potential rewards for achieving targets. Encourage your
                    employees and contractors to perform at their best.
                  </p>
                </div>
                <div className="request-btn request-btn-bg">
                  <Link
                    to="/features"
                    className="nav-btn--get-started get-started-border-box navbar-link"
                  >
                    <WhiteNormalButton text="See All Features " />
                  </Link>
                </div>
                {/* <button className="get-started-btn">See All Features </button> */}
              </div>
              <div className="operation-right">
                <div className="motivate-image motivate-imagespace motivateImageSetter">
                  {/* <img className="leptop" src={Images.macWithIphone} style={{width: "100%"}} type="image/svg+xml"/> */}
                  {
                    <img
                      srcSet={`${"https://memate-website.s3.ap-southeast-2.amazonaws.com/media/motivate3x.png"} 600w, ${"https://memate-website.s3.ap-southeast-2.amazonaws.com/media/motivate2x.png"} 1200w, ${"https://memate-website.s3.ap-southeast-2.amazonaws.com/media/motivate1x.png"} 1800w`}
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      src={
                        "https://memate-website.s3.ap-southeast-2.amazonaws.com/media/motivate3x.png"
                      }
                    />
                  }
                  {/* <PowerfulMotivateImage/> */}
                  {/* <div className="mac-with-iphone">
                    <img src={Images.macWithIphone} style={{width: "100%"}}/>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeMateFeatureMotivateTeam;
