import React from "react";
import Images from "../../assests/images";
import style from './business.module.scss';
import "./styles.css";
import { Link } from "react-router-dom";
import TronButton from "../../layout/hover-button/tourn-but";
const BussinessManagement = () => {
  return (
    <div className={style.homePageContent} >
      <div className="home-page-section" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className={style.homePlatform}>
          <h1>
          Business Management Software</h1>
          <h2>All-in-One Platform</h2>
        </div>
         <div className="gradientHeading gradiientColor">
            to run your <br /> business
          </div>
      </div>
      <div className={style.imageWrapper} >
           {/* <img src={Images.landingHero} /> */}
        <div className={style.macBookImage}>
          <div className={style.bigimgmac}>
          <div className={style.bigimgmacMain}>
          <img src={Images.landingHero}  alt="Landing Hero" />
          {/* <picture>
            <source srcSet={Images.landingHero} media="(min-width: 2000px)" />
            <source srcSet={Images.landingHero1x} media="(min-width: 1921px)" />
            <img src={Images.landingHero1x} alt="Landing Hero" />
          </picture> */}


          </div>
            <div className="iphone-image">
              <img src={Images.landingHeroiPhone} alt="landingHeroiPhone" data-aos="aos-fade"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="200"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="aos-fade"/>
            </div>
            <div className="create-new-text">
              <img src={Images.landingHerotask} alt="landingHerotask" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="300"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="aos-fade" />
            </div>
            <div className="create-new-model">
              <img src={Images.landingHeromodel} alt="landingHeromodel" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="aos-fade" />
            </div>

            <div className="metric-item">
              <img src={Images.landingHeroitem} alt="landingHeroitem" data-aos="fade-up"
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
