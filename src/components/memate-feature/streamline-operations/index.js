import React from "react";
import "./style.css";
import Images from "../../../assests/images";
import { Link } from "react-router-dom";
import TronButton from "../../../layout/hover-button/tourn-but";
import WhiteButtonWithoutGradient from "../../../layout/hover-button/WhiteButtonWithoutGradient";
import WhiteNormalButton from "../../../layout/hover-button/WhiteNormalButton";
// import MaxImage from "../../../svg/MaxImage";

const MeMateFeatureStreamline = () => {
  return (
    <div className="feature-section-container request-btn-update">
      <div className="features-section">
        <div className="memate heading-margin">
          <div className="mainHeadingH2">Memate</div>
          <span className="gradientAnimenate">features</span>
        </div>
        <div
          className="all-in-one"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1200"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="stream-line">
            <div className="main-operation shadowRightline shadowLeftline">
              <div className="operation-left">
                <p className="all-text">All-in-one</p>
                <div className="smallH2Heading">Streamline</div>
                <div className="mediumHeadText">operations</div>

                <div className="operation-desp">
                  <p>
                    Our software provides robust workflows, ensuring managers
                    follow firm guidelines. It guarantees every project is
                    transparent and accountable, and all business activities are
                    accurately reflected in the system, keeping everything
                    secure.
                  </p>
                </div>
                {/* <button className="get-started-btn">Request a Demo</button> */}
                <div className="request-btn request-btn-bg">
                  <Link
                    to="https://app.memate.com.au/requestdemo"
                    target="_blank"
                    className="nav-btn--get-started get-started-border-box  navbar-link"
                  >
                    <WhiteNormalButton text="Book a Demo" />
                  </Link>
                </div>
              </div>
              <div className="operation-right">
                <span className="gradientAnimenate"> memate </span>
                <div className="max-image">
                  {/* <img src={Images.maxImage} type="image/svg+xml" /> */}
                  <img
                    srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/girlImage3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/girlImage2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/girlImage1x.png'} 1800w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/girlImage3x.png'}
                  />
                  {/* <MaxImage/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeMateFeatureStreamline;
