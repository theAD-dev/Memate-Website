import React from "react";
import Images from "../../assests/images";
import "./styles.css";
import { Link } from "react-router-dom";
import TronButton from "../../layout/hover-button/tourn-but";
const BussinessManagement = () => {
  return (
    <div className="home-page-content" >
      <div className="home-page-section" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className="home-platform">
          <h1>
          Business Management Software</h1>
          <h2>All-in-One Platform</h2>
        </div>

        <div className="heding-text-top marginBottomSpace">
          <h1 className="text">
            to run your <br /> business
          </h1>
        </div>
      </div>
      <div className="image-wrapper" >
           {/* <img src={Images.landingHero} /> */}
        <div className="macBook-image">
          <div className="big-img-mac">
          <img src={Images.landingHero} style={{ width: "898.34px" }} alt="Landing Hero" />
            <div className="iphone-image">
              <img src={Images.landingHeroiPhone} data-aos="aos-fade"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="200"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="aos-fade"/>
            </div>
            <div className="create-new-text">
              <img src={Images.landingHerotask} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="300"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="aos-fade" />
            </div>
            <div className="create-new-model">
              <img src={Images.landingHeromodel} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="aos-fade" />
            </div>

            <div className="metric-item">
              <img src={Images.landingHeroitem} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="700"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="aos-fade" />
            </div>
          </div>
        </div>
      </div>

      <div className="how-to-use">
        <p>Easy-to-Use Business Management Software: </p>
        <p>to Start, Run, and Succeed in Your Business</p>
      </div>

      <div className="businesses-mode">
        <span>
          Made for Small to Medium Businesses for Simplicity and Order
        </span>
      </div>

      <div className="request-btn">
        <Link to='https://dev.memate.com.au/requestdemo' target="_blank" className="nav-btn--get-started  navbar-link"><TronButton text="Request a Demo" /></Link>
      </div>
    </div>
  );
};

export default BussinessManagement;
