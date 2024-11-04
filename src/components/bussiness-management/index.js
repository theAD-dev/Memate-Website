import React from "react";
import Images from "../../assests/images";
import {ReactComponent as LandingHeroImage} from "../../assests/images/Web.svg"
import "./styles.css";
import { Link } from "react-router-dom";
import TronButton from "../../layout/hover-button/tourn-but";
const BussinessManagement = () => {
  return (
    <div className="home-page-content">
      <div className="home-page-section">
        <div className="home-platform">
          <h2>
            Business management cloud software. <br />
            All-in-One Platform
          </h2>
        </div>

        <div className="heding-text-top">
          <h1 className="text">
            to run your <br /> business
          </h1>
        </div>
      </div>
      <div className="image-wrapper">
           <LandingHeroImage/>
        {/* <div className="macBook-image">
          <div className="big-img-mac">
            <img src={Images.macLeptop} />
            <div className="iphone-image">
              <img src={Images.iphone} />
            </div>
            <div className="create-new-text">
              <img src={Images.rightImage} />
            </div>

            <div className="metric-item">
              <img src={Images.metricItem} />
            </div>
          </div>
        </div> */}
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
        <Link to='https://dev.memate.com.au/requestdemo' className="nav-btn--get-started navbar-link"><TronButton text="Request a Demo" /></Link>
      </div>
    </div>
  );
};

export default BussinessManagement;
