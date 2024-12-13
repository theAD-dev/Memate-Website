import React from "react";
import "./style.css";
import  Images  from "../../../assests/images";
import { Link } from "react-router-dom";
import TronButton from "../../../layout/hover-button/tourn-but";


const MeMateFeatureStreamline = () => {

  return (
    <div className="feature-section-container">
      <div className="features-section">
      <div className="memate heading-margin">
        <h2>Memate</h2>
        <span className="gradientAnimenate">features</span>
      </div>
      <div className="all-in-one"  data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1200"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className="stream-line">
          <div className="main-operation">
            <div className="operation-left">
              <p className="all-text">All-in-one</p>
              <h2>Streamline</h2>
              <div className="mediumHeadText">operations</div>

              <div className="operation-desp">
                <p>
                Our software provides robust workflows, ensuring managers follow firm guidelines. It guarantees every project is transparent and accountable, and all business activities are accurately reflected in the system, keeping everything secure.</p>
              </div>
              {/* <button className="get-started-btn">Request a Demo</button> */}
              <div className="request-btn request-btn-bg">
            <Link to='https://dev.memate.com.au/requestdemo' target="_blank" className="nav-btn--get-started get-started-border-box  navbar-link"><TronButton text="Request a Demo" /></Link>
          </div>
            </div>

            <div className="operation-right">
              <span className="gradientAnimenate"> memate </span>
              <div className="max-image">
                <img src={Images.maxImage} />
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
